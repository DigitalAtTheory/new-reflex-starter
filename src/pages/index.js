import React from "react"
import Container from "../components/Container"
import LockUp from "../components/LockUp"
import {
  WelcomeImage,
  WelcomeContent,
  WelcomeButton,
} from "../components/Welcome"
import { useSiteContext } from "../context/siteContext"

export default function Home() {
  const { lockup } = useSiteContext()
  return (
    <>
      {lockup && <LockUp />}
      <Container>
        <WelcomeImage />
        <WelcomeContent />
        <WelcomeButton />
      </Container>
    </>
  )
}
