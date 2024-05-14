/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'

import { type RealtimeChannel } from 'ably'

export default function Motor({ channel }: { channel: RealtimeChannel }) {
  function goLeft() {
    console.log('goLeft')
    channel.publish({ data: 'atras' })
  }

  function goRight() {
    console.log('goRight')
    channel.publish({ data: 'adelante' })
  }

  function stop() {
    console.log('stop')
    channel.publish({ data: 'pare' })
  }

  return (
    <ul className="grid min-w-[512px] grid-cols-3 grid-rows-1 justify-items-center gap-8 px-4 py-4">
      <li
        className="grid h-24 w-48 cursor-pointer place-content-center rounded-md border-2 border-orange-900 bg-orange-300 text-xl font-semibold text-orange-950 shadow-[0_4px_0_0_rgba(0,0,0,0.75),_inset_0_4px_2px_0_rgba(255,255,255,0.75)] hover:bg-orange-500 active:border-black active:shadow-[inset_0_2px_0_0_rgba(0,0,0,0.75),inset_0_-4px_2px_0_rgba(255,255,255,0.75)]"
        onClick={goLeft}
      >
        Left
      </li>
      <li
        className="grid h-24 w-48 cursor-pointer place-content-center rounded-md border-2 border-orange-900 bg-orange-300 text-xl font-semibold text-orange-950 shadow-[0_4px_0_0_rgba(0,0,0,0.75),_inset_0_4px_2px_0_rgba(255,255,255,0.75)] hover:bg-orange-500 active:border-black active:shadow-[inset_0_2px_0_0_rgba(0,0,0,0.75),inset_0_-4px_2px_0_rgba(255,255,255,0.75)]"
        onClick={stop}
      >
        Stop
      </li>
      <li
        className="grid h-24 w-48 cursor-pointer place-content-center rounded-md border-2 border-orange-900 bg-orange-300 text-xl font-semibold text-orange-950 shadow-[0_4px_0_0_rgba(0,0,0,0.75),_inset_0_4px_2px_0_rgba(255,255,255,0.75)] hover:bg-orange-500 active:border-black active:shadow-[inset_0_2px_0_0_rgba(0,0,0,0.75),inset_0_-4px_2px_0_rgba(255,255,255,0.75)]"
        onClick={goRight}
      >
        Right
      </li>
    </ul>
  )
}
