import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { background, logo } from "../styles/lockup.module.css"

export default function LockUp() {
  return (
    <div className={background}>
      <StaticImage
        className={logo}
        src="../images/APP-x-Mobil-1-FC-POS.png"
        alt="Advance Auto/Mobil1 Logo"
        placeholder="blurred"
      />
    </div>
  )
}
