'use client'
import { useState, useEffect } from 'react';


interface Card {
  question: string
  answer: string
  understanding: number
}


function CardReport({card}) {
  const percentUnderstood = Math.round(card.understanding * 100)

  return (
    <div className="flex">
      <div>
        {percentUnderstood}%
      </div>
      <div>
        {card.question}
      </div>
    </div>
  )
}


export default function Summary() {
  const [cards, setCards] = useState<Card[]>(null)

  useEffect(() => {
    async function fetchCards() {
      let cardsResponse: Awaited<Promise<Card[]>> = await fetch('/cards.json')
      let cards: Card[] = await cardsResponse.json()
      
      setCards(cards);
    }
    fetchCards()
  }, [])

  if (cards == undefined) {
    return <div>Loading cards...</div>
  }

  // Runs if the user hasn't added any cards.
  if (cards.length == 0) {
    return <div>Add a card and start studying to see your summary!</div>
  }

  return (
    <div>
      <h1>Summary</h1>
      <div>
        {
          cards.map((card: Card) => (
            <CardReport card={card}/>
          ))
        }
      </div>
    </div>
  )
}
