// Layout of the contract file:
// version
// imports
// errors
// interfaces, libraries, contract

// Inside Contract:
// Type declarations
// State variables
// Events
// Modifiers
// Functions

// Layout of Functions:
// constructor
// receive function (if exists)
// fallback function (if exists)
// external
// public
// internal
// private

// view & pure functions

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {AggregatorV3Interface} from "../lib/chainlink-brownie-contracts/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

error Campaign__CampaignNotActive();
error Campaign__InvalidAmount();
error Campaign__FundTransferFailed();


contract Campaign {
    enum CampaignStatus { Active, Completed, Failed }

    struct Funder {
        address addr;
        uint256 amount;
    }

    CampaignStatus private status;
    Funder [] private funders;
    mapping(address => address) private s_tokenAddressToDatafeeds;
    uint256 private s_tokenCounter;
    mapping(uint256 => string) private s_tokenIdToUri;
    uint256 private s_raisedAmount;
    address private immutable i_owner;
    uint256 private immutable i_targetAmount;
    uint256 private immutable i_duration;
    uint256 private immutable i_creationTime;

    event Funded(address indexed funder, uint256 amount);

    modifier checkState() {
        if (status == CampaignStatus.Active && block.timestamp >= i_creationTime + i_duration) {
            if (s_raisedAmount >= i_targetAmount) {
                status = CampaignStatus.Completed;
            } else {
                status = CampaignStatus.Failed;
            }
        }
        _;
    }

    constructor(address _owner, uint256 _targetAmount, uint256 _duration) {
        i_owner = _owner;
        i_targetAmount = _targetAmount;
        i_duration = _duration;
        i_creationTime = block.timestamp;
        status = CampaignStatus.Active;
    }

    receive() external payable {
        //Check whether the campaign is active
        if(status != CampaignStatus.Active && block.timestamp - i_creationTime < i_duration && s_raisedAmount < i_targetAmount) {   
            revert Campaign__CampaignNotActive();
        }

        if(msg.value <= 0) {
            revert Campaign__InvalidAmount();
        }

        funders.push(Funder(msg.sender, msg.value)); // msg.sender will be the address of the person sending eth to this contract.
        s_raisedAmount += msg.value;
        emit Funded(msg.sender, msg.value);
    }

    // Function will get the address of the token (USDC, DAI, etc.) and the amount of tokens to be funded.
    function fundWithTokens(address token, uint256 amount) external checkState {
        if(status != CampaignStatus.Active && block.timestamp - i_creationTime < i_duration && s_raisedAmount < i_targetAmount) {   
            revert Campaign__CampaignNotActive();
        }

        if(amount <= 0) {
            revert Campaign__InvalidAmount();
        }

        bool success = IERC20(token).transferFrom(msg.sender, address(this), amount);
        require(success, Campaign__FundTransferFailed());
        s_raisedAmount += convertTokensToUSD(s_tokenAddressToDatafeeds[token]) * amount;
        funders.push(Funder(msg.sender, amount));
        emit Funded(msg.sender, amount);
    }

    function checkUpkeep() external checkState{
        // This function can be used to check the status of the campaign.
        // It can be called by anyone, but it does not change the state of the contract.

        if (status == CampaignStatus.Completed) {
            // Transfer the funds to the owner
            (bool success, ) = i_owner.call{value: s_raisedAmount}("");
            require(success, Campaign__FundTransferFailed());
        } else if (status == CampaignStatus.Failed) {
            // Logic for failed campaign
        } else {
            revert Campaign__CampaignNotActive();
        }
        
    }

    function getDuration() external view returns (uint256) {
        return i_duration;
    }

    function getRaisedAndTargetAmount() external view returns (uint256, uint256) {
        return (s_raisedAmount, i_targetAmount);
    }

    function getStatus() external view returns (CampaignStatus) {
        return status;
    }

    function getFunders() external view returns (Funder[] memory) {
        return funders;
    }

    function setTokenDataFeed(address token, address datafeed) external {
        require(msg.sender == i_owner, "Only owner can set data feeds");
        s_tokenAddressToDatafeeds[token] = datafeed;
    }

    // supported tokens -> DAI, USDC, ETH
    function convertTokensToUSD(address datafeed) public view returns (uint256){
        // Logic to convert tokens to USD using Chainlink price feeds
        AggregatorV3Interface priceFeed = AggregatorV3Interface(datafeed);
        (, int256 price, , , ) = priceFeed.latestRoundData();
        return (uint256(price)) / 1e18;
    }
}

// Chainlink Automation can be implemented to check if goal of a campaign is met after the set deadline.
// Adding NFT rewards for funders to incentivize them.
// DAOs can be created to manage campaigns collectively and add a voting system for funders to decide on the campaign's future actions.
// // Adding IPFS or Arweave integration to store campaign details, images, and updates in a decentralized manner.
// // Contract can also trade using ERC20 tokens instead of ETH.
// If the campaign fails, the contract gets self destructed and the funds are returned to the funders.

// Still have to put the datafeed address for each token in the mapping s_tokenAddressToDatafeeds. (also for ETH/USD for getting amount)