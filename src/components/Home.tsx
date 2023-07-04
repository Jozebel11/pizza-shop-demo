import React from 'react'
import Logo from '-!svg-react-loader!../../public/Pizza.svg'
import localFont from '@next/font/local'
import BackGround from '-!svg-react-loader!../../public/bg-toppings-3.svg'

const fridayLovers = localFont({
  src: [
    {
      path: '../../public/fonts/fridaylovers.otf',
      weight: '400'
    },
    
  ],
  variable: '--font-fridaylovers'
})

function Home() {
  return (
    <div className='flex justify-center items-center relative'>
      <div className='flex flex-col mt-[150px] absolute top-28 justify-center items-center'>
        <h1 className={`${fridayLovers.className} text-[6rem] leading-[4rem] uppercase`}><span>Fri</span><br></br><span className='flex-row -mb-12 flex'><Logo className='w-[130px] opacity-75 mr-4'/>yay</span><br></br><span>Pizza</span></h1>
      </div>
     
    </div>
  )
}

export default Home