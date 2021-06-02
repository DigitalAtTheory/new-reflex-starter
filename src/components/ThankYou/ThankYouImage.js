import React from "react"
import { imageContainer } from "../../styles/thankYou.module.css"
import { StaticImage } from "gatsby-plugin-image"

export const ThankYouImage = () => {
  // Change variables below to set thank you image
  const image = "../../images/image-placeholder.png"
  const altText = "Placeholder image"

  return (
    <div className={imageContainer}>
      <StaticImage src={image} alt={altText} placeholder="blurred" />
    </div>
  )
}
