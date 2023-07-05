"use client";
import Image from 'next/image';
import Head from "next/head";
import { useEffect, useState } from "react";
import Navigation from '@/components/Navigation';
import { Link, animateScroll as scroll } from "react-scroll";
import Intro from '@/components/Home'
import localFont from '@next/font/local'
import OrderCard from '@/components/OrderCard';
import Footer from '@/components/Footer';

const fridayLovers = localFont({
  src: [
    {
      path: '../../public/fonts/fridaylovers.otf',
      weight: '400'
    },
    
  ],
  variable: '--font-fridaylovers'
})


const Home: React.FC = () => {
   //Styles for the hamburger menu

   


   const topStyle: React.CSSProperties = {
    strokeDasharray: '40 160',
    fill: 'none',
    transition: 'stroke-dasharray 400ms, stroke-dashoffset 400ms',
    stroke: '#000000',
    strokeWidth: '5.5',
    strokeLinecap: 'round'
};

const middleStyle: React.CSSProperties = {
    fill: 'none',
    transition: 'stroke-dasharray 400ms, stroke-dashoffset 400ms, transform 400ms',
    stroke: '#000000',
    strokeWidth: '5.5',
    strokeLinecap: 'round',
    strokeDasharray: '40 142',
    transformOrigin: '50%',
};

const bottomStyle: React.CSSProperties = {
    fill: 'none',
    transition: 'stroke-dasharray 400ms, stroke-dashoffset 400ms, transform 400ms',
    stroke: '#000000',
    strokeWidth: '5.5',
    strokeLinecap: 'round',
    strokeDasharray: '40 85',
    transformOrigin: '50%',
    
};

const topStyleActive: React.CSSProperties = {
    fill: 'none',
    transition: 'stroke-dasharray 400ms, stroke-dashoffset 400ms',
    stroke: '#000000',
    strokeWidth: '5.5',
    strokeLinecap: 'round',
    strokeDasharray: '40 160',
    strokeDashoffset: '-64px'
};

const middleStyleActive: React.CSSProperties = {
    fill: 'none',
    transition: 'stroke-dasharray 400ms, stroke-dashoffset 400ms, transform 400ms',
    stroke: '#000000',
    strokeWidth: '5.5',
    strokeLinecap: 'round',
    strokeDasharray: '40 142',
    transformOrigin: '50%',
    transform: 'rotate(90deg)'
};

const bottomStyleActive: React.CSSProperties = {
    fill: 'none',
    transition: 'stroke-dasharray 400ms, stroke-dashoffset 400ms, transform 400ms',
    stroke: '#000000',
    strokeWidth: '5.5',
    strokeLinecap: 'round',
    strokeDasharray: '40 85',
    transformOrigin: '50%',
    strokeDashoffset: '-64px'
};

const svgStyle: React.CSSProperties = {
    transition: 'transform 400ms'
};

const svgStyleActive: React.CSSProperties = {
    transition: 'transform 400ms',
    transform: 'rotate(45deg)'
};

// useStates for the sideNav and menu Button
let [sideNavState, setSideNavState] = useState<boolean>(false);
let [sideNavButtonStyleTop, setSideNavButtonStyleTop] = useState<React.CSSProperties | undefined>(topStyle);
let [sideNavButtonStyleMiddle, setSideNavButtonStyleMiddle] = useState<React.CSSProperties | undefined>(middleStyle);
let [sideNavButtonStyleBottom, setSideNavButtonStyleBottom] = useState<React.CSSProperties | undefined>(bottomStyle);
let [svgStyleButton, setSvgStyleButton] = useState<React.CSSProperties| undefined>(svgStyle);

//Function that runs when menu button is pressed
let sideNavButton = () => {
    if(sideNavState){
        setSideNavState(sideNavState => sideNavState = false);
        //Button Styling Before Click
        setSideNavButtonStyleTop(sideNavButtonStyleTop => sideNavButtonStyleTop = topStyle );
        setSideNavButtonStyleMiddle(sideNavButtonStyleMiddle => sideNavButtonStyleMiddle = middleStyle );
        setSideNavButtonStyleBottom(sideNavButtonStyleBottom => sideNavButtonStyleBottom = bottomStyle );
        setSvgStyleButton(svgStyleButton => svgStyleButton = svgStyle );
    }else{
        setSideNavState(sideNavState => sideNavState = true);
        //Button Styling After Click
        setSideNavButtonStyleTop(sideNavButtonStyleTop => sideNavButtonStyleTop = topStyleActive );
        setSideNavButtonStyleMiddle(sideNavButtonStyleMiddle => sideNavButtonStyleMiddle = middleStyleActive );
        setSideNavButtonStyleBottom(sideNavButtonStyleBottom => sideNavButtonStyleBottom = bottomStyleActive );
        setSvgStyleButton(svgStyleButton => svgStyleButton = svgStyleActive);



    };

};

interface HandleDataProps {
  handleData: (data: boolean) => boolean
}

const handleData = (data: boolean) => {
  setSideNavState(sideNavState => sideNavState = data)
  setSideNavButtonStyleTop(sideNavButtonStyleTop => sideNavButtonStyleTop = topStyle );
        setSideNavButtonStyleMiddle(sideNavButtonStyleMiddle => sideNavButtonStyleMiddle = middleStyle );
        setSideNavButtonStyleBottom(sideNavButtonStyleBottom => sideNavButtonStyleBottom = bottomStyle );
        setSvgStyleButton(svgStyleButton => svgStyleButton = svgStyle );
}

  return (
    <main className="flex min-h-screen flex-col">
       <Head>
        <title>Fri-yay Pizza</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Professional web development services to help build your online presence. Specialising in responsive, user-friendly design with modern technologies." />
        <meta name="keywords" content="Web Development, Responsive Design, Web Design, SEO, Digital Presence, Online Presence, Website Design, " />
        <meta property="og:title" content="Digital Presence - Web Development, E-Commerse, Digital Marketing"/>
        <meta property="og:description" content="Professional web development services to help build your online presence. Specialising in responsive, user-friendly design with modern technologies."/>
        <meta property="og:image" content="/dp-high-resolution-logo-black-on-transparent-background.png"/>
        <meta property="og:url" content="https://digital-presence.dev"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <div className='text-black'>
      <Link
                    activeClass="active"
                    to="digital-presence-home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                  ><h1 className={`${fridayLovers.className} text-5xl fixed animate-fadeIn z-10 m-[30px] `}>FYP</h1></Link>
      {sideNavState ? <Navigation props={sideNavState} sendPropBack={handleData} /> : ''}
      <button className='fixed animate-fadeIn  bg-transparent z-10 m-[12px] lg:mt-8 top-0 right-0' onClick={sideNavButton}>
            <svg style={svgStyleButton} viewBox="0 0 100 100" width="70">
                <path style={sideNavButtonStyleTop}
                      className=""
                      d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                <path style={sideNavButtonStyleMiddle}
                      className=""
                      d="m 30,50 h 40" />
                <path style={sideNavButtonStyleBottom}
                      className=""
                      d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
            </svg>
        </button>
      </div>
      <div className={`${sideNavState ? 'blur-lg min-w-full transition duration-500 m-0 p-0 ': 'min-w-full'}`}>
        <div className='relative min-h-screen'>
        <video
               autoPlay
               muted
               playsInline
               className='absolute top-0 left-0 w-full z-[0] min-h-0 }'

               ><source  src="../video/header-toppings.mp4"
               type="video/mp4"/></video>
        <Intro/>
        <OrderCard/>
        </div>
        <Footer/>
      </div>
    </main>
  )
}

export default Home;
