import React from 'react'

import {Logo }from '@/app/(dashboard)/_componenets/logo'
import Link from 'next/link'
import Login from '../_componenets/login'
function HomePage() {
  return (
    
    <div className='bg-gradient-to-r from-[#0446a3] to-[#b5c3dd]'>

        {/*Navbar*/}

        <nav className='flex items-center sm:space-x-40 md:space-x-96 p-4 border border-gray-300  rounded-2xl '>
            <Logo/>
            <div className='flex justify-center'>
               <h2>Maintenace Request</h2>
            </div>
          
        </nav>


        {/*Main*/}
        <main className='p-4'>
            <Login/>
        </main>
    

        
    
    </div>
    
 

  )
}

export default HomePage
