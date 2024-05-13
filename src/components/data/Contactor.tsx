/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'

import { type RealtimeChannel } from 'ably'
import { useState } from 'react'

export default function Contactor ({ channel }: { channel: RealtimeChannel }) {
  const [isChecked, setIsChecked] = useState(false)
  const handleInputChange = () => {
    setIsChecked(!isChecked)
    if (isChecked) {
      // turnOn()
      channel.publish({ data: 'contactor=off' })
    } else {
      // turnOff()
      channel.publish({ data: 'contactor=on' })
    }
  }

  // function turnOn () {
  //   channel.publish('mmj-plc/btns', 'contactor=on')
  // }

  // function turnOff () {
  //   channel.publish('mmj-plc/btns', 'contactor=off')
  // }

  return (
    <label className="inline-flex -rotate-90 items-center cursor-pointer">
      <input
      id='contactor'
      type="checkbox"
      value=""
      className="sr-only peer"
      checked={isChecked}
      onChange={handleInputChange}
      />
      <div className="relative w-48 h-16 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-32 rtl:peer-checked:after:-translate-x-32 peer-checked:after:border-white after:content-[''] after:absolute after:top-[8px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-12 after:w-12 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  )
}
