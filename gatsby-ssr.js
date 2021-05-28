import React from "react"
import Layout from "./src/components/Layout"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function onRenderBody({ setHeadComponents }, pluginOptions) {
  setHeadComponents([
    <script
      type="text/javascript"
      key="cognito"
      src="https://www.cognitoforms.com/s/VIFwyLJpI0-1pUDbhQ8wSg"
      async
    />,
  ])
}
