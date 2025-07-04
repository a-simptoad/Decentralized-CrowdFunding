import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

// import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './header78.css'

const Header78 = (props) => {
  return (
    <div className="header78-header78">
      <div className="header78-column thq-section-padding thq-section-max-width">
        <div className="header78-content1">
          <h1 className="header78-text1 thq-heading-1">
            {props.text ?? (
              <Fragment>
                <span className="header78-text5">
                  Decentralized Crowdfunding Platform
                </span>
              </Fragment>
            )}
          </h1>
          <p className="header78-text2 thq-body-large">
            {props.text1 ?? (
              <Fragment>
                <span className="header78-text6">
                  Join us in revolutionizing crowdfunding by supporting
                  innovative projects through decentralized means.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="header78-actions">
          <Link
            to="/browse-campaigns"
            className="header78-button1 thq-button-filled"
          >
            <span className="thq-body-small">
              {props.text2 ?? (
                <Fragment>
                  <span className="header78-text7">View Campaigns</span>
                </Fragment>
              )}
            </span>
          </Link>
          <Link
            to="/create-campaign"
            className="header78-button2 thq-button-outline"
          >
            <span className="thq-body-small">
              {props.text3 ?? (
                <Fragment>
                  <span className="header78-text8">Create a Campaign</span>
                </Fragment>
              )}
            </span>
          </Link>
        </div>
      </div>
      <div className="header78-content2">
        <div className="header78-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.placeholderImageAlt}
              src={props.placeholderImageSrc}
              className="header78-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt1}
              src={props.placeholderImageSrc1}
              className="header78-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt2}
              src={props.placeholderImageSrc2}
              className="header78-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt3}
              src={props.placeholderImageSrc3}
              className="header78-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt4}
              src={props.placeholderImageSrc4}
              className="header78-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt5}
              src={props.placeholderImageSrc5}
              className="header78-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.placeholderImageAlt6}
              src={props.placeholderImageSrc6}
              className="header78-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt7}
              src={props.placeholderImageSrc7}
              className="header78-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt8}
              src={props.placeholderImageSrc8}
              className="header78-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt9}
              src={props.placeholderImageSrc9}
              className="header78-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt10}
              src={props.placeholderImageSrc10}
              className="header78-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt11}
              src={props.placeholderImageSrc11}
              className="header78-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="header78-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.placeholderImageAlt12}
              src={props.placeholderImageSrc12}
              className="header78-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt13}
              src={props.placeholderImageSrc13}
              className="header78-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt14}
              src={props.placeholderImageSrc14}
              className="header78-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt15}
              src={props.placeholderImageSrc15}
              className="header78-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt16}
              src={props.placeholderImageSrc16}
              className="header78-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt17}
              src={props.placeholderImageSrc17}
              className="header78-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.placeholderImageAlt18}
              src={props.placeholderImageSrc18}
              className="header78-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt19}
              src={props.placeholderImageSrc19}
              className="header78-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt20}
              src={props.placeholderImageSrc20}
              className="header78-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt21}
              src={props.placeholderImageSrc21}
              className="header78-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt22}
              src={props.placeholderImageSrc22}
              className="header78-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.placeholderImageAlt23}
              src={props.placeholderImageSrc23}
              className="header78-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div 
        dangerouslySetInnerHTML={{
          __html: `<style>
            @keyframes scroll-x {
              from { transform: translateX(0); }
              to { transform: translateX(calc(-100% - 16px)); }
            }
            @keyframes scroll-y {
              from { transform: translateY(0); }
              to { transform: translateY(calc(-100% - 16px)); }
            }
          </style>`
        }} 
      />
    </div>
  )
}

Header78.defaultProps = {
  placeholderImageAlt15: 'Hero Image',
  placeholderImageAlt20: 'Hero Image',
  placeholderImageAlt5: 'Hero Image',
  placeholderImageSrc23:
    'https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&ixlib=rb-4.0.3&w=1500',
  placeholderImageAlt3: 'Hero Image',
  placeholderImageAlt11: 'Hero Image',
  placeholderImageAlt2: 'Hero Image',
  text: undefined,
  placeholderImageSrc17:
    'https://images.unsplash.com/photo-1695370993561-ca297c22de6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5NHw&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageAlt1: 'Hero Image',
  placeholderImageAlt21: 'Hero Image',
  placeholderImageSrc13:
    'https://images.unsplash.com/photo-1695795897186-08fab174e89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageSrc9:
    'https://images.unsplash.com/photo-1571138430450-eaeaef92cc4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5N3w&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageSrc11:
    'https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  placeholderImageSrc6:
    'https://images.unsplash.com/photo-1614020661498-fef5b2293108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5N3w&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageAlt18: 'Hero Image',
  placeholderImageAlt7: 'Hero Image',
  placeholderImageSrc15:
    'https://images.unsplash.com/photo-1582799929991-f32a652b433a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5N3w&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageAlt12: 'Hero Image',
  placeholderImageAlt16: 'Hero Image',
  placeholderImageSrc7:
    'https://images.unsplash.com/photo-1585218225329-fbac29c1c926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5M3w&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageSrc4:
    'https://images.unsplash.com/photo-1652416549511-3bf487bc4c8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageSrc21:
    'https://images.unsplash.com/photo-1582799929991-f32a652b433a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5N3w&ixlib=rb-4.1.0&q=80&w=1080',
  text1: undefined,
  placeholderImageAlt13: 'Hero Image',
  placeholderImageSrc20:
    'https://images.unsplash.com/photo-1723896768110-b0dcb5117454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5NXw&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageSrc1:
    'https://images.unsplash.com/photo-1585218225329-fbac29c1c926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5M3w&ixlib=rb-4.1.0&q=80&w=1080',
  text2: undefined,
  text3: undefined,
  placeholderImageSrc22:
    'https://images.unsplash.com/photo-1730817403217-75e11b211326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5M3w&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageAlt14: 'Hero Image',
  placeholderImageAlt17: 'Hero Image',
  placeholderImageAlt10: 'Hero Image',
  placeholderImageSrc:
    'https://images.unsplash.com/photo-1614020661498-fef5b2293108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5N3w&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageSrc19:
    'https://images.unsplash.com/photo-1695795897186-08fab174e89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageSrc12:
    'https://images.unsplash.com/photo-1631005551196-463de4a61114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5M3w&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageSrc8:
    'https://images.unsplash.com/photo-1613919517761-0d9e719d3244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageSrc18:
    'https://images.unsplash.com/photo-1631005551196-463de4a61114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5M3w&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageSrc5:
    'https://images.unsplash.com/photo-1607947186026-c191c3f2b664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5NHw&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageAlt4: 'Hero Image',
  placeholderImageAlt8: 'Hero Image',
  placeholderImageAlt: 'Decentralized Crowdfunding Platform Image',
  placeholderImageAlt19: 'Hero Image',
  placeholderImageSrc10:
    'https://images.unsplash.com/photo-1652416549511-3bf487bc4c8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageAlt6: 'Decentralized Crowdfunding Platform Image',
  placeholderImageAlt23: 'Hero Image',
  placeholderImageSrc3:
    'https://images.unsplash.com/photo-1571138430450-eaeaef92cc4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5N3w&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageSrc16:
    'https://images.unsplash.com/photo-1730817403217-75e11b211326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5M3w&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageSrc2:
    'https://images.unsplash.com/photo-1613919517761-0d9e719d3244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageAlt22: 'Hero Image',
  placeholderImageSrc14:
    'https://images.unsplash.com/photo-1723896768110-b0dcb5117454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTE5MjI5NXw&ixlib=rb-4.1.0&q=80&w=1080',
  placeholderImageAlt9: 'Hero Image',
}

Header78.propTypes = {
  placeholderImageAlt15: PropTypes.string,
  placeholderImageAlt20: PropTypes.string,
  placeholderImageAlt5: PropTypes.string,
  placeholderImageSrc23: PropTypes.string,
  placeholderImageAlt3: PropTypes.string,
  placeholderImageAlt11: PropTypes.string,
  placeholderImageAlt2: PropTypes.string,
  text: PropTypes.element,
  placeholderImageSrc17: PropTypes.string,
  placeholderImageAlt1: PropTypes.string,
  placeholderImageAlt21: PropTypes.string,
  placeholderImageSrc13: PropTypes.string,
  placeholderImageSrc9: PropTypes.string,
  placeholderImageSrc11: PropTypes.string,
  placeholderImageSrc6: PropTypes.string,
  placeholderImageAlt18: PropTypes.string,
  placeholderImageAlt7: PropTypes.string,
  placeholderImageSrc15: PropTypes.string,
  placeholderImageAlt12: PropTypes.string,
  placeholderImageAlt16: PropTypes.string,
  placeholderImageSrc7: PropTypes.string,
  placeholderImageSrc4: PropTypes.string,
  placeholderImageSrc21: PropTypes.string,
  text1: PropTypes.element,
  placeholderImageAlt13: PropTypes.string,
  placeholderImageSrc20: PropTypes.string,
  placeholderImageSrc1: PropTypes.string,
  text2: PropTypes.element,
  text3: PropTypes.element,
  placeholderImageSrc22: PropTypes.string,
  placeholderImageAlt14: PropTypes.string,
  placeholderImageAlt17: PropTypes.string,
  placeholderImageAlt10: PropTypes.string,
  placeholderImageSrc: PropTypes.string,
  placeholderImageSrc19: PropTypes.string,
  placeholderImageSrc12: PropTypes.string,
  placeholderImageSrc8: PropTypes.string,
  placeholderImageSrc18: PropTypes.string,
  placeholderImageSrc5: PropTypes.string,
  placeholderImageAlt4: PropTypes.string,
  placeholderImageAlt8: PropTypes.string,
  placeholderImageAlt: PropTypes.string,
  placeholderImageAlt19: PropTypes.string,
  placeholderImageSrc10: PropTypes.string,
  placeholderImageAlt6: PropTypes.string,
  placeholderImageAlt23: PropTypes.string,
  placeholderImageSrc3: PropTypes.string,
  placeholderImageSrc16: PropTypes.string,
  placeholderImageSrc2: PropTypes.string,
  placeholderImageAlt22: PropTypes.string,
  placeholderImageSrc14: PropTypes.string,
  placeholderImageAlt9: PropTypes.string,
}

export default Header78
