import React, { useEffect, useState } from "react"
import { LoadingIndicator } from "."

export const Survey = () => {
  const [loading, setLoading] = useState(true)
  // Change the below variable to the Cognito form id to set your form
  const formId = null

  useEffect(() => {
    // ------------------
    // Uncomment the code below when ready to publish.
    // With this uncommented the command "gatsby develop" won't build.
    // ------------------
    // Cognito.load("forms", { id: formId })
    // setLoading(false)
  }, [])

  return (
    <div className="survey-container">
      {!!loading && (
        <div className="lds-container">
          <LoadingIndicator />
        </div>
      )}
      <div className="cognito"></div>
    </div>
  )
}
