'use client'

import { decodeMessage } from '@/utils/decodeMessage'
import { useChannel } from 'ably/react'
import { useState } from 'react'

export default function Leds () {
  const [leds, setLeds] = useState<number[]>([0, 0, 0, 0, 0, 0])
  useChannel('mmj-plc/din', (message) => {
    message = decodeMessage(message)
    const led1 = message.data[0] as number + leds[0]
    const led2 = message.data[1] as number + leds[1]
    const led3 = message.data[2] as number + leds[2]
    const led4 = message.data[3] as number + leds[3]
    const led5 = message.data[4] as number + leds[4]
    const led6 = message.data[5] as number + leds[5]

    setLeds([led1, led2, led3, led4, led5, led6])
  })
  return (
    <ul className="min-w-[512px] grid grid-cols-3 justify-items-center grid-rows-2 py-4 px-4 bg-slate-100 shadow-lg shadow-slate-400 gap-8">
      <li className="grid font-semibold text-xl text-green-950 shadow-md shadow-green-300 place-content-center bg-green-300 border-2 border-green-900 w-24 h-24 rounded-md">{leds[0]}</li>
      <li className="grid font-semibold text-xl text-green-950 shadow-md shadow-green-300 place-content-center bg-green-300 border-2 border-green-900 w-24 h-24 rounded-md">{leds[1]}</li>
      <li className="grid font-semibold text-xl text-green-950 shadow-md shadow-green-300 place-content-center bg-green-300 border-2 border-green-900 w-24 h-24 rounded-md">{leds[2]}</li>
      <li className="grid font-semibold text-xl text-green-950 shadow-md shadow-green-300 place-content-center bg-green-300 border-2 border-green-900 w-24 h-24 rounded-md">{leds[3]}</li>
      <li className="grid font-semibold text-xl text-green-950 shadow-md shadow-green-300 place-content-center bg-green-300 border-2 border-green-900 w-24 h-24 rounded-md">{leds[4]}</li>
      <li className="grid font-semibold text-xl text-green-950 shadow-md shadow-green-300 place-content-center bg-green-300 border-2 border-green-900 w-24 h-24 rounded-md">{leds[5]}</li>
    </ul>
  )
}
