import React from 'react'
import { Link } from 'react-router-dom'

import netflix from '../../../../assets/images/netflix.webp'
import { list } from './list'

const Navigation = () => {
  return (
    <ul className="list-none flex items-center">
      {list.map((title, idx) => (
        <li key={title} className={'inline-block px-4'}>
          {idx !== 2 ? (
            <Link
              to={'/' + title.toLocaleLowerCase()}
              className="block text-white opacity-80 hover:opacity-100 transition-opacity duration-300 easy-in-out"
            >
              {title}
            </Link>
          ) : (
            <img alt="" src={netflix} width={35} draggable={false} className='block mx-5'/>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Navigation
