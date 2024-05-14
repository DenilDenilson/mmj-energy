'use client'

import { decodeMessage } from '@/utils/decodeMessage'
import { useChannel } from 'ably/react'
import { useState } from 'react'

export default function Leds() {
  const [leds, setLeds] = useState<number[]>([0, 0, 0, 0, 0, 0])
  useChannel('mmj-plc/din', (message) => {
    message = decodeMessage(message)
    const led1 = (message.data[0] as number) + leds[0]
    const led2 = (message.data[1] as number) + leds[1]
    const led3 = (message.data[2] as number) + leds[2]
    const led4 = (message.data[3] as number) + leds[3]
    const led5 = (message.data[4] as number) + leds[4]
    const led6 = (message.data[5] as number) + leds[5]

    setLeds([led1, led2, led3, led4, led5, led6])
  })
  return (
    <ul className="grid min-w-[512px] grid-cols-3 grid-rows-2 justify-items-center gap-8 bg-slate-100 px-4 py-4 shadow-lg shadow-slate-400">
      <li className="grid h-24 w-24 place-content-center rounded-full border-2 border-green-900 bg-green-800 text-5xl font-semibold text-green-950 shadow-[0_4px_0_0_rgba(0,0,0,0.75),_inset_0_4px_2px_0_rgba(255,255,255,0.75)]">
        {leds[0]}
      </li>
      <li className="grid h-24 w-24 place-content-center border-2 border-green-900 bg-green-400 text-5xl font-semibold text-green-950 shadow-[0_4px_0_0_rgba(0,0,0,0.75),_inset_0_4px_2px_0_rgba(255,255,255,0.75)]">
        {leds[1]}
      </li>
      <li className="grid h-24 w-24 place-content-center border-2 border-green-900 bg-green-400 text-5xl font-semibold text-green-950 shadow-[0_4px_0_0_rgba(0,0,0,0.75),_inset_0_4px_2px_0_rgba(255,255,255,0.75)]">
        {leds[2]}
      </li>
      <li className="grid h-24 w-24 place-content-center border-2 border-green-900 bg-green-400 text-5xl font-semibold text-green-950 shadow-[0_4px_0_0_rgba(0,0,0,0.75),_inset_0_4px_2px_0_rgba(255,255,255,0.75)]">
        {leds[3]}
      </li>
      <li className="grid h-24 w-24 place-content-center border-2 border-green-900 bg-green-400 text-5xl font-semibold text-green-950 shadow-[0_4px_0_0_rgba(0,0,0,0.75),_inset_0_4px_2px_0_rgba(255,255,255,0.75)]">
        {leds[4]}
      </li>
      <li className="grid h-24 w-24 place-content-center border-2 border-green-900 bg-green-400 text-5xl font-semibold text-green-950 shadow-[0_4px_0_0_rgba(0,0,0,0.75),_inset_0_4px_2px_0_rgba(255,255,255,0.75)]">
        {leds[5]}
      </li>
    </ul>
  )
}
