'use client'

import { usePathname } from 'next/navigation'

export default function NavIntern() {
  const pathname = usePathname()

  return (
    <nav className='flex flex-col fixed justify-between items-center px-2 md:px-6 pb-24 pt-24 bg-gray-100 mr-1 max-h-svh h-full'>
    {/* <Image src="/Images/MMJ-Branding.png" alt="Logo" width={128} height={40} /> */}
    <p className='hidden md:block'>MMJ SMART ELECTRONICS</p>
    <p className='md:hidden'>MMJ</p>
    <ul className='hidden font-semibold text-2xl md:flex flex-col gap-4'>
      <a href="/dashboard" className={`${pathname === '/dashboard' ? 'text-[#b52016] font-extrabold' : ''}`}>Home</a>
      <a href="/dashboard/corriente" className={`${pathname === '/dashboard/corriente' ? 'text-[#b52016] font-extrabold' : ''}`}>Corriente</a>
      <a href="/dashboard/tension" className={`${pathname === '/dashboard/tension' ? 'text-[#b52016] font-extrabold' : ''}`}>Tensión</a>
      <a href="/dashboard/potencia" className={`${pathname === '/dashboard/potencia' ? 'text-[#b52016] font-extrabold' : ''}`}>Potencia</a>
    </ul>
    <ul className='font-semibold text-2xl flex flex-col gap-4 md:hidden'>
      <a href="/dashboard" className={`${pathname === '/dashboard' ? 'text-[#b52016] font-extrabold' : ''}`}>H</a>
      <a href="/dashboard/corriente" className={`${pathname === '/dashboard/corriente' ? 'text-[#b52016] font-extrabold' : ''}`}>C</a>
      <a href="/dashboard/tension" className={`${pathname === '/dashboard/tension' ? 'text-[#b52016] font-extrabold' : ''}`}>T</a>
      <a href="/dashboard/potencia" className={`${pathname === '/dashboard/potencia' ? 'text-[#b52016] font-extrabold' : ''}`}>P</a>
    </ul>
    <footer className='hidden md:block text-center text-sm'>
      Software desarrollado por <br></br> <strong>MMJ Smart Electronics</strong>
    </footer>
    <footer className='text-center text-sm md:hidden'>
      💖
    </footer>
  </nav>
  )
}
