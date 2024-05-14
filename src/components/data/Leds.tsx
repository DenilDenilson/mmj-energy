'use client'

import { decodeMessage } from '@/utils/decodeMessage'
import { useChannel } from 'ably/react'
import { useState } from 'react'

export default function Leds() {
  const [ledStyle, setLedStyle] = useState<string>('led-blue')
  const [leds, setLeds] = useState<number[]>([0, 0, 0, 0, 0, 0])

  useChannel('mmj-plc/din', (message) => {
    message = decodeMessage(message)
    const led1 = parseInt(message.data.split(',')[0] as string) + leds[0]
    const led2 = parseInt(message.data.split(',')[1] as string) + leds[1]
    const led3 = parseInt(message.data.split(',')[2] as string) + leds[2]
    const led4 = parseInt(message.data.split(',')[3] as string) + leds[3]
    const led5 = parseInt(message.data.split(',')[4] as string) + leds[4]
    const led6 = parseInt(message.data.split(',')[5] as string) + leds[5]
    console.log(led1, led2, led3, led4, led5, led6)
    setLeds([led1, led2, led3, led4, led5, led6])

    if (leds[0] > 0) {
      setLedStyle('led-blue-active')
    } else {
      setLedStyle('led-blue')
    }
    if (leds[1] > 0) {
      setLedStyle('led-blue-active')
    } else {
      setLedStyle('led-blue')
    }
    if (leds[2] > 0) {
      setLedStyle('led-blue-active')
    } else {
      setLedStyle('led-blue')
    }
    if (leds[3] > 0) {
      setLedStyle('led-blue-active')
    } else {
      setLedStyle('led-blue')
    }
    if (leds[4] > 0) {
      setLedStyle('led-blue-active')
    } else {
      setLedStyle('led-blue')
    }
    if (leds[5] > 0) {
      setLedStyle('led-blue-active')
    } else {
      setLedStyle('led-blue')
    }
  })
  return (
    <ul className="grid h-full min-w-[512px] grid-cols-3 grid-rows-2 justify-items-center gap-4 bg-slate-100 px-4 py-4 shadow-lg shadow-slate-400">
      <div className="flex flex-col items-center justify-center gap-2">
        <li className={ledStyle}></li>
        <p className="w-full border border-neutral-400 bg-neutral-200 py-1 text-center font-mono text-xl font-semibold tracking-widest text-[#091834]">
          {leds[0]}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <li className={ledStyle}></li>
        <p className="w-full border border-neutral-400 bg-neutral-200 py-1 text-center font-mono text-xl font-semibold tracking-widest text-[#091834]">
          {leds[1]}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <li className={ledStyle}></li>
        <p className="w-full border border-neutral-400 bg-neutral-200 py-1 text-center font-mono text-xl font-semibold tracking-widest text-[#091834]">
          {leds[2]}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <li className={ledStyle}></li>
        <p className="w-full border border-neutral-400 bg-neutral-200 py-1 text-center font-mono text-xl font-semibold tracking-widest text-[#091834]">
          {leds[3]}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <li className={ledStyle}></li>
        <p className="w-full border border-neutral-400 bg-neutral-200 py-1 text-center font-mono text-xl font-semibold tracking-widest text-[#091834]">
          {leds[4]}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <li className={ledStyle}></li>
        <p className="w-full border border-neutral-400 bg-neutral-200 py-1 text-center font-mono text-xl font-semibold tracking-widest text-[#091834]">
          {leds[5]}
        </p>
      </div>
    </ul>
  )
}
