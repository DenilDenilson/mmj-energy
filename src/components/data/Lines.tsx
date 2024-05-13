import { LineChart } from '@tremor/react'

const chartdata = [
  {
    date: 'Jan 22',
    Temperature: 2890
  },
  {
    date: 'Feb 22',
    Temperature: 2756
  },
  {
    date: 'Mar 22',
    Temperature: 3322
  },
  {
    date: 'Apr 22',
    Temperature: 3470
  },
  {
    date: 'May 22',
    Temperature: 3475
  },
  {
    date: 'Jun 22',
    Temperature: 3129
  },
  {
    date: 'Jul 22',
    Temperature: 3490
  },
  {
    date: 'Aug 22',
    Temperature: 2903
  },
  {
    date: 'Sep 22',
    Temperature: 2643
  },
  {
    date: 'Oct 22',
    Temperature: 2837
  },
  {
    date: 'Nov 22',
    Temperature: 2954
  },
  {
    date: 'Dec 22',
    Temperature: 3239
  }
]

export default function Lines ({ title }: { title: string }) {
  return (
    <div
    className='min-w-[384px] flex-1 max-w-lg p-4 bg-slate-100 rounded-xl shadow-lg shadow-slate-400'
    >
      <h3 className='text-sm font-semibold tracking-wide'> &bull; {title}</h3>
      <LineChart
      data={chartdata}
      index="date"
      categories={['Temperature']}
      className="w-full h-64 mt-4"
    />
    </div>
  )
}
