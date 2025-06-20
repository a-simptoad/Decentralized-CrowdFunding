import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

function connectWallet() {
  const provider = window.ethereum;
  if (!provider) {
    alert('Please install MetaMask or similar wallet');
    return;
  }
  else {
    provider.request({ method: 'eth_requestAccounts' })
      .then(accounts => {
        document.getElementById('button').innerText = "Connected";
        alert(`Connected to ${accounts[0]}`);
      })
      .catch(error => {
        console.error('Error connecting to wallet:', error);
        alert('Failed to connect wallet');
      });
  } 
}

  return (
    <>
      <div >
        <button onClick= {connectWallet} id='button' > Connect To Wallet</button>
        <h1>Decentralised CrowdFunding</h1>
        <p>Welcome to the Decentralised CrowdFunding platform!</p>
        <p>Here you can create and support crowdfunding campaigns in a decentralized manner.</p>
        <p>Connect your wallet to get started.</p>
        
      </div>
    </>
  )
  
}

export default App
