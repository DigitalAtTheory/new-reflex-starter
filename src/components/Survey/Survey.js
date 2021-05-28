import React, { useEffect, useState } from "react"

export const Survey = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Cognito.load("forms", { id: 50 })
    setLoading(false)
  }, [])

  return (
    <div className="survey-container">
      {!!loading && <div>Loading...</div>}
      <div className="cognito"></div>
    </div>
  )
}
