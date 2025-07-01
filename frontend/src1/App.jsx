import { useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import CreateCampaign from './components/CreateCampaign.jsx'
import HomePage from './components/HomePage.jsx'


function App() {



  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
        </Routes>
      </div>
      {/* <div >
        <h1>Decentralised CrowdFunding</h1>
        <p>Welcome to the Decentralised CrowdFunding platform!</p>
        <p>Here you can create and support crowdfunding campaigns in a decentralized manner.</p>
        <p>Connect your wallet to get started.</p>
        <button onClick= {() => {
          connectWallet()
          navigate('/create-campaign')
        }} id='button' > Connect To Wallet</button>
      </div> */}
    </>
  )
  
}

export default App
