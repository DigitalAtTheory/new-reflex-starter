import React from "react"
import Container from "../components/Container"
import LockUp from "../components/LockUp"
import {
  WelcomeImage,
  WelcomeContent,
  WelcomeButton,
} from "../components/Welcome"

export default function Home() {
  return (
    <>
      <LockUp />
      <Container>
        <WelcomeImage />
        <WelcomeContent />
        <WelcomeButton />
      </Container>
    </>
  )
}
