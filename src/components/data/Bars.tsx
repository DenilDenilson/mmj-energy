import { BarChart } from '@tremor/react'

const chartdata = [
  {
    name: '07:01',
    'Nivel de CO2': 2488
  },
  {
    name: '07:02',
    'Nivel de CO2': 1445
  },
  {
    name: '07:03',
    'Nivel de CO2': 743
  },
  {
    name: '07:04',
    'Nivel de CO2': 281
  },
  {
    name: '07:05',
    'Nivel de CO2': 251
  },
  {
    name: '07:06',
    'Nivel de CO2': 232
  },
  {
    name: '07:07',
    'Nivel de CO2': 98
  }
]
// const dataFormatter = (number: number) =>
//   Intl.NumberFormat('us').format(number).toString()

export default function Bars ({ title }: { title: string }) {
  return (
    <div className='min-w-[384px] flex-1 max-w-lg p-4 bg-slate-100 rounded-xl shadow-lg shadow-slate-400'>
      <h3 className='text-sm font-semibold tracking-wide'> &bull; {title}</h3>
      <BarChart
      data={chartdata}
      index="name"
      categories={['Nivel de CO2']}
      className='w-full h-64 mt-4'
      />
    </div>
  )
}
