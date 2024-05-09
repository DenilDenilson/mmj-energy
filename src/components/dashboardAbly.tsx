/* eslint-disable n/no-callback-literal */
'use client'

import Ably from 'ably'
import { AblyProvider, ChannelProvider } from 'ably/react'

export default function DashboardAbly (
  { children }:
  Readonly<{ children: React.ReactNode }>
) {
  const client = new Ably.Realtime({
    authUrl: '/api',
    recover: (_, cb) => { cb(true) }
  })

  return (
    <AblyProvider client={ client }>
      <ChannelProvider channelName='daq-lora-mina'>
        {children}
      </ChannelProvider>
    </AblyProvider>
  )
}
