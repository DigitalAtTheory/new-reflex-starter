import React from "react"
import LockUp from "../../components/LockUp"
import Container from "../../components/Container"
import {
  ThankYouContent,
  ThankYouImage,
  ThankYouButton,
} from "../../components/ThankYou"

export default function ThankYou() {
  return (
    <div>
      <LockUp />
      <Container>
        <ThankYouImage />
        <ThankYouContent />
        <ThankYouButton />
      </Container>
    </div>
  )
}
