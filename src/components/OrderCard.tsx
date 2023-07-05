import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StoreIcon from '@mui/icons-material/Store';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { motion as m } from "framer-motion";
import  {container, item, itemLeft, itemRight}  from "../../animation";





function OrderCard() {
    const [isDelivery, setDelivery] = useState<boolean>(true);

    const handleCollectionClick = () => {
        if (isDelivery){
            setDelivery(false)
        }


    }

    const handleDeliveryClick = () => {
        if(!isDelivery){
            setDelivery(true)
        }


    }


  return (
    <div className='relative  justify-center items-center flex'>
        <div className='absolute flex flex-row bg-[#AF413A] rounded-t-3xl pb-10 pt-[4px]  items-center w-[350px] justify-around content-around top-[565px]'>
            <button onClick={handleDeliveryClick} className={isDelivery ? 'uppercase transition-all duration-500 text-[#F7CB45]' : `uppercase`}>Delivery</button>
            <button onClick={handleCollectionClick} className={isDelivery ? 'uppercase' : `uppercase transition-all duration-500  text-[#F7CB45]`}>Collection</button>
        </div>
        <div className='absolute shadow-inner-lg flex bg-white  items-center rounded-3xl  top-[600px] w-[350px] h-[100px]'>
            <LocationOnIcon className='m-4 text-xl'/>
            <form action="" className='flex'>
            <div className='flex flex-col'>
            <label
            htmlFor="fullname"
            className="text-black font-semibold mt-[1px]"
          >
            Post Code
          </label>
          <input
            type="text"
            required
            value=''
            name="fullname"
            className=" border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          </div>
            <button
               className='ml-2 w-[50px] transition-all duration-500 rounded-full overflow-hidden h-[50px] drop-shadow-md bg-[#F7CB45]'>
              <m.div variants={container}
              initial="hidden"
              animate='show'>
               <m.div variants={itemRight}>
                   {isDelivery ? <DeliveryDiningIcon/> : <StoreIcon/>} 
                </m.div>
              </m.div> 
              </button>
            </form>
            

        </div>
    </div>
  )
}

export default OrderCard