import { createCampaign } from '../ethers'
import '../pinata'

import Contact7 from '../components/contact7'
import Footer4 from '../components/footer4'
import './create-campaign.css'

const CreateCampaign = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const formData = new FormData(e.target);
      const title = formData.get('title');
      const description = formData.get('description');
      const goal = formData.get('goal');
      const duration = formData.get('duration');
      const image = formData.get('image');

      await createCampaign(title, description, goal, duration * 3600, image);
    }catch(error){
      console.error("Error creating campaign:", error);
    }
  }

  return (
    <div className="create-campaign-container">
      <div className="create-campaign-contact9 thq-section-padding">
        <div className="thq-section-max-width thq-flex-row create-campaign-max-width">
          <div className="create-campaign-content18 thq-flex-column">
            <div className="create-campaign-section-title thq-card">
              <div className="create-campaign-content19">
                <h2 className="thq-heading-2">Create Campaign</h2>
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
            <form className="thq-card" onSubmit={handleSubmit}>
              <div className="create-campaign-input1">
                <label htmlFor="contact-form-3-name" className="thq-body-small">
                  Title
                </label>
                <input
                  type="text"
                  id="contact-form-3-name"
                  placeholder="Title"
                  name='title'
                  className="thq-input"
                  required
                />
              </div>
              <div className="create-campaign-input2">
                <label
                  htmlFor="contact-form-3-email"
                  className="thq-body-small"
                >
                  Goal
                </label>
                <input
                  type="number"
                  id="contact-form-3-email"
                  placeholder="Goal Amount (in ETH)"
                  name='goal'
                  className="thq-input"
                  step="any"
                  required
                />
              </div>
              <div className="create-campaign-input2">
                <label
                  htmlFor="contact-form-3-email"
                  className="thq-body-small"
                >
                  Duration
                </label>
                <input
                  type="number"
                  id="contact-form-3-email"
                  placeholder="Duration (in hrs)"
                  name='duration'
                  className="thq-input"
                  step="any"
                  required
                />
              </div>
              <div className="create-campaign-container8">
                <label
                  htmlFor="contact-form-3-message"
                  className="thq-body-small"
                >
                  Description
                </label>
                <textarea
                  id="contact-form-3-message"
                  rows="3"
                  placeholder="Enter your description here"
                  name='description'
                  className="thq-input"
                  required
                ></textarea>
              </div>
              <div className="create-campaign-input3">
                <button
                  type="submit"
                  id='create-campaign-button'
                  className="create-campaign-button thq-button-filled"
                >
                  <span className="thq-body-small">Submit</span>
                </button>
                <input
                  type="file"
                  id="contact-form-3-file"
                  className="thq-input"
                  name="image"
                  accept='image/*'
                  placeholder="Upload an image"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Contact7></Contact7>
      <Footer4></Footer4>
    </div>
  )
}

export default CreateCampaign
