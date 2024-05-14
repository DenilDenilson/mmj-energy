'use client'

import { decodeMessage } from '@/utils/decodeMessage'
import { useChannel } from 'ably/react'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const Motor = dynamic(async () => await import('./Motor'), { ssr: false })
const Contactor = dynamic(async () => await import('./Contactor'), {
  ssr: false,
})

export default function Control() {
  const [isChecked, setIsChecked] = useState(false)

  const { channel } = useChannel('mmj-plc/btns', (message) => {
    message = decodeMessage(message)
    if (message.data === 'contactor=on') {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  })

  return (
    <section className="flex h-full w-full flex-col items-center justify-center bg-slate-100 py-4 shadow-lg shadow-slate-400 xl:flex-row xl:py-0 ">
      <Contactor channel={channel} isChecked={isChecked} />
      <Motor channel={channel} />
    </section>
  )
}
