'use client'

import { DonutChart } from '@tremor/react'

const data = [
  {
    name: 'SolarCells',
    amount: 4890,
  },
  {
    name: 'Glass',
    amount: 2103,
  },
  {
    name: 'JunctionBox',
    amount: 2050,
  },
  {
    name: 'Adhesive',
    amount: 1300,
  },
  {
    name: 'BackSheet',
    amount: 1100,
  },
  {
    name: 'Frame',
    amount: 700,
  },
  {
    name: 'Encapsulant',
    amount: 200,
  },
]

export const Pie = () => (
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
