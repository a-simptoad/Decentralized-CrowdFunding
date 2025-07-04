import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container1 thq-section-padding">
      <div className="thq-section-max-width">
        <div className="component2-accent2-bg">
          <div className="component2-accent1-bg">
            <div className="component2-container2">
              <div className="component2-content">
                <span className="thq-heading-2">
                  {props.text ?? (
                    <Fragment>
                      <span className="component2-text4">
                        Join the Decentralized Crowdfunding Revolution
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="thq-body-large">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="component2-text5">
                        Start supporting innovative projects or create your own
                        campaign today!
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <Link to="/create-campaign" className="component2-navlink">
                <div className="component2-actions">
                  <button
                    type="button"
                    className="thq-button-filled component2-button"
                  >
                    <span>
                      {props.text2 ?? (
                        <Fragment>
                          <span className="component2-text6">Get Started</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Component2.defaultProps = {
  text: undefined,
  text1: undefined,
  text2: undefined,
}

Component2.propTypes = {
  text: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
}

export default Component2
