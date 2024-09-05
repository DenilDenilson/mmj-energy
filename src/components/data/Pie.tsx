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
