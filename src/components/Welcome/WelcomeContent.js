import React from "react"
import {
  contentContainer,
  heading,
  paragraph,
} from "../../styles/welcome.module.css"

// Change the content below to set the content for the welcome page

export const WelcomeContent = () => {
  return (
    <div className={contentContainer}>
      <h1 className={heading}>This is the Heading!</h1>
      <p className={paragraph}>
        I'm baby flannel XOXO lumbersexual fixie, cliche pabst swag aesthetic
        put a bird on it franzen locavore health goth skateboard. Copper mug
        vape slow-carb, squid etsy vexillologist taxidermy.
      </p>
      <p className={paragraph}>
        I'm baby flannel XOXO lumbersexual fixie, cliche pabst swag aesthetic
        put a bird on it franzen locavore health goth skateboard. Copper mug
        vape slow-carb, squid etsy vexillologist taxidermy.
      </p>
    </div>
  )
}
