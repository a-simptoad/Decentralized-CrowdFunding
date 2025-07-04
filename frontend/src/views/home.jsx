import React, { useState, Fragment } from 'react'

import { Helmet } from 'react-helmet'

// import Component3 from '../components/component3'
import Header78 from '../components/header78'
import Features24 from '../components/features24'
import Component2 from '../components/component2'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <div className="home-container">
      <Helmet>
        <title>Practical Firm Snake</title>
        <meta property="og:title" content="Practical Firm Snake" />
      </Helmet>
      <Header78
        text={
          <Fragment>
            <span className="home-text35">
              Decentralized Crowdfunding Platform
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text36">
              Join us in revolutionizing crowdfunding by supporting innovative
              projects through decentralized means.
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text37">View Campaigns</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text38">Create a Campaign</span>
          </Fragment>
        }
      ></Header78>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text39">Wallet Connection</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text40">Create Campaign</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text41">Browse Campaigns</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text42">
              Connect your wallet to start crowdfunding
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text43">Easily create your own campaign</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text44">View all campaigns at a glance</span>
          </Fragment>
        }
      ></Features24>
      <Component2
        text={
          <Fragment>
            <span className="home-text45">
              Join the Decentralized Crowdfunding Revolution
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text46">
              Start supporting innovative projects or create your own campaign
              today!
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text47">Get Started</span>
          </Fragment>
        }
      ></Component2>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text48">Create an Account</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text49">View Campaigns</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text50">Create a Campaign</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text51">Support Campaigns</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text52">
              Sign up for an account on our platform to start creating or
              supporting campaigns.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text53">
              Explore a variety of campaigns created by individuals and
              organizations from around the world.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text54">
              Start your own crowdfunding campaign by providing details such as
              name, funding goal, description, and images.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text55">
              Contribute to campaigns that resonate with you and help bring
              innovative ideas to life.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text56">
              This platform revolutionized the way we fund our projects.
              It&apos;s user-friendly and efficient.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text57">
              I was able to reach my funding goal in no time thanks to this
              amazing crowdfunding app.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text58">
              I love how transparent and secure the platform is. It gave me
              peace of mind throughout my campaign.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text59">
              Highly recommend this decentralized crowdfunding app to anyone
              looking to make a positive impact.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text61">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text62">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text63">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text64">Michael Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text65">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text66">CEO, Tech Company X</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text67">Founder, Startup Y</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text68">Artist &amp; Creator</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text69">Social Entrepreneur</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text71">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text72">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text73">Cluj - Napoca</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text74">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text76">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text77">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text78">FAQs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text79">Terms and Conditions</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text80">Privacy Policy</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text81">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text82">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text83">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
