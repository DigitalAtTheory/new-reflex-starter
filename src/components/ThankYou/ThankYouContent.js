import React from "react"
import {
  contentContainer,
  heading,
  paragraph,
} from "../../styles/thankYou.module.css"

// Change the content below to set your thank you content

export const ThankYouContent = () => {
  return (
    <div className={contentContainer}>
      <h1 className={heading}>This is a heading!</h1>
      <p className={paragraph}>
        Tofu hammock marfa enamel pin, neutra try-hard chia beard tilde palo
        santo shaman photo booth raclette direct trade 3 wolf moon. Heirloom
        affogato helvetica mumblecore, banjo taiyaki cloud bread iceland
        snackwave bespoke YOLO bitters vice.
      </p>
      <p className={paragraph}>
        Tofu hammock marfa enamel pin, neutra try-hard chia beard tilde palo
        santo shaman photo booth raclette direct trade 3 wolf moon. Heirloom
        affogato helvetica mumblecore, banjo taiyaki cloud bread iceland
        snackwave bespoke YOLO bitters vice.
      </p>
    </div>
  )
}
