import React from 'react'
import Vedio from '../Components/Home_Components/Vedio'
import HeaderText from '../Components/Home_Components/HeaderText'
import BottomLinks from '../Components/Home_Components/BottomLinks'

const Home = () => {
  return (
    <div className='h-screen w-screen '>
       <div className="fixed inset-0 w-screen h-screen overflow-hidden">
       <Vedio/>
        </div>

       <div className=" h-screen w-screen flex flex-col items-center justify-between pb-2  relative">

         <HeaderText/>
         <BottomLinks/>

          </div>

    </div>
  )
}

export default Home