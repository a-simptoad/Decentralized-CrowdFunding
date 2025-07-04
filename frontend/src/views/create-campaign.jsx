import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Contact14 from '../components/contact14'
import Contact7 from '../components/contact7'
import Footer4 from '../components/footer4'
import './create-campaign.css'

const CreateCampaign = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <div className="create-campaign-container">
      <div className="create-campaign-contact9 thq-section-padding">
        {/* <img
          alt="Image1"
          src="https://images.unsplash.com/photo-1586792922447-3cfca6b87e40?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5NTUwN3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
          className="create-campaign-image12 thq-img-ratio-4-3"
        /> */}
        <div className="thq-section-max-width thq-flex-row create-campaign-max-width">
          <div className="create-campaign-content18 thq-flex-column">
            <div className="create-campaign-section-title thq-card">
              <div className="create-campaign-content19">
                <h2 className="thq-heading-2">Contact us</h2>
                <span className="thq-body-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <form className="thq-card">
              <div className="create-campaign-input1">
                <label htmlFor="contact-form-3-name" className="thq-body-small">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-form-3-name"
                  placeholder="Name"
                  className="thq-input"
                />
              </div>
              <div className="create-campaign-input2">
                <label
                  htmlFor="contact-form-3-email"
                  className="thq-body-small"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-form-3-email"
                  required="true"
                  placeholder="Email"
                  className="thq-input"
                />
              </div>
              <div className="create-campaign-container8">
                <label
                  htmlFor="contact-form-3-message"
                  className="thq-body-small"
                >
                  Message
                </label>
                <textarea
                  id="contact-form-3-message"
                  rows="3"
                  placeholder="Enter your message"
                  className="thq-input"
                ></textarea>
              </div>
              <div className="create-campaign-checkbox1">
                <input
                  type="checkbox"
                  id="contact-form-3-check"
                  checked="true"
                  required="true"
                  className="thq-checkbox"
                />
                <label
                  htmlFor="contact-form-3-check"
                  className="create-campaign-text20 thq-body-small"
                >
                  I accept the Terms
                </label>
              </div>
              <button
                type="submit"
                className="create-campaign-button thq-button-filled"
              >
                <span className="thq-body-small">Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Contact14
        link1={
          <Fragment>
            <span className="create-campaign-text21">Start new chat</span>
          </Fragment>
        }
        email1={
          <Fragment>
            <span className="create-campaign-text22">
              support@decentralizedcrowdfunding.com
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="create-campaign-text23">+1-123-456-7890</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="create-campaign-text24">
              123 Crowdfunding Street, Decentralized City, Blockchain Country
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="create-campaign-text25">
              Have a question or need support? Reach out to us!
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="create-campaign-text26">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="create-campaign-text27">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="create-campaign-text28">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="create-campaign-text29">Contact Us</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="create-campaign-text30">Email</span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="create-campaign-text31">Phone</span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="create-campaign-text32">Address</span>
          </Fragment>
        }
      ></Contact14>
      <Contact7
        content1={
          <Fragment>
            <span className="create-campaign-text33">
              For any inquiries or support, please feel free to reach out to us
              at headquarters@example.com
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="create-campaign-text34">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="create-campaign-text35">Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="create-campaign-text36">Support Center</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="create-campaign-text37">
              123 Main Street, City, Country
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="create-campaign-text38">
              456 Support Street, City, Country
            </span>
          </Fragment>
        }
      ></Contact7>
      <Footer4
        link1={
          <Fragment>
            <span className="create-campaign-text39">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="create-campaign-text40">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="create-campaign-text41">FAQs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="create-campaign-text42">Terms and Conditions</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="create-campaign-text43">Privacy Policy</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="create-campaign-text44">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="create-campaign-text45">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="create-campaign-text46">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default CreateCampaign
