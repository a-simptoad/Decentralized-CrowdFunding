import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './layout251.css'

const Layout251 = (props) => {
  return (
    <div className="layout251-layout251 thq-section-padding">
      <div className="layout251-max-width thq-section-max-width">
        <div className="thq-flex-row layout251-section-title">
          <div className="layout251-column thq-flex-column">
            <h2 className="thq-heading-2 layout251-text10">
              {props.text1 ?? (
                <Fragment>
                  <span className="layout251-text15">Features</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="thq-body-small">
            {props.text ?? (
              <Fragment>
                <span className="layout251-text19">
                  Explore the key features that make our decentralized
                  crowdfunding platform stand out.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="layout251-content1">
          <div className="layout251-row thq-flex-row">
            <div className="layout251-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 layout251-feature1-image"
              />
              <div className="layout251-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="layout251-text17">
                        User-Friendly Interface
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="layout251-text13">
                        Easily navigate through the platform to create or
                        support campaigns with a simple and intuitive interface.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="layout251-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 layout251-feature2-image"
              />
              <div className="layout251-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="layout251-text14">
                        Transparent Process
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="layout251-text16">
                        Experience full transparency in the crowdfunding
                        process, from campaign creation to fund allocation.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="layout251-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 layout251-feature3-image"
              />
              <div className="layout251-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="layout251-text12">
                        Secure Transactions
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="layout251-text18">
                        Ensure the security of your transactions and
                        contributions through our robust decentralized platform.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Layout251.defaultProps = {
  feature1ImageAlt: 'User-Friendly Interface Image',
  feature3Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1743950673173-12a4b095d235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTIwNDA4MHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1Description: undefined,
  feature2Title: undefined,
  text1: undefined,
  feature2ImageAlt: 'Transparent Process Image',
  feature2Description: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1615297925037-118f823cf4fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTIwNDA4MXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3ImageAlt: 'Secure Transactions Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1585930438756-7a8ebd9e2b75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTIwNDA4Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1Title: undefined,
  feature3Description: undefined,
  text: undefined,
}

Layout251.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2Title: PropTypes.element,
  text1: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3Description: PropTypes.element,
  text: PropTypes.element,
}

export default Layout251
