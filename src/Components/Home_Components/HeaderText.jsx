import React from 'react'
import Vedio from './Vedio'

const HeaderText = () => {
  return (
    <div className='text-[first] text-[11vw] flex flex-col justify-center items-center leading-29 text-white uppercase relative '>

        <h1>L'étincelle</h1>
         <div className='flex  gap-2'>
            <h1>qui</h1>
              <div className='h-[6vw] w-[15vw] my-4 border-2 rounded-full overflow-hidden'>  <Vedio/></div>
            <h1>génère</h1>
         </div>
       <h1>la créativité</h1>
      
    </div>
  )
}

export default HeaderText