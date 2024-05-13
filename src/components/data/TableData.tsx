import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow
} from '@tremor/react'

// const data = [
//   {
//     Tiempo: '12:02',
//     'Tensión 1': '07 V',
//     'Tensión 2': '09 V'
//   },
//   {
//     Tiempo: '12:05',
//     'Tensión 1': '07 V',
//     'Tensión 2': '10 V'
//   },
//   {
//     Tiempo: '12:07',
//     'Tensión 1': '07 V',
//     'Tensión 2': '09 V'
//   },
//   {
//     Tiempo: '12:10',
//     'Tensión 1': '07 V',
//     'Tensión 2': '08 V'
//   },
//   {
//     Tiempo: '12:12',
//     'Tensión 1': '07 V',
//     'Tensión 2': '07 V'
//   },
//   {
//     Tiempo: '12:15',
//     'Tensión 1': '07 V',
//     'Tensión 2': '11 V'
//   },
//   {
//     Tiempo: '12:17',
//     'Tensión 1': '07 V',
//     'Tensión 2': '15 V'
//   },
//   {
//     Tiempo: '12:02',
//     'Tensión 1': '07 V',
//     'Tensión 2': '09 V'
//   },
//   {
//     Tiempo: '12:05',
//     'Tensión 1': '07 V',
//     'Tensión 2': '10 V'
//   },
//   {
//     Tiempo: '12:07',
//     'Tensión 1': '07 V',
//     'Tensión 2': '09 V'
//   },
//   {
//     Tiempo: '12:10',
//     'Tensión 1': '07 V',
//     'Tensión 2': '08 V'
//   },
//   {
//     Tiempo: '12:12',
//     'Tensión 1': '07 V',
//     'Tensión 2': '07 V'
//   },
//   {
//     Tiempo: '12:15',
//     'Tensión 1': '07 V',
//     'Tensión 2': '11 V'
//   },
//   {
//     Tiempo: '12:17',
//     'Tensión 1': '07 V',
//     'Tensión 2': '15 V'
//   },
//   {
//     Tiempo: '12:02',
//     'Tensión 1': '07 V',
//     'Tensión 2': '09 V'
//   },
//   {
//     Tiempo: '12:05',
//     'Tensión 1': '07 V',
//     'Tensión 2': '10 V'
//   },
//   {
//     Tiempo: '12:07',
//     'Tensión 1': '07 V',
//     'Tensión 2': '09 V'
//   },
//   {
//     Tiempo: '12:10',
//     'Tensión 1': '07 V',
//     'Tensión 2': '08 V'
//   },
//   {
//     Tiempo: '12:12',
//     'Tensión 1': '07 V',
//     'Tensión 2': '07 V'
//   },
//   {
//     Tiempo: '12:15',
//     'Tensión 1': '07 V',
//     'Tensión 2': '11 V'
//   },
//   {
//     Tiempo: '12:17',
//     'Tensión 1': '07 V',
//     'Tensión 2': '15 V'
//   },
//   {
//     Tiempo: '12:02',
//     'Tensión 1': '07 V',
//     'Tensión 2': '09 V'
//   },
//   {
//     Tiempo: '12:05',
//     'Tensión 1': '07 V',
//     'Tensión 2': '10 V'
//   },
//   {
//     Tiempo: '12:07',
//     'Tensión 1': '07 V',
//     'Tensión 2': '09 V'
//   },
//   {
//     Tiempo: '12:10',
//     'Tensión 1': '07 V',
//     'Tensión 2': '08 V'
//   },
//   {
//     Tiempo: '12:12',
//     'Tensión 1': '07 V',
//     'Tensión 2': '07 V'
//   },
//   {
//     Tiempo: '12:15',
//     'Tensión 1': '07 V',
//     'Tensión 2': '11 V'
//   },
//   {
//     Tiempo: '12:17',
//     'Tensión 1': '07 V',
//     'Tensión 2': '15 V'
//   }
// ]

export default function TableData (
  { tableData }: { tableData: Array<{
    date: string
    'Tensión 1': number
    'Tensión 2': number }>
  }) {
  return (
    <Card>
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Datos Históricos del PLC <span className='opacity-50'>*BBDD inactiva</span></h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Tiempo</TableHeaderCell>
            <TableHeaderCell>Tensión 1</TableHeaderCell>
            <TableHeaderCell>Tensión 2</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item) => (
            <TableRow key={item.date}>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                {item['Tensión 1']}
              </TableCell>
              <TableCell>
                {item['Tensión 2']}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
