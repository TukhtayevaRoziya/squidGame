import React from 'react'
import PropTypes from 'prop-types'

import VideoItem from './VideosItem'
import { useModal } from '../../../../ModalProvider'

const VideosLine = ({ slides, currentIdx, setCurrentIdx }) => {

  const {setVideoUrl} = useModal()

  const playHandler = (idx, videoUrl) =>{
    setCurrentIdx(idx)
    setVideoUrl(videoUrl)
  }

  const count = currentIdx * 192

  return (
    <div className="flex items-end h-32 transition-all duration-300 easy-linear"
    style={{transform: currentIdx ? `translateX(-${count}px)` : ''}}>
      {slides.map((slide, idx) => {
        const isActive = currentIdx === idx
        return (
          <VideoItem
            key={slide._id}
            slide={slide}
            clickHandler={() => playHandler(idx, slide.videoUrl)}
            isActive={isActive}
          />
        )
      })}
    </div>
  )
}

VideosLine.propTypes = {
  slides: PropTypes.array.isRequired,
  currentIdx: PropTypes.number.isRequired,
  setCurrentIdx: PropTypes.func.isRequired,
}

export default VideosLine
