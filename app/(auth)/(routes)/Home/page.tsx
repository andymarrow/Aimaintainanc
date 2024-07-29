import React from 'react'
import Login from '../Login/page'

import Link from 'next/link'
import Image from 'next/image'
function HomePage() {
  return (
    
    <div className='bg-gradient-to-r from-[#0446a3] to-[#b5c3dd]'>

        {/*Navbar*/}

        <nav className='flex items-center sm:space-x-40 md:space-x-96 p-4 border border-gray-300  rounded-2xl '>
        <Image 
            height={130}
            width={130}
            alt="logo"
            src="/backgroundlessAi.png"
        />
            <div className='flex justify-center'>
               <h2>Maintenace Request</h2>
            </div>
          
        </nav>


        {/*Main*/}
        <main className='p-4'>
            <Login/>
        </main>
    

         {/*Admin*/}
         <div className='text-end pr-8 text-2xl'>
        <Link href={"/AdminLogin"} >Admin</Link>
        </div>
    
    </div>
    
 

  )
}

export default HomePage
