import React from 'react'
import {Link} from 'react-router-dom'
const BottomLinks = () => {
  return (
    <div className='text-white text-[6vw] text-[first] font-thin flex gap-5   leading-16'>
   <Link className='border-4 rounded-full  px-16 pb-7 ' to='/Projects'>Projects</Link>
   <Link className='border-4 rounded-full  px-16 pb-' to='/Agence'>Agence</Link>
     
       
    </div>
  )
}

export default BottomLinks