import React from 'react'

import bgImage from '../../assets/images/bg-squid-game.jpg'
import Header from './header/Header'
import SocialMedia from './SocialMedia'

const Layout = ({ children }) => {
  return (
    <div
      className="p-12 relatives bg-cover bg-no-repeate"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPositionX: -200,
      }}
    >
      <div className={'gradient'} />
      <div className="relative z-1">
        <Header />
        <SocialMedia />
        {children}
      </div>
    </div>
  )
}

export default Layout
