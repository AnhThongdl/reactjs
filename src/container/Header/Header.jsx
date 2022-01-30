import React from 'react'

import './Header.scss'
import { images } from '../../constants'
import { SubHeading } from '../../components'

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="chase the new flavor" />
        <h1 className="app__header-h1">The key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          consectetur magni iusto, sint tempora quidem reiciendis eos voluptates
          error maxime eius suscipit temporibus quis similique rerum, officiis
          optio labore omnis!
        </p>
        <button className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  )
}

export default Header
