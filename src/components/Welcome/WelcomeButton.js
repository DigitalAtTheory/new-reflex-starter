import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { button } from "../../styles/welcome.module.scss"
import { Link } from "gatsby"

export const WelcomeButton = () => {
  return (
    <Link to="/survey/" className={button}>
      <StaticImage
        src="../../images/home-CTA-Button.png"
        alt="Let's Go Button"
      />
    </Link>
  )
}
