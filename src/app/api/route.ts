/* eslint-disable n/no-callback-literal */
import Ably from 'ably'
import type { NextRequest } from 'next/server'

export const revalidate = 0 // Evita el error 401 de Ably
// https://faqs.ably.com/40104-timestamp-not-current

export async function GET (request: NextRequest) {
  if (typeof process.env.ABLY_API_KEY === 'undefined') {
    console.log('Error al cargar la API Key de Ably')
    return new Response('Ably API Key not found', { status: 500 })
  }
  const client = new Ably.Realtime({
    key: process.env.ABLY_API_KEY,
    recover: (_, cb) => { cb(true) }
  })
  const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'daq-lora-mina' })
  return Response.json(tokenRequestData)
};
