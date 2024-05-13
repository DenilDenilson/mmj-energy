'use client'

import { type RealtimeChannel } from 'ably'

export default function Motor ({ channel }: { channel: RealtimeChannel }) {
  async function goLeft () {
    console.log('goLeft')
    await channel.publish('mmj-plc/btns', 'atras')
  }

  async function goRight () {
    console.log('goRight')
    await channel.publish('mmj-plc/btns', 'adelante')
  }

  async function stop () {
    console.log('stop')
    await channel.publish('mmj-plc/btns', 'pare')
  }

  return (
    <ul className="min-w-[512px] grid grid-cols-3 justify-items-center grid-rows-1 py-4 px-4 gap-8">
      <li className="grid font-semibold text-xl text-orange-950 shadow-md shadow-orange-300 place-content-center bg-orange-300 border-2 border-orange-900 w-48 h-24 rounded-md" onClick={() => goLeft}>Left</li>
      <li className="grid font-semibold text-xl text-orange-950 shadow-md shadow-orange-300 place-content-center bg-orange-300 border-2 border-orange-900 w-48 h-24 rounded-md" onClick={() => stop}>Stop</li>
      <li className="grid font-semibold text-xl text-orange-950 shadow-md shadow-orange-300 place-content-center bg-orange-300 border-2 border-orange-900 w-48 h-24 rounded-md" onClick={() => goRight}>Right</li>
    </ul>
  )
}
