import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features4.css'

const Features4 = (props) => {
  return (
    <div className="features4-layout301 thq-section-padding">
      <div className="features4-max-width thq-section-max-width">
        <h2 className="features4-text10 thq-heading-2">
          {props.sectionTitle ?? (
            <Fragment>
              <span className="features4-text15">
                Discover the Key Features
              </span>
            </Fragment>
          )}
        </h2>
        <div className="features4-row thq-grid-auto-300">
          <div className="features4-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content1 thq-flex-column">
              <div className="features4-section-title1 thq-flex-column">
                <h3 className="features4-title1 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features4-text14">
                        Discover the Magic of Lorem Ipsum Text Generation
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features4-description1 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features4-text16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features4-action5 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature1Button ?? (
                      <Fragment>
                        <span className="features4-text22">Button</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content2 thq-flex-column">
              <div className="features4-section-title2 thq-flex-column">
                <strong className="features4-title2 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features4-text12">
                        Discover the Magic of Lorem Ipsum Text Generation
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span className="features4-description2 thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features4-text20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features4-action6 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature2Button ?? (
                      <Fragment>
                        <span className="features4-text11">Button</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content3 thq-flex-column">
              <div className="features4-section-title3 thq-flex-column">
                <strong className="features4-title3 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features4-text13">
                        Discover the Magic of Lorem Ipsum Text Generation
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span className="features4-description3 thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features4-text19">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features4-action7 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature3Button ?? (
                      <Fragment>
                        <span className="features4-text21">Button</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature4">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content4 thq-flex-column">
              <div className="features4-section-title4 thq-flex-column">
                <strong className="features4-title4 thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features4-text23">
                        Discover the Magic of Lorem Ipsum Text Generation
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span className="features4-description4 thq-body-small">
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="features4-text18">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features4-action8 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature4Button ?? (
                      <Fragment>
                        <span className="features4-text17">Button</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features4.defaultProps = {
  feature2Button: undefined,
  feature2Title: undefined,
  feature3Title: undefined,
  feature1Title: undefined,
  sectionTitle: undefined,
  feature1Description: undefined,
  feature4Button: undefined,
  feature4Description: undefined,
  feature3Description: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature3ImageAlt: 'PlaceholderImage1314',
  feature1ImageAlt: 'image1',
  feature2ImageAlt: 'image2',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature2Description: undefined,
  feature3Button: undefined,
  feature4ImageAlt: 'image 4',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature1Button: undefined,
  feature4Title: undefined,
}

Features4.propTypes = {
  feature2Button: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Title: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature1Description: PropTypes.element,
  feature4Button: PropTypes.element,
  feature4Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3Button: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1Button: PropTypes.element,
  feature4Title: PropTypes.element,
}

export default Features4
