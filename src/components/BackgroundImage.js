import React from "react"
import { background } from "../styles/backgroundImage.module.scss"

export default function BackgroundImage({ children }) {
  return <div className={background}>{children}</div>
}
