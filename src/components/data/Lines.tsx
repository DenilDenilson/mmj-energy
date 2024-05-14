import { LineChart } from '@tremor/react'

// const chartdata = [
//   {
//     date: 'Jan 22',
//     Temperature: 2890
//   },
//   {
//     date: 'Feb 22',
//     Temperature: 2756
//   },
//   {
//     date: 'Mar 22',
//     Temperature: 3322
//   },
//   {
//     date: 'Apr 22',
//     Temperature: 3470
//   },
//   {
//     date: 'May 22',
//     Temperature: 3475
//   },
//   {
//     date: 'Jun 22',
//     Temperature: 3129
//   },
//   {
//     date: 'Jul 22',
//     Temperature: 3490
//   },
//   {
//     date: 'Aug 22',
//     Temperature: 2903
//   },
//   {
//     date: 'Sep 22',
//     Temperature: 2643
//   },
//   {
//     date: 'Oct 22',
//     Temperature: 2837
//   },
//   {
//     date: 'Nov 22',
//     Temperature: 2954
//   },
//   {
//     date: 'Dec 22',
//     Temperature: 3239
//   }
// ]

interface LineProps {
  title: string
  chartData: Array<{ date: string, value: number }>
}

export default function Lines({ title, chartData }: LineProps) {
  return (
    <div className="max-w-[512px] w-full bg-slate-100 p-4 shadow-lg shadow-slate-400 lg:min-w-[384px]">
      <h3 className="text-sm font-semibold tracking-wide"> &bull; {title}</h3>
      <LineChart
        data={chartData}
        index="date"
        categories={['value']}
        className="mt-4 max-h-64 w-full"
        colors={['rose']}
      />
    </div>
  )
}
