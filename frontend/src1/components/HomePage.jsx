import {useNavigate} from 'react-router-dom';
import { ethers } from 'ethers';

export default function HomePage() {

    const navigate = useNavigate();

    async function connectWallet() {
        let provider;
        let signer = null;

        if( window.ethereum == null ) {
            alert('Please install MetaMask or similar wallet');
            provider = ethers.getDefaultProvider();
        } else {
            provider = new ethers.BrowserProvider(window.ethereum);
            document.getElementById('button').innerText = "Connected";
            signer = await provider.getSigner();
            navigate('/create-campaign');
        }
    }
    return (
    <div>
      <h1>Welcome to Decentralised CrowdFunding</h1>
      <p>Here you can create and support crowdfunding campaigns in a decentralized manner.</p>
      <p>Connect your wallet to get started.</p>
      <button id='button' onClick={connectWallet}>Connect To Wallet</button>
    </div>
  );
}