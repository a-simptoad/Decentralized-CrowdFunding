import { Fragment, useEffect, useState } from 'react'
import { getCampaigns, getCampaignDetails } from '../ethers'
import { Helmet } from 'react-helmet'
import Header301 from '../components/header301'
import Features4 from '../components/features4'
import Footer4 from '../components/footer4'
import './browse-campaigns.css'

const BrowseCampaigns = () => {  

  return (
    <div className="browse-campaigns-container">
      <Helmet>
        <title>BrowseCampaigns - Practical Firm Snake</title>
        <meta property="og:title" content="BrowseCampaigns - Practical Firm Snake" />
      </Helmet>
      <Header301 />
      
      <Features4 
        sectionTitle={
          <Fragment>
            <span className="browse-campaigns-text38">
              Active Campaigns
            </span>
          </Fragment>
        }
      />
      
      <Footer4
        link1={<span className="browse-campaigns-text51">About Us</span>}
        link2={<span className="browse-campaigns-text52">Contact Us</span>}
        link3={<span className="browse-campaigns-text53">FAQs</span>}
        link4={<span className="browse-campaigns-text54">Terms and Conditions</span>}
        link5={<span className="browse-campaigns-text55">Privacy Policy</span>}
        termsLink={<span className="browse-campaigns-text56">Terms and Conditions</span>}
        cookiesLink={<span className="browse-campaigns-text57">Cookies Policy</span>}
        privacyLink={<span className="browse-campaigns-text58">Privacy Policy</span>}
      />
    </div>
  )
}

export default BrowseCampaigns