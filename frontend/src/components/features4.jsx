import React, { Fragment, useEffect, useState, useRef } from 'react'
import { fetchFromIPFS } from '../pinata'
import { getCampaigns, getCampaignDetails } from '../ethers'

import PropTypes from 'prop-types'

import './features4.css'

const Features4 = ({sectionTitle }) => {
  
const [campaignDetails, setCampaignDetails] = useState([]);
const [metadata, setMetadata] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const campaignAddresses = await getCampaigns();
      const details = await Promise.all(
        campaignAddresses.map(async (address) => {
          return await getCampaignDetails(address);
        })
      );
      
      const validDetails = details.filter(detail => detail !== null);
      setCampaignDetails(validDetails);

      // Fetch all metadata in parallel
      const metadataArray = await Promise.all(
        validDetails.map(async (campaign) => {
          return await fetchFromIPFS(campaign.metadata);
        })
      );
      
      setMetadata(metadataArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

  if (loading) {
    return <div className="loading-container">Loading campaigns...</div>;
  }
  
  return (
    <div className="features4-layout301 thq-section-padding">
      <div className="features4-max-width thq-section-max-width">
        <h2 className="features4-text10 thq-heading-2">
          {sectionTitle ?? (
            <Fragment>
              <span className="features4-text15">
                Discover the Key Features
              </span>
            </Fragment>
          )}
        </h2>
        <div className="features4-row thq-grid-auto-300">
          {campaignDetails.length > 0 ? (
            campaignDetails.map((campaign, index) => (
              <div key={index} className="features4-feature1">
                <img
                  alt={`Campaign ${index + 1}`}
                  src={metadata[index].data.image}
                  className="thq-img-ratio-4-3"
                />
                <div className="features4-content1 thq-flex-column">
                  <div className="features4-section-title1 thq-flex-column">
                    {metadata[index].data.title}
                    <span className="features4-description1 thq-body-small">
                      <span className="features4-text16">
                        {metadata[index].data.description}
                      </span>
                    </span>
                    <span className="features4-text16">
                      Goal: {campaign.goalAmount} ETH
                    </span>
                    <span className="features4-text16">
                      Raised: {campaign.raisedAmount} ETH
                    </span>
                  </div>
                  <div className="features4-action5 thq-flex-row">
                    <button className="thq-button-flat">
                      <span className="thq-body-small">
                        <span className="features4-text22">View Details</span>
                      </span>
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
          ))
          ) : (
            <div className="no-campaigs">
              <p>No active campaigns found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Features4.defaultProps = {
  feature1Title: undefined,
  sectionTitle: undefined,
  feature1Description: undefined,
  feature1ImageAlt: 'image1',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature1Button: undefined,
  campaignDetails: []
}

Features4.propTypes = {
  sectionTitle: PropTypes.element,
  campaignDetails: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    targetAmount: PropTypes.string,
    amountCollected: PropTypes.string,
    image: PropTypes.string,
  })),
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Button: PropTypes.element,
}

export default Features4
