import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header301.css'

const Header301 = (props) => {
  return (
    <div className="header301-header30 thq-section-padding">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="header301-image"
      />
      <div className="header301-container"></div>
      <div className="header301-max-width thq-section-max-width">
        <div className="header301-content">
          <h1 className="header301-text1 thq-heading-1">
            {props.text ?? (
              <Fragment>
                <span className="header301-text6">
                  Join the Future of Crowdfunding
                </span>
              </Fragment>
            )}
          </h1>
          <p className="header301-text2 thq-body-large">
            {props.text1 ?? (
              <Fragment>
                <span className="header301-text5">
                  Discover and support innovative projects with our
                  decentralized crowdfunding platform.
                </span>
              </Fragment>
            )}
          </p>
          <Link to="/create-campaign" className="header301-navlink">
            <div className="header301-actions">
              <button className="thq-button-outline header301-button">
                <span className="header301-text3 thq-body-small">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="header301-text4">Get Started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

Header301.defaultProps = {
  imageAlt: 'Crowdfunding Platform Image',
  text2: undefined,
  text1: undefined,
  imageSrc:
    'https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTIwNDA4MHw&ixlib=rb-4.1.0&q=80&w=1080',
  text: undefined,
}

Header301.propTypes = {
  imageAlt: PropTypes.string,
  text2: PropTypes.element,
  text1: PropTypes.element,
  imageSrc: PropTypes.string,
  text: PropTypes.element,
}

export default Header301
