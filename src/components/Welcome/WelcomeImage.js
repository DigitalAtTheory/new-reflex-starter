import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { imageContainer } from "../../styles/welcome.module.css"

export const WelcomeImage = () => {
  return (
    <div className={imageContainer}>
      <StaticImage src="../../images/Bike-2.png" alt="White Motorcycle" />
    </div>
  )
}
