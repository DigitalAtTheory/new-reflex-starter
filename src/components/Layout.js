import React from "react"
import "../styles/global.css"
import "../styles/survey.css"
import BackgroundImage from "../components/BackgroundImage"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <div>
      <Helmet></Helmet>
      <BackgroundImage>{children}</BackgroundImage>
    </div>
  )
}
