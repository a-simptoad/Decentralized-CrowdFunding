import React, { useState, Fragment } from 'react'

import { Helmet } from 'react-helmet'

// import Component1 from '../components/component1'
import Header301 from '../components/header301'
import Layout251 from '../components/layout251'
import Features4 from '../components/features4'
import Footer4 from '../components/footer4'
import './browse-campaigns.css'

const BrowseCampaigns = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <div className="browse-campaigns-container">
      <Helmet>
        <title>BrowseCampaigns - Practical Firm Snake</title>
        <meta
          property="og:title"
          content="BrowseCampaigns - Practical Firm Snake"
        />
      </Helmet>
      {/* <Component1
        text={
          <Fragment>
            <span className="browse-campaigns-text10">Connect</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="browse-campaigns-text11">/home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="browse-campaigns-text12">/view-campaigns</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="browse-campaigns-text13">/create-campaign</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="browse-campaigns-text14">/connect-wallet</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="browse-campaigns-text15">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="browse-campaigns-text16">View Campaigns</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="browse-campaigns-text17">Create a Campaign</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="browse-campaigns-text18">Connect Wallet</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="browse-campaigns-text19">Create Campaigns</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="browse-campaigns-text20">Connect</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="browse-campaigns-text21">View Campaigns</span>
          </Fragment>
        }
        heading={
          <Fragment>
            <span className="browse-campaigns-text22">
              Decentralized CrowdFunding
            </span>
          </Fragment>
        }
        description1={
          <Fragment>
            <span className="browse-campaigns-text23">
              Learn more about our platform
            </span>
          </Fragment>
        }
        description2={
          <Fragment>
            <span className="browse-campaigns-text24">
              Explore ongoing campaigns
            </span>
          </Fragment>
        }
        description3={
          <Fragment>
            <span className="browse-campaigns-text25">
              Start your own crowdfunding campaign
            </span>
          </Fragment>
        }
        description4={
          <Fragment>
            <span className="browse-campaigns-text26">
              Connect your wallet to get started
            </span>
          </Fragment>
        }
      ></Component1> */}
      <Header301
        text={
          <Fragment>
            <span className="browse-campaigns-text27">
              Join the Future of Crowdfunding
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="browse-campaigns-text28">
              Discover and support innovative projects with our decentralized
              crowdfunding platform.
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="browse-campaigns-text29">Get Started</span>
          </Fragment>
        }
      ></Header301>
      <Layout251
        text={
          <Fragment>
            <span className="browse-campaigns-text30">
              Explore the key features that make our decentralized crowdfunding
              platform stand out.
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="browse-campaigns-text31">Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="browse-campaigns-text32">
              User-Friendly Interface
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="browse-campaigns-text33">Transparent Process</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="browse-campaigns-text34">Secure Transactions</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="browse-campaigns-text35">
              Easily navigate through the platform to create or support
              campaigns with a simple and intuitive interface.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="browse-campaigns-text36">
              Experience full transparency in the crowdfunding process, from
              campaign creation to fund allocation.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="browse-campaigns-text37">
              Ensure the security of your transactions and contributions through
              our robust decentralized platform.
            </span>
          </Fragment>
        }
      ></Layout251>
      <Features4
        sectionTitle={
          <Fragment>
            <span className="browse-campaigns-text38">
              Discover the Key Features
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="browse-campaigns-text39">
              Discover the Magic of Lorem Ipsum Text Generation
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="browse-campaigns-text40">
              Discover the Magic of Lorem Ipsum Text Generation
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="browse-campaigns-text41">
              Discover the Magic of Lorem Ipsum Text Generation
            </span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className="browse-campaigns-text42">
              Discover the Magic of Lorem Ipsum Text Generation
            </span>
          </Fragment>
        }
        feature1Button={
          <Fragment>
            <span className="browse-campaigns-text43">Button</span>
          </Fragment>
        }
        feature2Button={
          <Fragment>
            <span className="browse-campaigns-text44">Button</span>
          </Fragment>
        }
        feature3Button={
          <Fragment>
            <span className="browse-campaigns-text45">Button</span>
          </Fragment>
        }
        feature4Button={
          <Fragment>
            <span className="browse-campaigns-text46">Button</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="browse-campaigns-text47">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="browse-campaigns-text48">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="browse-campaigns-text49">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        feature4Description={
          <Fragment>
            <span className="browse-campaigns-text50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
      ></Features4>
      <Footer4
        link1={
          <Fragment>
            <span className="browse-campaigns-text51">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="browse-campaigns-text52">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="browse-campaigns-text53">FAQs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="browse-campaigns-text54">
              Terms and Conditions
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="browse-campaigns-text55">Privacy Policy</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="browse-campaigns-text56">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="browse-campaigns-text57">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="browse-campaigns-text58">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default BrowseCampaigns
