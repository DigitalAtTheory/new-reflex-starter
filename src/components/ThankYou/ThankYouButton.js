import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { button } from "../../styles/thankYou.module.css"

export const ThankYouButton = () => {
  return (
    <a
      href="https://shop.advanceautoparts.com/c2/motor-oil-additives/15035?&filterValue=mfrName_exact:Mobil1&beginIndex=0&sortBy=5&_r=0.2370417667176301"
      target="_blank"
      rel="noopener noreferrer"
      className={button}
    >
      <StaticImage src="../../images/CTA-Button.png" alt="Thank You Button" />
    </a>
  )
}
