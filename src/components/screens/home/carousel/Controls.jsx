import React from 'react'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'
import PropType from 'prop-types'

const styleBtn = 'duration-300 easy-in-out transition-opacity'
const disabledBtnStyle = 'opacity-30 cursor-not-allowed'
const activeBtnStyle = 'opacity-90 hover:opacity-90'

const Controls = ({ slidesLength, setCurrentIdx, currentIdx }) => {
  const isPrevDisabled = currentIdx === 0
  const isNextDisabled = currentIdx + 1 === slidesLength

  const prevHandler = () => {
    !isPrevDisabled && setCurrentIdx((prev) => prev - 1)
  }
  const nextHandler = () => {
    !isNextDisabled && setCurrentIdx((prev) => prev + 1)
  }

  return (
    <div className="text-white">
      <button onClick={prevHandler} className={`${styleBtn} ${isPrevDisabled ? disabledBtnStyle : activeBtnStyle}`}>
        <HiChevronLeft size={26} />
      </button>
      <button onClick={nextHandler} className={`${styleBtn} ${isNextDisabled ? disabledBtnStyle : activeBtnStyle}`}>
        <HiChevronRight size={26} />
      </button>
    </div>
  )
}

Controls.propTypes = {
  slidesLength: PropType.number.isRequired,
  setCurrentIdx: PropType.func.isRequired,
  currentIdx: PropType.number.isRequired,
}

export default Controls
