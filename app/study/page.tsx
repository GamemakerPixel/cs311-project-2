"use client"
import { useState } from "react"


interface InteractableSectionProps {
  answerRevealed: boolean
  answer: string
}


function InteractableSection({ answerRevealed, answer }: InteractableSectionProps) {
  if (answerRevealed) {
    return (
      <div>
        <h1>{answer}</h1>
        <p>Rate the question difficulty:</p>
        <div className="flex content-center">
          <button className="standard-button w-56 h-20 border-easy inline-flex">
            Easy
          </button>
          <button className="standard-button w-56 h-20 border-medium inline-flex">
            Medium
          </button>
          <button className="standard-button w-56 h-20 border-hard inline-flex">
            Hard
          </button>
        </div>
      </div>
    )

  }

  return (
    <button className="standard-button">
      Reveal
    </button>
  )
}


export default function Study() {
  const [answerRevealed, setAnswerRevealed] = useState(false)

  return (
    <div>
      <h1>What is the answer?</h1>
      <InteractableSection answerRevealed={answerRevealed} answer="Placeholder Answer"/>
    </div>
  )
}
