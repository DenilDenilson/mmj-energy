/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'

import { type RealtimeChannel } from 'ably'

export default function Motor ({ channel }: { channel: RealtimeChannel }) {
  function goLeft () {
    console.log('goLeft')
    channel.publish({ data: 'atras' })
  }

  function goRight () {
    console.log('goRight')
    channel.publish({ data: 'adelante' })
  }

  function stop () {
    console.log('stop')
    channel.publish({ data: 'pare' })
  }

  return (
    <ul className="min-w-[512px] grid grid-cols-3 justify-items-center grid-rows-1 py-4 px-4 gap-8">
      <li className="grid font-semibold text-xl text-orange-950 shadow-md shadow-orange-300 place-content-center bg-orange-300 border-2 border-orange-900 w-48 h-24 rounded-md hover:bg-orange-500 cursor-pointer" onClick={goLeft}>Left</li>
      <li className="grid font-semibold text-xl text-orange-950 shadow-md shadow-orange-300 place-content-center bg-orange-300 border-2 border-orange-900 w-48 h-24 rounded-md hover:bg-orange-500 cursor-pointer" onClick={stop}>Stop</li>
      <li className="grid font-semibold text-xl text-orange-950 shadow-md shadow-orange-300 place-content-center bg-orange-300 border-2 border-orange-900 w-48 h-24 rounded-md hover:bg-orange-500 cursor-pointer" onClick={goRight}>Right</li>
    </ul>
  )
}
