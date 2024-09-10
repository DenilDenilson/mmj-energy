/* eslint-disable @typescript-eslint/member-delimiter-style */
'use client'

import { useChannel } from 'ably/react'
// import TableData from './data/TableData'
import Lines from './data/Lines'
import { type Message } from 'ably'
import { decodeMessage } from '@/utils/decodeMessage'
import { useState } from 'react'
// import { dataTension1, dataTension2, dataTensionTable } from '@/Simulate/data'
import { Pie } from './data/Pie'
import { generateSineWaveData } from '@/utils/generateWave'

export default function VoltageProvider() {
  const [receivedMessages, setMessages] = useState<Message[]>([])
  const [tension1, setTension1] =
    useState<Array<{ date: number; value: number }>>([])
  const [tension2, setTension2] =
    useState<Array<{ date: number; value: number }>>([])
  const [kpis, setKpis] = useState<string[]>([])
  const [pieData, setPieData] = useState<Array<{ name: string, amount: number }>>([])
  // const [tensionTable, setTensionTable] =
  //   useState<Array<{ date: number; 'Tensión 1': number; 'Tensión 2': number }>>(
  //     dataTensionTable,
  //   )

  useChannel('mmj-plc/labview', (message) => {
    message = decodeMessage(message)
    setMessages(receivedMessages.concat(message))
    console.log(message)
    // Data : volt1,volt2
    // Ejm  : 5.68,8.94
    setKpis(
      message.data.split(',') as string[]
    )

    setPieData(
      [
        {
          name: 'Potencia activa',
          amount: isNaN(parseFloat(kpis[3])) ? 0 : parseFloat(kpis[3])
        },
        {
          name: 'Potencia reactiva',
          amount: isNaN(parseFloat(kpis[6])) ? 0 : parseFloat(kpis[6])
        }
      ]
    )

    console.log(pieData)

    setTension1(
      generateSineWaveData(kpis[4] as unknown as number, 1000, 0.2, kpis[1] as unknown as number)
    )

    setTension2(
      generateSineWaveData(kpis[4] as unknown as number, 1000, 0.2, kpis[2] as unknown as number)
    )
    // setTension1(
    //   tension1.concat({
    //     date:
    //       message.timestamp !== null && message.timestamp !== undefined
    //         ? new Date(message.timestamp).toLocaleTimeString()
    //         : new Date().toLocaleTimeString(),
    //     value: message.data.split(',')[0] as number,
    //   }),
    // )
    // setTension2(
    //   tension2.concat({
    //     date:
    //       message.timestamp !== null && message.timestamp !== undefined
    //         ? new Date(message.timestamp).toLocaleTimeString()
    //         : new Date().toLocaleTimeString(),
    //     value: message.data.split(',')[1] as number,
    //   }),
    // )
    // setTensionTable(
    //   tensionTable.concat({
    //     date:
    //       message.timestamp !== null && message.timestamp !== undefined
    //         ? new Date(message.timestamp).toLocaleTimeString()
    //         : new Date().toLocaleDateString(),
    //     'Tensión 1': message.data.split(',')[0] as number,
    //     'Tensión 2': message.data.split(',')[1] as number,
    //   }),
    // )
  })

  return (
    <section className="grid grid-cols-1 grid-rows-4 gap-4 md:grid-cols-[400px_minmax(200px,_1fr)] md:grid-rows-2 md:gap-x-8 md:gap-y-4">
      <div className='grid grid-cols-2 grid-rows-3 gap-4'>
        <div className='shadow-lg shadow-slate-400 bg-white w-40 h-24 md:w-48 md:h-28 flex items-center justify-center gap-2'>
          <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>{kpis[1]}</h3>
          <p className='text-lg md:text-2xl relative font-light text-gray-500'>
            Vrms
            <div className='absolute w-12 h-1 -bottom-1 bg-red-500'></div>
          </p>
        </div>
        <div className='shadow-lg shadow-slate-400 bg-white w-40 h-24 md:w-48 md:h-28 flex items-center justify-center gap-2'>
          <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>{kpis[2]}</h3>
          <p className='text-lg md:text-2xl relative font-light text-gray-500'>
            Irms
            <div className='absolute w-12 h-1 -bottom-1 bg-orange-500'></div>
          </p>
        </div>
        <div className='shadow-lg shadow-slate-400 bg-white w-40 h-24 md:w-48 md:h-28 flex items-center justify-center gap-2'>
          <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>{kpis[3]}</h3>
          <p className='text-lg md:text-2xl relative font-light text-gray-500'>
            Wact
            <div className='absolute w-12 h-1 -bottom-1 bg-sky-500'></div>
          </p>
        </div>
        <div className='shadow-lg shadow-slate-400 bg-white w-40 h-24 md:w-48 md:h-28 flex items-center justify-center gap-2'>
          <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>{kpis[4]}</h3>
          <p className='text-lg md:text-2xl relative font-light text-gray-500'>
            Hertz
            <div className='absolute w-12 h-1 -bottom-1 bg-purple-600'></div>
          </p>
        </div>
        <div className='shadow-lg shadow-slate-400 bg-white w-40 h-24 md:w-48 md:h-28 flex items-center justify-center gap-2'>
          <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>{kpis[5]}</h3>
          <p className='text-lg md:text-2xl relative font-light text-gray-500'>
            VA
            <div className='absolute w-12 h-1 -bottom-1 bg-cyan-600'></div>
          </p>
        </div>
        <div className='shadow-lg shadow-slate-400 bg-white w-40 h-24 md:w-48 md:h-28 flex items-center justify-center gap-2'>
          <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>{kpis[6]}</h3>
          <p className='text-lg md:text-2xl relative font-light text-gray-500'>
            Wrea
            <div className='absolute w-12 h-1 -bottom-1 bg-blue-800'></div>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Lines title="Voltaje" color={['rose']} chartData={tension1} />
      </div>
      <div className="flex flex-col items-center gap-2 md:col-start-2 md:col-span-1">
        <Lines title="Corriente" color={['amber']} chartData={tension2} />
      </div>
      <div className='shadow-lg shadow-slate-400 bg-white p-4 pt-8 md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1'>
        <Pie data={pieData} />
      </div>
      {/* <div className="max-h-[364px] overflow-scroll lg:max-h-[700px]">
        <TableData tableData={tensionTable} />
      </div> */}
    </section>
  )
}
