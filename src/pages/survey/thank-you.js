import React from "react"
import LockUp from "../../components/LockUp"
import Container from "../../components/Container"
import {
  ThankYouContent,
  ThankYouImage,
  ThankYouButton,
} from "../../components/ThankYou"
import { useSiteContext } from "../../context/siteContext"

export default function ThankYou() {
  const { lockup } = useSiteContext()
  return (
    <div>
      {lockup && <LockUp />}
      <Container>
        <ThankYouImage />
        <ThankYouContent />
        <ThankYouButton />
      </Container>
    </div>
  )
}
