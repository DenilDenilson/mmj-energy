'use client'

import { DonutChart } from '@tremor/react'

// const data = [
//   {
//     name: 'Potencia activa',
//     amount: 4890,
//   },
//   {
//     name: 'Potencia reactiva',
//     amount: 2103,
//   }
// ]

interface pieData {
  name: string
  amount: number
}

interface pieProps {
  data: pieData[]
}

export const Pie = ({ data }: pieProps) => (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className='relative font-semibold text-gray-800'>
        <div className='absolute -left-8 top-2 h-2 w-5 bg-sky-500'></div>
        Potencia Activa
      </p>
      <p className='relative font-semibold text-gray-800'>
        <div className='absolute -left-8 top-2 h-2 w-5 bg-blue-800'></div>
        Potencia Reactiva
      </p>
      <DonutChart
        data={data}
        variant="pie"
        index="name"
        category="amount"
        // value="amount"
        valueFormatter={(number: number) =>
          `$${Intl.NumberFormat('us').format(number).toString()}`
        }
      />
    </div>
)
