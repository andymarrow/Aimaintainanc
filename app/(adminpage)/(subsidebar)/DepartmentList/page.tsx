import React from 'react'
import Table from '../../_componenets/Deptable'

function DepartmentList() {
  return (
    <div>
      <div> This page will have a side bar and searching and pagination</div>
        <div className=''>Depatment list</div>
        <div className='flex flex-row justify-start'>
        <Table />
    </div>
     </div>
  )
}

export default DepartmentList
