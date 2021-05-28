import React from "react"
import {
  contentContainer,
  heading,
  paragraph,
} from "../../styles/welcome.module.scss"

export const WelcomeContent = () => {
  return (
    <div className={contentContainer}>
      <h1 className={heading}>We'd never miss Bike Week</h1>
      <p className={paragraph}>
        We've got your back with this year's free, limited-edition Mobil 1™ x
        Advance Auto Parts Bike Week shirt.
      </p>
      <p className={paragraph}>
        Please take a few minutes to fill out this quick survey and we'll mail
        you an exclusive Mobil 1 shirt, yours free while supplies last.
      </p>
    </div>
  )
}
