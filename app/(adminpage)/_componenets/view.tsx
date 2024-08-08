import React from 'react'

function view() {
  return (
    <div>
        <div className='flex  flex-col border border-white rounded-lg'>
            <form >
                <div className='pb-4 text-white '>
                    <label className=' mr-8'>Email</label>
                    <input className='bg-slate-400 pl-2'/>
                </div>
                <div className='pb-4  text-white'>
                    <label className=' mr-6'>Password</label>
                    <input className='bg-slate-400 pl-2'/>
                </div>
                <div className='pb-4  text-white'>
                    <label className=' mr-6'>ID Number</label>
                    <input className='bg-slate-400 pl-2'/>
                </div>
                
                <div className='pb-4  text-white'>
                    <label className=' mr-6'>Departement</label>
                    <select  className='bg-slate-400 pl-2'>
                        <option value="">Dev team</option>
                        <option>Machine Learning</option>
                        <option>HR</option>
                    </select>
                   
                </div>
                
            </form>
        </div>


        <div className='flex justify-center p-4'>
            <button className='bg-yellow-400 text-zinc-50 rounded-md py-2 px-4'>Edit</button>
            <button className='bg-red-600 text-white rounded-md py-2 px-4' >Delete</button>
        </div>
    </div>

  )
}

export default view
