import { createContext, useContext, useMemo, useState } from 'react'

const ModalContext = createContext({})

export const ModalProvider = ({ children }) => {
  const [videoUrl, setVideoUrl] = useState()
  const values = useMemo(()=>({videoUrl, setVideoUrl}),[videoUrl])

  return (
    <div>
      <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
    </div>
  )
}

export const useModal = () => useContext(ModalContext)