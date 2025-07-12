import { ethers } from 'ethers';
import {uploadToIPFS} from './pinata'; 

let provider = new ethers.BrowserProvider(window.ethereum);
let signer;
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const connectWallet = async () => {

    console.log("Connecting to wallet...");

    try {
        if(!window.ethereum) {
            console.log("MetaMask is not installed; using default provider.");
            provider = ethers.getDefaultProvider();
            document.getElementById('connect-wallet-button').innerText = `Connected`;
            document.getElementById('connect-wallet-button').disabled = true;
        } else {
            provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();
            let balance = await provider.getBalance(signer.getAddress())
            balance = ethers.formatEther(balance)  
            console.log("Connected to MetaMask wallet. provider balance = ", balance);
            document.getElementById('connect-wallet-button').innerText = `Connected`;
            document.getElementById('connect-wallet-button').disabled = true;
        }
    }catch (error) {
        console.error("Error connecting to wallet:", error);
        alert("Please install MetaMask or another Ethereum wallet provider.");
    }
}

export const getCampaigns = async () => {
    const contractABI = [
        "function getCampaigns() view returns (address[])"
    ];

    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    try {
        const campaigns = await contract.getCampaigns();
        return campaigns;
    } catch (error) {
        console.error("Error retrieving campaigns:", error);
        return [];
    }
}

// Dynamic Details and IPFS CID of campaign
export const getCampaignDetails = async (campaignAddress) => {
    const contractABI = [
        'function getCampaignIPFSMetadataCID(address _campaignAddress) view returns (string memory)'
    ];

    const campaignABI = [
        'function getRaisedAndTargetAmount() view returns (uint256, uint256)',
        'function getDuration() view returns (uint256)'
    ]

    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const campaignContract = new ethers.Contract(campaignAddress, campaignABI, provider);

    try {
        const metadata = await contract.getCampaignIPFSMetadataCID(campaignAddress);
        const [raisedAmount, goalAmount] = await campaignContract.getRaisedAndTargetAmount();
        const duration = await campaignContract.getDuration();
        return { metadata, goalAmount, raisedAmount, duration };
    } catch (error) {
        console.error("Error retrieving campaign details:", error);
        return null;
    }
}

export const createCampaign = async (title, description, goalAmount, duration, image) => { //////////////////////////////////////////
    if (!signer) {
        console.error("Wallet not connected. Please connect your wallet first.");
        connectWallet();
    }

    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const contractABI = [
        "function createCampaign(uint256 goalAmount, uint256 duration, string memory imageCID) public"
    ];

    const metadata = await uploadToIPFS(title, description, image);
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    try {
        const tx = await contract.createCampaign(goalAmount, duration, metadata);
        console.log("Transaction sent:", tx);
        await tx.wait();
        console.log("Transaction confirmed:", tx.hash);
    } catch (error) {
        console.error("Error creating campaign:", error);
    }
}