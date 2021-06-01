import React, { useEffect, useState } from "react"
import { LoadingIndicator } from "."

export const Survey = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    Cognito.load("forms", { id: 50 })
    setLoading(false)
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
