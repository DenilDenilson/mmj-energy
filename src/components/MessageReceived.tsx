'use client'

import { decodeMessage } from '@/utils/decodeMessage'
import type { Message } from 'ably'
import { useChannel } from 'ably/react'
import { useState } from 'react'

export default function MessageReceived () {
  const [receivedMessages, setReceivedMessages] = useState<Message[]>([])
  useChannel('daq-lora-mina', (message) => {
    message = decodeMessage(message)
    setReceivedMessages(receivedMessages.concat(message))
  })

  return (
    <ul>
      { receivedMessages.length === 0 ? <li className='opacity-50'>No hay mensajes recibidos</li> : null}
      {
        receivedMessages.map((message, index) => (
          <li key={index}>
            {message.data}
          </li>
        ))
      }
    </ul>
  )
}
