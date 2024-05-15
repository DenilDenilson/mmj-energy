'use client'

import { decodeMessage } from '@/utils/decodeMessage'
import { useChannel } from 'ably/react'
import { useState } from 'react'

export default function Leds() {
  const [ledStyle1, setLedStyle1] = useState<string>('led-blue')
  const [ledStyle2, setLedStyle2] = useState<string>('led-blue')
  const [ledStyle3, setLedStyle3] = useState<string>('led-blue')
  const [ledStyle4, setLedStyle4] = useState<string>('led-blue')
  const [ledStyle5, setLedStyle5] = useState<string>('led-blue')
  const [ledStyle6, setLedStyle6] = useState<string>('led-blue')

  const [ledCount1, setLedCount1] = useState<number>(0)
  const [ledCount2, setLedCount2] = useState<number>(0)
  const [ledCount3, setLedCount3] = useState<number>(0)
  const [ledCount4, setLedCount4] = useState<number>(0)
  const [ledCount5, setLedCount5] = useState<number>(0)
  const [ledCount6, setLedCount6] = useState<number>(0)

  const [leds, setLeds] = useState<number[]>([0, 0, 0, 0, 0, 0])

  useChannel('mmj-plc/din', (message) => {
    message = decodeMessage(message)
    console.log(message.data)
    // if (message.data === '0,0,0,0,0,0') setReset(true)

    // if (reset) {
    //   setLeds((prevLeds) => prevLeds.map((prevLed, index) => (
    //     parseInt(message.data.split(',')[index] as string) + prevLed
    //   ))
    //   )
    //   setReset(false)
    // } else {
    // }

    if (message.data.split(',')[0] === '1') {
      setLedStyle1('led-blue-active')
      if (leds[0] === 0) {
        setLedCount1((prevCount) => prevCount + 1)
      }
    } else {
      setLedStyle1('led-blue')
    }

    if (message.data.split(',')[1] === '1') {
      setLedStyle2('led-blue-active')
      if (leds[1] === 0) {
        setLedCount2((prevCount) => prevCount + 1)
      }
    } else {
      setLedStyle2('led-blue')
    }

    if (message.data.split(',')[2] === '1') {
      setLedStyle3('led-blue-active')
      if (leds[2] === 0) {
        setLedCount3((prevCount) => prevCount + 1)
      }
    } else {
      setLedStyle3('led-blue')
    }

    if (message.data.split(',')[3] === '1') {
      setLedStyle4('led-blue-active')
      if (leds[3] === 0) {
        setLedCount4((prevCount) => prevCount + 1)
      }
    } else {
      setLedStyle4('led-blue')
    }

    if (message.data.split(',')[4] === '1') {
      setLedStyle5('led-blue-active')
      if (leds[4] === 0) {
        setLedCount5((prevCount) => prevCount + 1)
      }
    } else {
      setLedStyle5('led-blue')
    }

    if (message.data.split(',')[5] === '1') {
      setLedStyle6('led-blue-active')
      if (leds[5] === 0) {
        setLedCount6((prevCount) => prevCount + 1)
      }
    } else {
      setLedStyle6('led-blue')
    }

    setLeds((message.data.split(',') as string[]).map((led) => parseInt(led)))
  })
  return (
    <ul className="grid h-full w-full lg:min-w-[512px] grid-cols-3 grid-rows-2 justify-items-center gap-4 bg-slate-100 px-4 py-4 shadow-lg shadow-slate-400">
      <div className="flex flex-col items-center justify-center gap-2">
        <li className={ledStyle1}></li>
        <p className="w-full border border-neutral-400 bg-neutral-200 py-1 text-center font-mono text-xl font-semibold tracking-widest text-[#091834]">
          {ledCount1}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <li className={ledStyle2}></li>
        <p className="w-full border border-neutral-400 bg-neutral-200 py-1 text-center font-mono text-xl font-semibold tracking-widest text-[#091834]">
          {ledCount2}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <li className={ledStyle3}></li>
        <p className="w-full border border-neutral-400 bg-neutral-200 py-1 text-center font-mono text-xl font-semibold tracking-widest text-[#091834]">
          {ledCount3}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <li className={ledStyle4}></li>
        <p className="w-full border border-neutral-400 bg-neutral-200 py-1 text-center font-mono text-xl font-semibold tracking-widest text-[#091834]">
          {ledCount4}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <li className={ledStyle5}></li>
        <p className="w-full border border-neutral-400 bg-neutral-200 py-1 text-center font-mono text-xl font-semibold tracking-widest text-[#091834]">
          {ledCount5}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <li className={ledStyle6}></li>
        <p className="w-full border border-neutral-400 bg-neutral-200 py-1 text-center font-mono text-xl font-semibold tracking-widest text-[#091834]">
          {ledCount6}
        </p>
      </div>
    </ul>
  )
}
