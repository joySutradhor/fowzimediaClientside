

import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
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





const PortFolioVideography = () => {

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
                                <Link to='OurServices' smooth={true} duration={500}> <li className="desktopMenu">SERVICES</li> </Link>
                                <Link to="aboutUsSection" smooth={true} duration={600} > <li className=" desktopMenu">ABOUT</li> </Link>
                                <Link to="portfolio" smooth={true} duration={700}> <li className="desktopMenu ">PORTFOLIO</li> </Link>
                                <Link to="blog" smooth={true} duration={800}> <li className=" desktopMenu">BLOG</li> </Link>
                                <Link to='footer' smooth={true} duration={1000}> <li className="cursor-pointer"> CONTACT</li> </Link>
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
                                                <Link to='OurServices' smooth={true} duration={500}>
                                                    <li >SERVICES</li>
                                                </Link>
                                                <Link to="aboutUsSection" smooth={true} duration={600} >
                                                    <li >ABOUT</li>
                                                </Link>
                                                <Link to="portfolio" smooth={true} duration={700}>
                                                    <li >PORTFOLIO</li>
                                                </Link>
                                                <Link to="blog" smooth={true} duration={800}>
                                                    <li >BLOG</li>
                                                </Link>
                                                <Link to='footer' smooth={true} duration={1000}>
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
            
            ">
                <div className=" 2xl:px-[150px] 2xl:pt-[50px] 2xl:pb-[200px] 
                xl:px-[80px] xl:pt-[40px] xl:pb-[180px] 
                lg:px-[70px] lg:pt-[40px] lg:pb-[150px]
                md:px-[50px] md:pt-[40px] md:pb-[100px]
                px-[20px] pt-[40px] pb-[60px]
                 text-white">
                    <p className="pageTitle">Home . Portfolio . VideoGraphy</p>
                    <div className="md:flex lg:flex xl:flex 2xl:flex justify-between w-full ">
                        <div className="2xl:w-[776px] xl:w-[578px] lg:w-[48%] md:w-[48%]">
                            <h2 className="titleSubHeading ">VideoGraphy</h2>

                            <p className="2xl:text-[18px] 2xl:leading-[21.58px] 2xl:pb-[50px]
                            xl:text-[16px] xl:leading-[19.18px] xl:pb-[40px]
                            lg:text-[16px] lg:leading-[19.18px] lg:pb-[30px]
                            md:text-[16px] md:leading-[19.18px] md:pb-[20px]
                            text-[14px] leading-[16.18px] pb-[20px]
                            text-white font-glacialBase text-justify ">Video is a powerful medium for conveying your message and engaging your audience. Our videographers can help you create professional-quality video content for your website, social media, or promotional materials. From concept development to post-production, we handle every aspect of the video production process.</p>
                            {/* ---------------left one card --------------- */}
                            <div className=" 2xl:mb-[68px] 2xl:w-[776px] 2xl:h-[675px]  
                            xl:w-full xl:h-[502px] xl:mb-[50px] lg:mb-[40px] md:mb-[25px] mb-[20px]

                            relative group">

                                <img src="/videoR1.png" className="w-full h-full object-cover xl:rounded-[25px] lg:rounded-[25px] md:rounded-[25px] rounded-[25px] " alt="" />
                             


                                <div className="w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <div className=" 
                                    2xl:w-[776px] 2xl:py-[20px]  2xl:rounded-b-[50px] 2xl:px-[40px] 
                                    xl:w-[578px] xl:rounded-b-[25px] xl:px-[30px] xl:py-[10px]
                                    lg:rounded-b-[25px] lg:px-[20px] lg:py-[10px]
                                    md:rounded-b-[25px] md:px-[20px] md:py-[10px]   rounded-b-[25px] px-[20px] py-[10px]
                                    
                                    bg-white bg-opacity-30 flex justify-between 
                                    ">
                                        <div>
                                            <Link to="/PortFolioVideoGraphyFirst"><p className="2xl:text-[25px] 2xl:leading-[30px] xl:text-[20px] xl:leading-[24px] cursor-pointer">Play Now</p></Link>
                                        </div>
                                        <div className="flex ">
                                            <Link to="/PortFolioVideoGraphyFirst" ><p><FaArrowRightLong className="text-[28px]  cursor-pointer"></FaArrowRightLong></p></Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ---------------left two card --------------- */}
                            <div className=" 2xl:mb-[68px] 2xl:w-[776px] 2xl:h-[675px]  
                            xl:w-full xl:h-[502px] xl:mb-[50px] lg:mb-[40px] md:mb-[25px] mb-[20px]

                            relative group">

                                <img src="/videoR2.png" className="w-full h-full object-cover xl:rounded-[25px]" alt="" />


                                <div className="w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <div className=" 
                                    2xl:w-[776px] 2xl:py-[20px]  2xl:rounded-b-[50px] 2xl:px-[40px] 
                                    xl:w-[578px] xl:rounded-b-[25px] xl:px-[30px] xl:py-[10px]
                                    lg:rounded-b-[25px] lg:px-[20px] lg:py-[10px]
                                    md:rounded-b-[25px] md:px-[20px] md:py-[10px]   rounded-b-[25px] px-[20px] py-[10px]
                                    
                                    bg-white bg-opacity-30 flex justify-between 
                                    ">
                                        <div>
                                            <Link to="/PortFolioVideoGraphyFirst"><p className="2xl:text-[25px] 2xl:leading-[30px] xl:text-[20px] xl:leading-[24px] cursor-pointer">Play Now</p></Link>
                                        </div>
                                        <div className="flex ">
                                            <Link to="/PortFolioVideoGraphyFirst" ><p><FaArrowRightLong className="text-[28px]  cursor-pointer"></FaArrowRightLong></p></Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* ---------------left three card --------------- */}
                            <div className=" 2xl:mb-[68px] 2xl:w-[776px] 2xl:h-[675px]  
                            xl:w-full xl:h-[502px] mb-[20px] md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0

                            relative group">

                                <img src="/videoR3.png" className="w-full h-full object-cover xl:rounded-[25px]" alt="" />


                                <div className="w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <div className=" 
                                    2xl:w-[776px] 2xl:py-[20px]  2xl:rounded-b-[50px] 2xl:px-[40px] 
                                    xl:w-[578px] xl:rounded-b-[25px] xl:px-[30px] xl:py-[10px]
                                    lg:rounded-b-[25px] lg:px-[20px] lg:py-[10px]
                                    md:rounded-b-[25px] md:px-[20px] md:py-[10px]   rounded-b-[25px] px-[20px] py-[10px]
                                    
                                    bg-white bg-opacity-30 flex justify-between 
                                    ">
                                        <div>
                                            <Link to="/PortFolioVideoGraphyFirst"><p className="2xl:text-[25px] 2xl:leading-[30px] xl:text-[20px] xl:leading-[24px] cursor-pointer">Play Now</p></Link>
                                        </div>
                                        <div className="flex ">
                                            <Link to="/PortFolioVideoGraphyFirst" ><p><FaArrowRightLong className="text-[28px]  cursor-pointer"></FaArrowRightLong></p></Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* ----------------------right Side content --------------------------------- */}
                        <div className="2xl:ml-[68px] lg:w-[48%] md:w-[48%]">
                        <div className=" 2xl:mb-[68px] 2xl:w-[776px] 2xl:h-[1053px]  
                            xl:w-[578px] xl:h-[814px] xl:mb-[50px] lg:mb-[40px] md:mb-[25px] mb-[20px]

                            relative group">

                                <img src="/videoL1.png" className="w-full h-full object-cover xl:rounded-[25px]" alt="" />


                                <div className="w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <div className=" 
                                    2xl:w-[776px] 2xl:py-[20px]  2xl:rounded-b-[50px] 2xl:px-[40px] 
                                    xl:w-[578px] xl:rounded-b-[25px] xl:px-[30px] xl:py-[10px]
                                    lg:rounded-b-[25px] lg:px-[20px] lg:py-[10px]
                                    md:rounded-b-[25px] md:px-[20px] md:py-[10px]   rounded-b-[25px] px-[20px] py-[10px]
                                    
                                    bg-white bg-opacity-30 flex justify-between 
                                    ">
                                        <div>
                                            <Link to="/PortFolioVideoGraphyFirst"><p className="2xl:text-[25px] 2xl:leading-[30px] xl:text-[20px] xl:leading-[24px] cursor-pointer">Play Now</p></Link>
                                        </div>
                                        <div className="flex ">
                                            <Link to="/PortFolioVideoGraphyFirst" ><p><FaArrowRightLong className="text-[28px]  cursor-pointer"></FaArrowRightLong></p></Link>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ----------------Right card two -------------------- */}
                           
                            <div className=" 2xl:mb-[68px] 2xl:w-[776px] 2xl:h-[675px]  
                            xl:w-[578px] xl:h-[502px] xl:mb-[50px] lg:mb-[40px] md:mb-[25px] mb-[20px]

                            relative group">

                                <img src="/videoGraphyRight2.png" className="w-full h-full object-cover xl:rounded-[25px]" alt="" />


                                <div className="w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <div className=" 
                                    2xl:w-[776px] 2xl:py-[20px]  2xl:rounded-b-[50px] 2xl:px-[40px] 
                                    xl:w-[578px] xl:rounded-b-[25px] xl:px-[30px] xl:py-[10px]
                                    lg:rounded-b-[25px] lg:px-[20px] lg:py-[10px]
                                    md:rounded-b-[25px] md:px-[20px] md:py-[10px]   rounded-b-[25px] px-[20px] py-[10px]
                                    
                                    bg-white bg-opacity-30 flex justify-between 
                                    ">
                                        <div>
                                            <Link to="/PortFolioVideoGraphyFirst"><p className="2xl:text-[25px] 2xl:leading-[30px] xl:text-[20px] xl:leading-[24px] cursor-pointer">Play Now</p></Link>
                                        </div>
                                        <div className="flex ">
                                            <Link to="/PortFolioVideoGraphyFirst" ><p><FaArrowRightLong className="text-[28px]  cursor-pointer"></FaArrowRightLong></p></Link>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* ---------------right Card three */}
                            <div className=" 2xl:mb-[68px] 2xl:w-[776px] 2xl:h-[496px]  
                            xl:w-[578px] xl:h-[369px] 
                            md:h-[260px]

                            relative group">

                                <img src="/videoGraphyRight3.png" className="w-full h-full object-cover xl:rounded-[25px] md:rounded-[25px]" alt="" />


                                <div className="w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <div className=" 
                                    2xl:w-[776px] 2xl:py-[20px]  2xl:rounded-b-[50px] 2xl:px-[40px] 
                                    xl:w-[578px] xl:rounded-b-[25px] xl:px-[30px] xl:py-[10px]
                                    lg:rounded-b-[25px] lg:px-[20px] lg:py-[10px]
                                    md:rounded-b-[25px] md:px-[20px] md:py-[10px]   rounded-b-[25px] px-[20px] py-[10px]
                                    
                                    bg-white bg-opacity-30 flex justify-between 
                                    ">
                                        <div>
                                            <Link to="/PortFolioVideoGraphyFirst"><p className="2xl:text-[25px] 2xl:leading-[30px] xl:text-[20px] xl:leading-[24px] cursor-pointer">Play Now</p></Link>
                                        </div>
                                        <div className="flex ">
                                            <Link to="/PortFolioVideoGraphyFirst" ><p><FaArrowRightLong className="text-[28px]  cursor-pointer"></FaArrowRightLong></p></Link>

                                        </div>
                                    </div>
                                </div>
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

export default PortFolioVideography;