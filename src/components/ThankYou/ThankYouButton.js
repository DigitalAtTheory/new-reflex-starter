import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { button } from "../../styles/thankYou.module.css"

export const ThankYouButton = () => {
  // Change variables below to set thank you button
  const image = "../../images/button-placeholder.png"
  const altText = "Placeholder button"
  const url = "http://ilovetheory.com"

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={button}>
      <StaticImage src={image} alt={altText} />
    </a>
  )
}
