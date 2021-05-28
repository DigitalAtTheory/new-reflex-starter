import React from "react"
import { background } from "../styles/backgroundImage.module.css"

export default function BackgroundImage({ children }) {
  return <div className={background}>{children}</div>
}
