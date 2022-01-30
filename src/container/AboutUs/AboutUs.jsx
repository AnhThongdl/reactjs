import React from 'react'
import { images } from '../../constants'
import './AboutUs.scss'

const AboutUs = () => (
  <div
    id="about"
    className="app__aboutus app__bg flex__center section__padding"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt
          cumque, numquam voluptatibus temporibus asperiores in dolor voluptatum
          inventore provident totam accusamus earum. Tenetur rem exercitationem,
          laboriosam nesciunt doloremque explicabo!
        </p>
        <button className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt
          cumque, numquam voluptatibus temporibus asperiores in dolor voluptatum
          inventore provident totam accusamus earum. Tenetur rem exercitationem,
          laboriosam nesciunt doloremque explicabo!
        </p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>
)

export default AboutUs
