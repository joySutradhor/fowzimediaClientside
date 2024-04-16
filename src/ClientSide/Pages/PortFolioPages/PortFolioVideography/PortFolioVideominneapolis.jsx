import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";

import headerLogo from "/headerLogo.png"
// import social icons
import fb from "/fb.png";
import instra from "/instra.png";
import youtube from "/youtube.png"
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";

import { Fade } from 'react-awesome-reveal';
import { useState } from "react";





const PortFolioVideominneapolis = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <div>
            <div className=" bg-[url('/portFoliohero.png')] bg-no-repeat bg-top-center w-[100%] bg-black 
   2xl:h-[100dvh] 
   xl:h-[100dvh] 
   lg:h-[100dvh] 
   md:h-[100dvh] 
   h-[70dvh] bg-top">

                {/*----------------- header menu ------------------ */}
                <div className='relative'>
                    <nav className=" 
       relative
       2xl:pl-[150px] 2xl:pr-[150px] 2xl:pt-[50px] 
       xl:pt-[50px] xl:pl-[60px] xl:pr-[60px] 
       lg:pt-[40px] lg:pl-[50px] lg:pr-[50px]
       md:pt-[40px] md:pl-[50px] md:pr-[50px]
       pt-[30px] pl-[20px] pr-[20px]

       flex justify-between items-center">

                        {/* ----------Desktop Menu ---------- */}
                        <div className="headerLogo">
                            <Link to="/"><img className="w-full h-full cursor-pointer" src={headerLogo} alt="logo" /></Link>
                        </div>

                        {/*-------------- Desktop Header Menu --------------- */}
                        <div className='hidden md:block lg:block xl:block 2xl:block'>
                            <ul className="headMenuLeftRight  z-auto  ">
                                <Link to="/"> <li className="desktopMenu   ">HOME</li> </Link>
                                <Link to="/"> <li className="desktopMenu">SERVICES</li> </Link>
                                <Link to="/" > <li className=" desktopMenu">ABOUT</li> </Link>
                                <Link to="/"> <li className="desktopMenu ">PORTFOLIO</li> </Link>
                                <Link to="/"> <li className=" desktopMenu">BLOG</li> </Link>
                                <Link to="/"> <li className="cursor-pointer"> CONTACT</li> </Link>
                            </ul>
                        </div>
                        {/* -----------------------Mobile Header Menu ------------------  */}


                        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
                            <button onClick={toggleMenu}><SlMenu className='text-[25px] text-white'></SlMenu></button>
                            {menuOpen && (
                                <div className=''>
                                    <div className={`mobile-menu ${menuOpen ? ' opacity-80' : ''}`}>

                                        <div className='flex justify-between items-center px-[20px] pt-[30px] border-b  border-gray-600 pb-[30px]'>
                                            <div>
                                                <img className='headerLogoMobile' src={headerLogo} alt="" />
                                            </div>
                                            <div>
                                                <RxCross1 onClick={closeMenu} className='text-[25px] hover:text-[#FF0101]'></RxCross1>
                                            </div>
                                        </div>
                                        <ul className='menuParent'>
                                            <Fade cascade duration={300}>
                                                <Link to="/">
                                                    <li>HOME</li>
                                                </Link>
                                                <Link to="/">
                                                    <li >SERVICES</li>
                                                </Link>
                                                <Link to="/" >
                                                    <li >ABOUT</li>
                                                </Link>
                                                <Link to="/">
                                                    <li >PORTFOLIO</li>
                                                </Link>
                                                <Link to="/">
                                                    <li >BLOG</li>
                                                </Link>
                                                <Link to="/">
                                                    <li className="cursor-pointer"> CONTACT</li>
                                                </Link>
                                            </Fade>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>



                        {/* --------------DeskTop Socail Icons -------------- */}
                        <div className="md:block lg:block  xl:block 2xl:block hidden">
                            <div className="flex items-center">

                                {/* ----------Facebook ------ */}
                                <div className="                       
                   2xl:h-[27px]  2xl:w-[14px] 2xl:mr-[18.91px]
                   xl:mr-[17.91px] xl:w-[13px] xl:h-[25px]
                   lg:mr-[15px] lg:w-[12px] lg:h-[25px]
                   md:mr-[10px] md:w-[10px] md:h-[20px]
                   cursor-pointer">
                                    <img className="w-full h-full " src={fb} alt="" />
                                </div>

                                {/* -------instragram ---------- */}
                                <div className="
                   2xl:h-[25.11px] 2xl:w-[25.6px] 2xl:mr-[18.49px]                       
                   xl:w-[24.24px] xl:h-[23.78px] xl:mr-[17.51px]  
                   lg:w-[25px] lg:h-[22px] lg:mr-[15px]
                   md:w-[20px] md:h-[19px] md:mr-[10px]

                   cursor-pointer">
                                    <img className=" h-full w-full " src={instra} alt="" />
                                </div>
                                {/* -------Youtube ---------- */}
                                <div className="
                   2xl:h-[24px] 2xl:w-[36px] 
                   xl:h-[22.73px] xl:w-[34.09px]
                   lg:h-[22px] lg:w-[30px]
                   md:h-[20px] md:w-[20px]

                   cursor-pointer">
                                    <img className=" w-full h-full object-cover" src={youtube} alt="" />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>




            </div>
            <div className="bg-[#111111] 2xl:mt-[-100px] 2xl:rounded-t-[50px] 
            xl:mt-[-50px] xl:rounded-t-[50px]
            lg:mt-[-50px] lg:rounded-t-[50px]
            md:mt-[-50px] md:rounded-t-[50px]

             ">
                <div className=" 2xl:px-[150px] 2xl:pt-[50px] 2xl:pb-[200px] 
                xl:px-[60px] xl:pt-[40px] xl:pb-[180px]
                lg:px-[70px] lg:pb-[150] lg:pt-[40px]
                md:px-[50px] md:pb-[100px] md:pt-[40px]
                px-[20px] pb-[60px] pt-[40px]
                text-white">
                    <p className="pageTitle">Home . Portfolio . Videography . Video</p>
                    <div className="flex ">
                        <div className="">

                            {/* <img className="xl:h-[500px] xl:w-full object-cover xl:rounded-[25px]" src="/videoGraphyDetails.png" alt="" /> */}

                            <div className="w-[100%] xl:h-[500px] 2xl:h-[700px] lg:h-[400px] md:h-[300px]">
                                <iframe title="vimeo-player" src="https://player.vimeo.com/video/839533566?h=cc7f784bde" className="w-full h-full" frameBorder="0" allowfullscreen></iframe>
                            </div>


                            <div className="2xl:mt-[60px] xl:mt-[40px] lg:mt-[30px] md:pt-[20px] pt-[20px]">
                                <p className="2xl:text-[18px] 2xl:leading-[21.58px] 
                                font-glacialBase 
                                xl:text-[16px] xl:leading-[18px]
                                lg:text-[16px] lg:leading-[21px]
                                md:text-[16px] md:leading-[21px]
                                text-[14px] leading-[16px]
                                ">Video is a powerful medium for conveying your message and engaging your audience. Our videographers can help you create professional-quality video content for your website, social media, or promotional materials. From concept development to post-production, we handle every aspect of the video production process.</p>

                                <p className="videoGraphyPara">Video is a powerful medium for conveying your message and engaging your audience. Our videographers can help you create professional-quality video content for your website, social media, or promotional materials. From concept development to post-production, we handle every aspect of the video production process.Video is a powerful medium for conveying your message and engaging your audience. Our videographers can help you create professional-quality video content for your website, social media, or promotional materials. From concept development to post-production, we handle every aspect of the video production process.</p>

                                <p className="videoGraphyPara">Video is a powerful medium for conveying your message and engaging your audience. Our videographers can help you create professional-quality video content for your website, social media, or promotional materials. From concept development to post-production, we handle every aspect of the video production process.Video is a powerful medium for conveying your message and engaging your audience. Our videographers can help you create professional-quality video content for your website, social media, or promotional materials. From concept development to post-production, we handle every aspect of the video production process.</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* footer section */}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default PortFolioVideominneapolis;