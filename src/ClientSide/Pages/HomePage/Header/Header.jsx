
import headerLogo from "/headerLogo.png"
// import social icons
import fb from "/fb.png";
import instra from "/instra.png";
import youtube from "/youtube.png"
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";

import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false)
    }
    return (
        <div className=" bg-[url('/heroSection.png')] bg-no-repeat bg-top-center w-[100%] 
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
                        <RouterLink to="/"><img className="w-full h-full cursor-pointer" src={headerLogo} alt="logo" /></RouterLink>
                    </div>

                    {/*-------------- Desktop Header Menu --------------- */}
                    <div className='hidden md:block lg:block xl:block 2xl:block'>
                        <ul className="headMenuLeftRight  z-auto  ">
                            <ScrollLink to="/"> <li className="desktopMenu   ">HOME</li> </ScrollLink>
                            <ScrollLink to='OurServices' smooth={true} duration={500}> <li className="desktopMenu">SERVICES</li> </ScrollLink>
                            <ScrollLink to="aboutUsSection" smooth={true} duration={600} > <li className=" desktopMenu">ABOUT</li> </ScrollLink>
                            <ScrollLink to="portfolio" smooth={true} duration={700}> <li className="desktopMenu ">PORTFOLIO</li> </ScrollLink>
                            <RouterLink to="/blogs" > <li className=" desktopMenu">BLOG</li> </RouterLink>
                            <ScrollLink to='footer' smooth={true} duration={1000}> <li className="cursor-pointer"> CONTACT</li> </ScrollLink>
                        </ul>
                    </div>
                    {/* -----------------------Mobile Header Menu ------------------  */}


                    <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
                        <button onClick={toggleMenu}><SlMenu className='text-[25px]'></SlMenu></button>
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
                                            <ScrollLink to="/">
                                                <li>HOME</li>
                                            </ScrollLink>
                                            <ScrollLink to='OurServices' smooth={true} duration={500}>
                                                <li >SERVICES</li>
                                            </ScrollLink>
                                            <ScrollLink to="aboutUsSection" smooth={true} duration={600} >
                                                <li >ABOUT</li>
                                            </ScrollLink>
                                            <ScrollLink to="portfolio" smooth={true} duration={700}>
                                                <li >PORTFOLIO</li>
                                            </ScrollLink>
                                            <RouterLink to="blog" smooth={true} duration={800}>
                                                <li >BLOG</li>
                                            </RouterLink>
                                            <ScrollLink to='footer' smooth={true} duration={1000}>
                                                <li className="cursor-pointer"> CONTACT</li>
                                            </ScrollLink>
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

            {/* Desktop Brand Logo Center */}
            <div className="absolute inset-x-0 top-[40%] md:top-[60%] lg:top-[60%] xl:top-[60%] 2xl:top-[60%] transform -translate-y-1/2 flex justify-center" >
                <div className='text-center'>
                    <img

                        className="2xl:w-auto xl:w-[650px] w-[250px] h-auto md:w-[600px] md:h-auto lg:w-[650px] lg:h-auto 2xl:h-[90px] xl:h-auto mx-auto object-cover"
                        src="/brandLogo.png"
                        alt="brand Logo" />
                    <p className='text-center heroSectionPara'>We combine artistry with strategy, creating digital solutions <br /> that are not only beautiful but also effective.</p>

                    {/* =====for mobile ======= */}
                    <p className='text-center heroSectionParaMobile'>We combine artistry with strategy, creating digital solutions  that are not only beautiful but also effective.</p>
                    <button className="headerHireBtn">Hire Us</button>
                </div>
            </div>


        </div>


    );
};

export default Header;