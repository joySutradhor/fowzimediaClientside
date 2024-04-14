import { Link } from "react-router-dom";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import TrustedBy from "../HomePage/TrustedBy/TrustedBy";
import Footer from "../Shared/Footer/Footer";
import OurTeam from "./OurTeam";
import headerLogo from "/headerLogo.png"
// import social icons
import fb from "/fb.png";
import instra from "/instra.png";
import youtube from "/youtube.png"
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";

import { Fade } from 'react-awesome-reveal';
import { useState } from "react";



const AboutUsPage = () => {
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

            <div className="bg-[#111111] 2xl:mt-[-100px]  2xl:rounded-t-[50px]
            xl:mt-[-50px] xl:rounded-t-[50px] 
            lg:mt-[-50px] lg:rounded-t-[50px] 
            md:mt-[-50px] md:rounded-t-[50px] 
           
            
            ">
                <div >
                    <div className="2xl:px-[150px] 2xl:pt-[50px] 
                    xl:px-[80px] xl:pt-[40px] 
                    lg:pt-[40px] lg:px-[70px]
                    md:pt-[40px] md:px-[50px]
                    pt-[40px] px-[20px]
                     text-white">
                        <p className="pageTitle">Home . About us</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2
                         grid-cols-1 justify-between 
                        
                        
                        2xl:gap-[50px] xl:gap-[40px] lg:gap-[30px] md:gap-[25px] ">
                            <div className="titleHiddenFromLarge">
                                        <h2 className="titleSubHeading 2xl:pb-[25px] xl:pb-[20px] lg:pb-[20px] md:pb-[15px] pb-[15px]">About Us</h2>
                                    </div>
                            <div className="order-2 md:order-1 xl:order-1 lg:order-1 2xl:order-1">
                                <div className=" lg:text-justify xl:text-justify 2xl:text-justify ">
                                    <div className="titleHiddenMobile">
                                        <h2 className="titleSubHeading 2xl:pb-[25px] xl:pb-[20px] lg:pb-[20px] md:pb-[15px] pb-[15px]">About Us</h2>
                                    </div>
                                    <p className="2xl:pb-[50px]  2xl:text-[18px] 2xl:pt-0
                                font-glacialBase 
                                xl:text-[16px] xl:leading-[18px] xl:pb-[40px] xl:pt-0
                                lg:text-[16px] lg:leading-[18px] lg:pb-[40px] lg:pt-0
                                md:text-[16px] md:leading-[18px] md:pb-[30px] md:pt-0
                                text-[14px] leading-[21px] pb-[20px] pt-[20px]
                                
                                "><span className="font-glaCailBold text-[#FF0000]">Fowzi Media</span> - Where Creativity Meets Digital Excellence. Born from a passion for storytelling and a commitment to innovation, Fowzi Media is dedicated to transforming your digital presence. We specialize in branding, web design, and videography, creating compelling content that captivates and communicates with your audience.</p>
                                    <h2 className="aboutParaHeading">Our Philosophy :</h2>
                                    <p className="aboutUsText">We believe in the power of unique stories and digital creativity. Our mission is to empower businesses and non-profits to share their vision, breaking barriers and making meaningful connections.</p>
                                    <h2 className="aboutParaHeading">Our Services:</h2>
                                    <p className="aboutUsText">
                                        Tailored to elevate your brand, our services range from visually stunning websites and resonant brand identities to storytelling videos. Each project is crafted to meet your specific needs, ensuring impactful communication with your target audience.
                                    </p>

                                    <div className="hidden lg:block xl:block 2xl:block">

                                        <h2 className="aboutParaHeading ">Why Choose Us dfgfdgf?</h2>
                                        <p className="aboutUsText">
                                            Combining artistry with strategy, we create digital solutions that are beautiful and effective. Our hands-on, collaborative approach is driven by results, supporting your journey from concept to creation, ensuring every step is seamless and transformative.
                                        </p>
                                    </div>

                                    {/* ----------- hidden items for mobile , md and lg devicess */}
                                    <div className="aboutHiddenItems">


                                        <h2 className="aboutParaHeading" >Join Us :</h2>
                                        <p className="aboutUsText 2xl:pb-0 xl:pb-0">
                                            Embark on a digital adventure that takes your story beyond the ordinary. With Fowzi Media, your story is just the beginning. Discover the future of digital media with us.
                                        </p>

                                    </div>

                                </div>
                            </div>


                            <div className="order-1 md:order-2 xl:order-2 lg:order-2 2xl:order-2">
                                <div className="2xl:mt-[15px] xl:mt-[15px]  ">
                                    <div className="aboutImgparent">
                                        <img className="w-full h-full  object-cover rounded-[25px]" src="/aboutSideImg.png" alt="" />
                                    </div>
                                    <div className="bg-white 2xl:rounded-[40px] 2xl:mt-[50px] 
                                xl:mt-[40px] xl:rounded-[25px]
                                 lg:mt-[35px] lg:rounded-[20px]  
                                 md:mt-[25px] md:rounded-[20px]
                                 mt-[20px] rounded-[15px] ">
                                        <div className="flex ">
                                            <div className="aboutParent">
                                                <div className=" aboutChildParent ">
                                                    <div className="childContent ">
                                                        <h3 className="childHeading">10.5+</h3>
                                                        <p className="childText">Years Experience</p>
                                                    </div>
                                                </div>
                                                <div className=" aboutChildParent ">
                                                    <div className="childContent">
                                                        <h3 className="childHeading">30+</h3>
                                                        <p className="childText">Project Challenge</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex ">
                                            <div className="aboutParent 
                                        2xl:pt-0 2xl:pb-[30px]
                                        xl:pt-0 xl:pb-[20px] 
                                        lg:pt-0 lg:pb-[20px] 
                                        pt-0 pb-[15px] 
                                        
                                        ">
                                                <div className=" aboutChildParent ">
                                                    <div className="childContent ">
                                                        <h3 className="childHeading">4.5k+</h3>
                                                        <p className="childText">Positive Review</p>
                                                    </div>
                                                </div>
                                                <div className=" aboutChildParent ">
                                                    <div className="childContent">
                                                        <h3 className="childHeading">25+</h3>
                                                        <p className="childText">Award</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <div>
                            {/* ----------- hidden items for large devices xl, 2xl devicess */}
                            <div className="aboutShowItemsMobile">

                                <div className="aboutCommonItems">
                                    <h2 className="aboutParaHeading">Why Choose Us ?</h2>
                                    <p className="aboutUsText">
                                        Combining artistry with strategy, we create digital solutions that are beautiful and effective. Our hands-on, collaborative approach is driven by results, supporting your journey from concept to creation, ensuring every step is seamless and transformative.
                                    </p>
                                </div>

                                <h2 className="aboutParaHeading" >Join Us :</h2>
                                <p className="aboutUsText 2xl:pb-0 xl:pb-0">
                                    Embark on a digital adventure that takes your story beyond the ordinary. With Fowzi Media, your story is just the beginning. Discover the future of digital media with us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*------------ our team Section--------- */}
                <OurTeam></OurTeam>
                <div className="">
                    <TrustedBy></TrustedBy>
                    <div className="2xl:pb-[200px] xl:pb-[180px] lg:pb-[150px] md:pb-[100px] pb-[60px]">
                        <Testimonial></Testimonial>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;