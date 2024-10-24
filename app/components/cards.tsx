'use client'
import { useState, useEffect } from 'react';


export interface Card {
  question: string
  answer: string
  understanding: number
}


export function getCards() {
  const [cards, setCards] = useState<Card[]|null>(null)

  useEffect(() => {
    async function fetchCards() {
      let cardsResponse = await fetch('/cards.json')
      let cards: Card[] = await cardsResponse.json()
      setCards(cards)
    }
    fetchCards()
  }, [])

  return cards
}
