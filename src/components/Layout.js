import React from "react"
import "../styles/global.scss"
import "../styles/survey.scss"
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
