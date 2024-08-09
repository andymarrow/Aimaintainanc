import React from 'react'
import Home from '@/app/(auth)/(routes)/Home/page'
import Emp from '@/app/(auth)/(routes)/Employee/page'
function page() {
  return (
    <div className='overflow-hidden'>
      {/* <Home/> */}
      <Emp/>
    </div>
  )
}

export default page
