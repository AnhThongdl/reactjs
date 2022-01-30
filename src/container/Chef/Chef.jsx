import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Chef.scss'

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Words" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            obcaecati, eius ducimus rem voluptate error
          </p>
        </div>
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis velit
          nemo totam amet minima consequuntur quidem? Officia quibusdam neque
          cum est minima veritatis, assumenda delectus repellat sequi tenetur,
          sunt distinctio.
        </p>
      </div>

      <div className="app__chef-sign">
        <p className="app__chef-name">Kevin Lou</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
)

export default Chef
