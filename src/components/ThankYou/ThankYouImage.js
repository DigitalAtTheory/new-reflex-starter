import React from "react"
import { imageContainer } from "../../styles/thankYou.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export const ThankYouImage = () => {
  return (
    <div className={imageContainer}>
      <StaticImage src="../../images/Bike-1.png" alt="Red Motorcycle" />
    </div>
  )
}
