'use server'
import { useState } from 'react'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function getCardsFromDB() {
  const cards = await prisma.Cards.findMany()

  return cards
}
