import { useState } from 'react'
import { PinataSDK } from 'pinata'
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

const pinata = new PinataSDK({
  pinataJwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5NGRmYzRlMy1iZDU3LTQ4MGQtYTYzZS1kNjkyMjgxNmYxMWEiLCJlbWFpbCI6ImFyeWFuYWdhcndhbDcyN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiODc1OGNiMDU4NDE4NTFjNTI2N2IiLCJzY29wZWRLZXlTZWNyZXQiOiI1NzExNzg2ZDkzNzhhYzk1ZjkwMzZiMWRjNzEyN2Y0NWY5YzcwZjI3YzU1ODRjY2U1MzdlMTQwNDU3M2JiYmZlIiwiZXhwIjoxNzgyMzIxOTM5fQ.HvBZiigpuaGD0-xOhCtJf3J2WIxZ93fhf-0kyE4i5Xs',
  pinataGateway: 'purple-peaceful-kite-391.mypinata.cloud',
})

const uploadFile = async () => {
          const fileInput = document.getElementById('fileInput');
          if (fileInput.files.length === 0) {
            alert('Please select a file to upload');
            return;
          }
          const file = fileInput.files[0];
          try {
            const upload = await pinata.upload.public.file(file)
            console.log('File uploaded successfully:', upload);
            alert(`File uploaded successfully: ${upload.IpfsHash}`);
          } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload file');
          }
        }

  return (
    <>
      <div >
        <h1>Decentralised CrowdFunding</h1>
        <p>Welcome to the Decentralised CrowdFunding platform!</p>
        <p>Here you can create and support crowdfunding campaigns in a decentralized manner.</p>
        <p>Connect your wallet to get started.</p>
        <button onClick= {connectWallet} id='button' > Connect To Wallet</button>
      </div>
      <div>
        <h2>Upload File to IPFS</h2>
        <p>Select a file to upload to IPFS using Pinata:</p>
        <input type="file" id="fileInput" />
        <button id="uploadButton" onClick={uploadFile}>Upload File</button>
      </div>
      
    </>
  )
  
}

export default App
