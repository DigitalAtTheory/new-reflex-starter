import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { background, logo } from "../styles/lockup.module.css"
import { useSiteContext } from "../context/siteContext"

export default function LockUp() {
  // Change variables below to set your logo image
  const image = "../images/logo-placeholder.png"
  const altText = "Placeholder logo"

  return (
    <div className={background}>
      <StaticImage
        className={logo}
        src={image}
        alt={altText}
        placeholder="blurred"
      />
    </div>
  )
}
