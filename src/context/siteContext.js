import React, { useState, useContext, createContext } from "react"

const SiteContext = createContext()

export function useSiteContext() {
  return useContext(SiteContext)
}

export default function SiteContextProvider({ children }) {
  // Set to true if you need a logo lockup
  const [lockup, setLockup] = useState(false)
  // Set to true if you need a background image
  const [backgroundImage, setBackgroundImage] = useState(false)

  const contextData = {
    lockup,
    backgroundImage,
  }
  return (
    <SiteContext.Provider value={contextData}>
      <>{children}</>
    </SiteContext.Provider>
  )
}
