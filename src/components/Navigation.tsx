import React from 'react';
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion as m } from "framer-motion";
import  {container, item, itemLeft}  from "../../animation";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

interface navProps {
    props: boolean;
    sendPropBack:(data: boolean) => void;
}

export default function Navigation({ props, sendPropBack} : navProps) {
    let state = props;
    console.log(state)

    const sendBackState = () => {
      sendPropBack(false)

    }
  return (
    <div>
        <m.div 
          variants={container}
          initial="hidden"
          animate={`${state ? 'show': 'hidden'}`}
          className={`h-full  w-full flex  font-krona justify-center flex-col min-w-44 fixed z-10 content-center bg-transparent overflow-hidden `}>
            <div className={`text-6xl hover:scale-110 transition-all duration-700 font-bold mb-8 overflow-hidden text-center hover:cursor-pointer`}>
                <Link
                    activeClass="active"
                    activeStyle={{textDecoration: 'none', color:'black'}}
                    to="web-development-services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                  <m.p onClick={sendBackState} className='font-thin uppercase' variants={item}>menu</m.p></Link>
                </div>
                <div className={`text-6xl hover:scale-110 transition-all duration-700 font-bold overflow-hidden mt-4 mb-8 text-center hover:cursor-pointer`}>
                    <Link
                    activeClass="active"
                    activeStyle={{textDecoration: 'none', color:'black'}}
                    to="about-digital-presence"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={2000}
                  ><m.p onClick={sendBackState} className='font-thin uppercase'  variants={item}>shops</m.p></Link>
                </div>
                <div className={`text-6xl hover:scale-110 transition-all duration-700 font-bold overflow-hidden  mt-4 mb-8 text-center hover:cursor-pointer`}>
                    <Link
                    activeClass="active"
                    activeStyle={{textDecoration: 'none', color:'black'}}
                    to="contact-page"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={2000}
                  ><m.p onClick={sendBackState} className='font-thin uppercase' variants={item}>about</m.p></Link>
                </div>
                <div className={`text-6xl hover:scale-110 transition-all duration-700 font-bold overflow-hidden  mt-4 mb-4 text-center hover:cursor-pointer`}>
                    <Link
                    activeClass="active"
                    activeStyle={{textDecoration: 'none', color:'black'}}
                    to="contact-page"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={2000}
                  ><m.p onClick={sendBackState} className='font-thin uppercase' variants={item}>contact</m.p></Link>
                </div>
                <div className='flex text-5xl overflow-hidden justify-center'>
                  <m.a variants={item} className='p-4 overflow-hidden' href='https://www.instagram.com/digital.presence_/'><InstagramIcon className='text-[40px] hover:scale-110 transition-all duration-700'/></m.a>
                  <m.a variants={item} className='p-4 overflow-hidden' href='https://twitter.com/jjhardwicke'><TwitterIcon className='text-[40px] hover:scale-110 transition-all duration-700'/></m.a>
                  <m.a variants={item} className='p-4 overflow-hidden' href='https://www.facebook.com/jjhardwicke/?locale=en_GB'><FacebookIcon className='text-[40px] hover:scale-110 transition-all duration-700'/></m.a>
                </div>
            </m.div>
    </div>
  )
}
