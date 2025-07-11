// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { Campaign } from "../src/Campaign.sol";

contract CampaignFactory {
    address[] private campaigns;
    mapping(address => string) private campaignAddressToipdfsMetaDataCID;

    event CampaignCreated(address indexed campaignAddress, address indexed owner, uint256 targetAmount, uint256 duration);

    function createCampaign(uint256 targetAmount, uint256 duration, string memory _ipfsMetaDataCID) external {
        Campaign newCampaign = new Campaign(msg.sender, targetAmount, duration);
        campaigns.push(address(newCampaign));
        campaignAddressToipdfsMetaDataCID[address(newCampaign)] = _ipfsMetaDataCID;
        emit CampaignCreated(address(newCampaign), msg.sender, targetAmount, duration);
    }

    function getCampaigns() external view returns (address[] memory) {
        return campaigns;
    }

    function getCampaignIPFSMetadataCID(address _campaignAddress) external view returns (string memory) {
        return campaignAddressToipdfsMetaDataCID[_campaignAddress];
    }
}

// IPFS will be implemented here

/* For the view page the site will call the getCampaigns() function to get all the campaigns.
   For each campaign, it will call getCampaignIPFSMetadataCID() to get the IPFS metadata CID.
   The frontend will then use this CID to fetch the campaign details from IPFS. */

// How?
// A for loop in the frontend will iterate through the campaigns array provided by getCampaigns().
// For each campaign address, it will call getCampaignIPFSMetadataCID() to retrieve the IPFS metadata CID.
// The frontend will then use this CID to fetch the campaign details from IPFS, allowing users to view the campaign information.
// This information includes static information like title, description, and image, which is stored in the IPFS metadata file.
// For dynamic information like funders and raised amount, the frontend will interact with the Campaign contract directly to fetch this data using the Campaign's address and its public functions.