import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({children, className}: HeaderProps) => {
  return (
    <div className={cn('header', className)}>
      <Link href='/' className='md:flex-1 flex items-center justify-start ' >
        {/* <Image
            src='/assets/icons/logo.svg'
            alt='logo with name'
            width={120}
            height={32}
            className='hidden md:block'
        /> */}
        <Image
            src='/assets/icons/logo-icon.svg'
            alt='logo'
            width={49}
            height={49}
            className='mr-1 '
        />
        <p className='text-xl font-black text-white hidden md:block'>ProDraft</p>
      </Link>
      {children}
    </div>
  )
}

export default Header
