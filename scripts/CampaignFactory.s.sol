// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { CampaignFactory } from "../src/CampaignFactory.sol";
import { Script, console } from "forge-std/Script.sol";

contract deployCampaignFactory is Script {
    function run() external {
        vm.startBroadcast();
        CampaignFactory campaignFactory = new CampaignFactory();
        vm.stopBroadcast();
        
        console.log("CampaignFactory deployed at:", address(campaignFactory));

    }
}