// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { Test, console } from "../lib/forge-std/src/Test.sol";
import { Campaign } from "../src/Campaign.sol";
import { HelperConfig } from "../script/HelperConfig.s.sol";

contract CampaignTest is Test {

    address private owner;
    uint256 private targetAmount;
    uint256 private deadline;
    Campaign campaign;
    HelperConfig config;

    function setUp() public {
        owner = address(0x123);
        targetAmount = 1000; // in USD
        deadline = 30 days;
        campaign = new Campaign(owner, targetAmount, deadline);
        config = new HelperConfig();

    }

    function testGetterFunctions() public {
        
        // Check target amount
        // assertEq(campaign.getRaisedAndTargetAmount(), targetAmount);
        (uint256 raisedAmount, uint256 target) = campaign.getRaisedAndTargetAmount();
        assertEq(raisedAmount, 0);
        assertEq(target, targetAmount);
        
        // Check deadline
        assertEq(campaign.getDeadline(), deadline);
        
    }
    function testTokenToUSDConversion() public {
        // // Setting the datafeed address for token address
        // campaign.setTokenDataFeed(
        //     0x3e622317f8C93f7328350cF0B56d9eD4C620C5d6,
        //     0x14866185B1962B63C3Ea9E03Bc1da838bab34C19 
        // );

        // // Fund Tokens
        // campaign.fundWithTokens(
        //     0x3e622317f8C93f7328350cF0B56d9eD4C620C5d6,
        //     100e18
        // );

        (address feed) = config.activeNetworkConfig();

        console.log("usd value", campaign.convertTokensToUSD(feed));
    }
    
}