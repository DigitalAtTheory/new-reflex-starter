import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { button } from "../../styles/welcome.module.css"
import { Link } from "gatsby"

export const WelcomeButton = () => {
  // Change variables below to set welcome page button
  const image = "../../images/button-placeholder.png"
  const altText = "Placeholder button"

  return (
    <Link to="/survey/" className={button}>
      <StaticImage src={image} alt={altText} />
    </Link>
  )
}
