import React from 'react';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion as m } from "framer-motion";
import  {scrollContainer, liItem , item, itemLeft, itemRight, videoContainer, container, underlineRight, underlineLeft, ulContainer}  from "../../animation";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import localFont from '@next/font/local'




const fridayLovers = localFont({
  src: [
    {
      path: '../../public/fonts/fridaylovers.otf',
      weight: '400'
    },
    
  ],
  variable: '--font-fridaylovers'
})


function Footer() {
  return (
    <section className='h-[250px] bg  min-w-full'>
        <div className='border-t-[1px] flex flex-col items-center justify-content-center  mx-10'>
        <div className=' font-krona flex text-[12px] flex-row m-2 '>
                  <a className=' no-underline border-r-2 border-[#AF413A] px-2' href="#digital-presence-home">menu</a>
                  <a className=' no-underline border-r-2 border-[#AF413A] px-2' href="#web-development-services">shops</a>
                  <a className=' no-underline border-r-2 border-[#AF413A] px-2' href="#about-digital-presence">about</a>
                  <a className=' no-underline border-r-2 border-[#AF413A] px-2' href="#blog">contact</a>
                  <a className=' no-underline px-2' href="#contact-page">FAQ</a>
            </div>
            
            <div>
            <h1 className={`${fridayLovers.className} text-5xl m-[20px] `}>FYP</h1>
                <h1 className='text-[12px]'>
                © 2023 Fri-Yay Pizzas
                </h1>
                <p className='text-[12px] text-center'>London, UK</p>
            </div>
            <div className='flex justify-content-around justify-around mb-4 w-[300px] mt-2'>
                  <m.a variants={item} className=' overflow-hidden' href='https://www.instagram.com/digital.presence_/'><InstagramIcon/></m.a>
                  <m.a variants={item} className=' overflow-hidden' href='https://twitter.com/jjhardwicke'><TwitterIcon/></m.a>
                  <m.a variants={item} className=' overflow-hidden' href='https://www.facebook.com/jjhardwicke/?locale=en_GB'><FacebookIcon/></m.a>
            </div>
        </div>
    </section>
  )
}

export default Footer