// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { Campaign } from "../src/Campaign.sol";

contract CampaignFactory {
    address[] private campaigns;
    mapping(address => string) private campaignAddressToipdfsMetaDataCID;

    event CampaignCreated(address indexed campaignAddress, address indexed owner, uint256 targetAmount, uint256 deadline);

    function createCampaign(uint256 targetAmount, uint256 deadline, string memory _ipfsMetaDataCID) external {
        Campaign newCampaign = new Campaign(msg.sender, targetAmount, deadline);
        campaigns.push(address(newCampaign));
        campaignAddressToipdfsMetaDataCID[address(newCampaign)] = _ipfsMetaDataCID;
        emit CampaignCreated(address(newCampaign), msg.sender, targetAmount, deadline);
    }

    function getCampaigns() external view returns (address[] memory) {
        return campaigns;
    }

    function getCampaignIPFSMetadataCID(address _campaignAddress) external view returns (string memory) {
        return campaignAddressToipdfsMetaDataCID[_campaignAddress];
    }
}

// IPFS will be implemented here