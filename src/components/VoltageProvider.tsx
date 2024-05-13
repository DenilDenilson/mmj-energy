'use client'

import { useChannel } from 'ably/react'
import TableData from './data/TableData'
import Lines from './data/Lines'
import { type Message } from 'ably'
import { decodeMessage } from '@/utils/decodeMessage'
import { useState } from 'react'

export default function VoltageProvider () {
  const [receivedMessages, setMessages] = useState<Message[]>([])
  const [tension1, setTension1] = useState<Array<{ date: string, value: number }>>([])
  const [tension2, setTension2] = useState<Array<{ date: string, value: number }>>([])
  const [tensionTable, setTensionTable] = useState<Array<{ date: string, 'Tensión 1': number, 'Tensión 2': number }>>([])

  useChannel('mmj-plc/ain', (message) => {
    message = decodeMessage(message)
    setMessages(receivedMessages.concat(message))
    // Data : volt1,volt2
    // Ejm  : 5.68,8.94
    setTension1(tension1
      .concat(
        {
          date:
            (message.timestamp !== null && message.timestamp !== undefined)
              ? new Date(message.timestamp).toLocaleTimeString()
              : new Date().toLocaleTimeString(),
          value: message.data[0] as number
        }
      ))
    setTension2(tension2
      .concat(
        {
          date: (message.timestamp !== null && message.timestamp !== undefined)
            ? new Date(message.timestamp).toLocaleTimeString()
            : new Date().toLocaleTimeString(),
          value: message.data[1] as number
        }
      ))
    setTensionTable(tensionTable
      .concat(
        {
          date: (message.timestamp !== null && message.timestamp !== undefined)
            ? new Date(message.timestamp).toLocaleTimeString()
            : new Date().toLocaleDateString(),
          'Tensión 1': message.data[0] as number,
          'Tensión 2': message.data[1] as number
        }
      )
    )
  })

  return (
    <section className='grid grid-rows-1 gap-2 grid-cols-[512px_minmax(256px,_1fr)]'>
      <div className='flex flex-col items-center gap-2'>
        <Lines title='Tensión 1' chartData = {tension1} />
        <Lines title='Tensión 2' chartData = {tension2} />
      </div>
      <div className='max-h-[700px] overflow-scroll'>
        <TableData tableData={tensionTable} />
      </div>
    </section>
  )
}
