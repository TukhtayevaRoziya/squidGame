import React from 'react'

import logoImg from '../../../assets/images/gameLogo.png'
import objectImg from '../../../assets/images/objects1.webp'

const Content = () => {
  return (
    <div className="mt-20 w-1/2">
      <img
        src={logoImg}
        alt=""
        className="mb-10 -ml-12"
        draggable={false}
        width="500"
      />
      <div className="flex ml-5">
        <img
          src={objectImg}
          alt=""
          className="mr-8 h-auto block"
          style={{ maxWidth: 50 }}
          draggable={false}
        />
        <p
          className="text-white opacity-70 leading-8 text-lg"
          style={{
            maxWidth: '60%',
          }}
        >
          Once you start the game, there is no turning back. The winner is
          alone, the loser only face the death.
        </p>
      </div>
    </div>
  )
}

export default Content
