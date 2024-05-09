/* eslint-disable n/no-callback-literal */
import Ably from 'ably'
import type { NextRequest } from 'next/server'

export async function GET (request: NextRequest) {
  if (typeof process.env.ABLY_API_KEY === 'undefined') {
    console.log('Error al cargar la API Key de Ably')
    return new Response('Ably API Key not found', { status: 500 })
  }
  const client = new Ably.Realtime({
    key: process.env.ABLY_API_KEY,
    recover: (_, cb) => { cb(true) }
  })
  const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'ably-daq-mina' })
  return Response.json(tokenRequestData)
};
