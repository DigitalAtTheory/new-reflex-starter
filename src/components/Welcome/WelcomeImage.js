import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { imageContainer } from "../../styles/welcome.module.css"

export const WelcomeImage = () => {
  // Change variables below to set your welcome image
  const image = "../../images/image-placeholder.png"
  const altText = "Placeholder image"

  return (
    <div className={imageContainer}>
      <StaticImage src={image} alt={altText} placeholder="blurred" />
    </div>
  )
}
