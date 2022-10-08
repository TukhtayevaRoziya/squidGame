import React from 'react'
import soldierImg from '../../../assets/images/soldier.webp'

const Soldier = () => {
  return (
    <div className='absolute -bottom-12 -right-7'>
      <img src={soldierImg} alt='' draggable={false} width={600}/>
    </div>
  )
}

export default Soldier
