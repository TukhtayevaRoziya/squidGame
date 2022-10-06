import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../../assets/images/objects.png'

const Logo = () => {
  return (
    <Link>
      <img src={logoImg} style={{
        color: '#fff',
      }} alt='' width={'90'} draggable={false}/>
    </Link>
  )
}

export default Logo
