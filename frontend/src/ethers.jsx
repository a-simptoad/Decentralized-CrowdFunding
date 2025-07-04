import { ethers } from 'ethers';

let provider;
let signer;

export const connectWallet = async () => {

    console.log("Connecting to wallet...");

    if(!window.ethereum) {
        console.log("MetaMask is not installed; using default provider.");
        provider = ethers.getDefaultProvider();
    } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        let balance = await provider.getBalance(signer.getAddress())
        balance = ethers.formatEther(balance)  
        console.log("Connected to MetaMask wallet. provider balance = ", balance);
    }
}