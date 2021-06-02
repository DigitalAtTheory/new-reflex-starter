import React, { useState } from "react"
import "../styles/global.css"
import "../styles/survey.css"
import BackgroundImage from "../components/BackgroundImage"
import { Helmet } from "react-helmet"
import { useSiteContext } from "../context/siteContext"

export default function Layout({ children }) {
  const { backgroundImage } = useSiteContext()
  return (
    <div>
      <Helmet></Helmet>
      {!!backgroundImage && <BackgroundImage>{children}</BackgroundImage>}
      {!backgroundImage && <div>{children}</div>}
    </div>
  )
}
