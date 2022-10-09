import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useModal } from '../../ModalProvider'
import { useOutside } from './../../../hooks/useOutside'

const Modal = () => {
  const { videoUrl } = useModal()
  const { ref, isShow, setIsShow } = useOutside(false)

  useEffect(() => {
    if (videoUrl && !isShow) setIsShow(true)
  }, [videoUrl, isShow, setIsShow])

  if (!isShow) return null

  return (
    <div
      ref={ref}
      className="fixed top-1/4 left-1/4 w-1/2 h-96 flex items-center justify-center z-10 keyframe"
    >
      <ReactPlayer
        url={videoUrl}
      />
    </div>
  )
}

export default Modal
