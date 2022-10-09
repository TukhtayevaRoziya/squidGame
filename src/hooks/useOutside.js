import { useEffect, useRef, useState } from 'react'
import { useModal } from '../components/ModalProvider'

export const useOutside = (initialIsVisible) => {
  const { setVideoUrl } = useModal()
  const [isShow, setIsShow] = useState(initialIsVisible)
  const ref = useRef(null)
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false)
      setVideoUrl('')
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, false)
    }
  })
  return { ref, isShow, setIsShow }
}
