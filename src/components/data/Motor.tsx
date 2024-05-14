/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'

import { type RealtimeChannel } from 'ably'

export default function Motor({ channel }: { channel: RealtimeChannel }) {
  function led1on() {
    console.log('led1on')
    channel.publish({ data: 'led1=on' })
  }

  function led1off() {
    console.log('goRight')
    channel.publish({ data: 'led1=off' })
  }

  function led2on() {
    console.log('led2on')
    channel.publish({ data: 'led2=on' })
  }

  function led2off() {
    console.log('goRight')
    channel.publish({ data: 'led2=off' })
  }

  function led3on() {
    console.log('led3on')
    channel.publish({ data: 'led3=on' })
  }

  function led3off() {
    console.log('goRight')
    channel.publish({ data: 'led3=off' })
  }

  return (
    <ul className="grid min-w-[512px] grid-cols-1 grid-rows-3 justify-items-center gap-8 px-4 py-4 lg:grid-cols-3 lg:grid-rows-1 lg:py-0">
      <li className="flex flex-col gap-4 text-center text-xl font-semibold tracking-wider text-[#091834]">
        LED 1
        <button className="pushable" onClick={led1on}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">ON</span>
        </button>
        <button className="pushable" onClick={led1off}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">OFF</span>
        </button>
      </li>
      <li className="flex flex-col gap-4 text-center text-xl font-semibold tracking-wider text-[#091834]">
        LED 2
        <button className="pushable" onClick={led2on}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">ON</span>
        </button>
        <button className="pushable" onClick={led2off}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">OFF</span>
        </button>
      </li>
      <li className="flex flex-col gap-4 text-center text-xl font-semibold tracking-wider text-[#091834]">
        LED 3
        <button className="pushable" onClick={led3on}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">ON</span>
        </button>
        <button className="pushable" onClick={led3off}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">OFF</span>
        </button>
      </li>
    </ul>
  )
}
