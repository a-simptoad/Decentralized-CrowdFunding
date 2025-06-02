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
    uint256 private s_raisedAmount;
    address private immutable i_owner;
    uint256 private immutable i_targetAmount;
    uint256 private immutable i_deadline;
    uint256 private immutable i_creationTime;

    event Funded(address indexed funder, uint256 amount);

    modifier checkState() {
        if (status == CampaignStatus.Active && block.timestamp >= i_creationTime + i_deadline) {
            if (s_raisedAmount >= i_targetAmount) {
                status = CampaignStatus.Completed;
            } else {
                status = CampaignStatus.Failed;
            }
        }
        _;
    }

    constructor(address _owner, uint256 _targetAmount, uint256 _deadline) {
        i_owner = _owner;
        i_targetAmount = _targetAmount;
        i_deadline = _deadline;
        i_creationTime = block.timestamp;
        status = CampaignStatus.Active;
    }

    receive() external payable {
        //Check whether the campaign is active
        if(status != CampaignStatus.Active && block.timestamp - i_creationTime < i_deadline && s_raisedAmount < i_targetAmount) {   
            revert Campaign__CampaignNotActive();
        }

        if(msg.value <= 0) {
            revert Campaign__InvalidAmount();
        }

        funders.push(Funder(msg.sender, msg.value)); // msg.sender will be the address of the person sending eth to this contract.
        s_raisedAmount += msg.value;
        emit Funded(msg.sender, msg.value);
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

    function getDeadline () external view returns (uint256) {
        return i_deadline;
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

}

// Chainlink Automation can be implemented to check if goal of a campaign is met after the set deadline.
// Adding NFT rewards for funders to incentivize them.
// DAOs can be created to manage campaigns collectively and add a voting system for funders to decide on the campaign's future actions.
// // Adding IPFS or Arweave integration to store campaign details, images, and updates in a decentralized manner.
// Contract can also trade using ERC20 tokens instead of ETH.
// If the campaign fails, the contract gets self destructed and the funds are returned to the funders.