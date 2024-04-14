
import headerLogo from "/headerLogo.png"
// import social icons
import fb from "/fb.png";
import instra from "/instra.png";
import youtube from "/youtube.png"
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";

import { Fade } from 'react-awesome-reveal';
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Testimonial from "../../HomePage/Testimonial/Testimonial";


const SinglePortFolioBranding = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <div>
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
            </div>

            <div className="bg-[#111111] 2xl:mt-[-100px] 2xl:rounded-t-[50px] xl:mt-[-50px] xl:rounded-t-[50px]
            lg:mt-[-50px] lg:rounded-t-[50px]
            ">
                <div className="brandigParent">
                    <p className="pageTitle">Home . Portfolio . Branding</p>
                    <h3 className="titleSubHeading">Friday Fashion</h3>
                    <div className="singleImgParent">
                        <img className="h-full w-full object-cover xl:rounded-[30px] 2xl:rounded-[30px] lg:rounded-[25px] md:rounded-[20px] rounded-[15px]" src="/induvisual.png" alt="" />
                    </div>
                    <div>
                        <h3 className="titleSubHeading 2xl:mt-[200px] xl:mt-[180px] lg:mt-[150px] md:mt-[100px] mt-[60px]">Project Description</h3>

                        <p className="singleBrandPara">Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.</p>
                        <p className="singleBrandPara">
                            our website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.
                        </p>
                    </div>
                    <div>
                        <h3 className="titleSubHeading 2xl:pt-[200px] xl:pt-[180px] lg:pt-[150px] md:pt-[100px]
                        pt-[60px] ">Color/Typography</h3>
                        <h4 className="primaryTextBranding">Primary font</h4>
                        <p className="forntLink">https://fonts.adobe.com/fonts/retiro</p>
                    </div>
                    <div className="SingleBrandingImg">
                        <img className=" h-full w-full" src="/fontImg.png" alt="" />
                    </div>
                    <div>
                        <h3 className="titleSubHeading 2xl:pt-[200px] xl:pt-[180px] lg:pt-[150px] md:pt-[100px]
                        pt-[60px] "> Project MockUp </h3>

                        <div className="grid grid-cols-2 2xl:gap-[50px] xl:gap-[40px] lg:gap-[30px] md:gap-[25px] gap-[20px] ">

                            {/* left side card  */}
                            <div className=" 2xl:space-y-[50px] xl:space-y-[40px] lg:space-y-[30px] md:space-y-[25px] space-y-[25px] ">
                                <div className="projetImgOne">
                                    <img className="w-full  h-full 2xl:rounded-[30px] xl:rounded-[25px] lg:rounded-[20px] md:rounded-[15px] rounded-[10px] object-cover" src="/projectOne.jpeg" alt="" />
                                </div>




                                <div className="projetImgOne">
                                    <img className="w-full  h-full 2xl:rounded-[30px] xl:rounded-[25px] lg:rounded-[20px] md:rounded-[15px] rounded-[10px] object-cover" src="/projectThree.jpeg" alt="" />
                                </div>

                                <div className="projetImgOne">
                                    <img className="w-full  h-full 2xl:rounded-[30px] xl:rounded-[25px] lg:rounded-[20px] md:rounded-[15px] rounded-[10px] object-cover" src="/projectFive.jpeg" alt="" />
                                </div>
                            </div>

                            {/* Rihgt side Card */}

                            <div className="2xl:space-y-[50px] xl:space-y-[40px] lg:space-y-[30px] md:space-y-[25px] space-y-[25px]  ">
                                <div className="projetImgTwo">
                                    <img className="w-full  h-full 2xl:rounded-[30px] xl:rounded-[25px] lg:rounded-[20px] md:rounded-[15px] rounded-[10px] object-cover" src="/projectTwo.jpeg" alt="" />
                                </div>
                                <div className="projetImgOne">
                                    <img className="w-full  h-full 2xl:rounded-[30px] xl:rounded-[25px] lg:rounded-[20px] md:rounded-[15px] rounded-[10px] object-cover" src="/projectFour.jpeg" alt="" />
                                </div>
                                <div className="projetImgOne">
                                    <img className="w-full  h-full 2xl:rounded-[30px] xl:rounded-[25px] lg:rounded-[20px] md:rounded-[15px] rounded-[10px] object-cover" src="/projectSix.jpeg" alt="" />
                                </div>
                            </div>



                        </div>



                    </div>
                </div>
                        {/* --------------our Process Section --------------- */}

                        <div className="text-white leftRight ">
                            <h4 className="titleSubHeading">Our Process</h4>
                            <div className="processParent">

                                <div className="brandingNumberParent">
                                    <div >
                                        <div className="brandingNumber" >01</div>
                                    </div>
                                    <div>
                                        <h4 className="processHeading">Consultation :</h4>
                                        <p className="processPara">We start with a consultation to understand your needs, vision, and ideas for your photography project.</p>
                                    </div>
                                </div>
                                <div className="brandingNumberParent">
                                    <div >
                                        <div className="brandingNumber" >02</div>
                                    </div>
                                    <div>
                                        <h4 className="processHeading">Planning & Concept Development :</h4>
                                        <p className="processPara">Our team will work with you to develop a detailed plan and concept for your photography session, outlining the key shots, locations, and styling.</p>
                                    </div>
                                </div>
                                <div className="brandingNumberParent">
                                    <div >
                                        <div className="brandingNumber" >03</div>
                                    </div>
                                    <div>
                                        <h4 className="processHeading">Photography Session :</h4>
                                        <p className="processPara">We'll handle all aspects of the photography session, including lighting, composition, and directing, to ensure we capture the perfect shots.</p>
                                    </div>
                                </div>
                                <div className="brandingNumberParent">
                                    <div >
                                        <div className="brandingNumber" >04</div>
                                    </div>
                                    <div>
                                        <h4 className="processHeading">Editing & Retouching:</h4>
                                        <p className="processPara">Our skilled editors will enhance and retouch the photos as needed to ensure they meet your quality standards and brand guidelines.</p>
                                    </div>
                                </div>
                                <div className="brandingNumberParent">
                                    <div >
                                        <div className="brandingNumber" >05</div>
                                    </div>
                                    <div>
                                        <h4 className="processHeading">Review & Revisions :</h4>
                                        <p className="processPara">We'll share the draft of the photos for your feedback and make any necessary revisions to ensure they meet your expectations.</p>
                                    </div>
                                </div>
                                <div className="brandingNumberParent">
                                    <div >
                                        <div className="brandingNumber" >06</div>
                                    </div>
                                    <div>
                                        <h4 className="processHeading">Delivery :</h4>
                                        <p className="processPara">Once approved, we'll deliver the final photos in the format of your choice, ready to be used for your website, social media, marketing materials, and more.</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* Testimonial Sections  */}
                        <div >
                            <Testimonial></Testimonial>
                        </div>

                        {/* Call to action sections */}

                        <div className="
            leftRight
            2xl:pb-[200px] 2xl:pt-[200px]
            xl:pb-[180px] xl:pt-[180px]
            lg:pb-[150px] lg:pt-[150px]
            md:pb-[100px] md:pt-[100px]
            pt-[60px] pb-[60px] 

        ">

                            <div className=" 
            2xl:rounded-[30px] 2xl:h-[400px] 
            xl:rounded-[30px] xl:h-[300px] 
            lg:rounded-[25px] lg:h-[200px]
            md:rounded-[20px] md:h-[180px]
            rounded-[15px] 
            
            bg-gradient-to-r from-white to-transparent   p-[1px]
            ">
                                <div className="
               2xl:rounded-[30px]
               xl:rounded-[30px]
               lg:rounded-[25px]
               md:rounded-[20px]
               rounded-[15px]
                text-white bg-black relative h-full w-full  "
                                >
                                    <div className=" h-full w-full">
                                        <div className="text-center md:text-left lg:text-left xl:text-left 2xl:text-left  px-[15px] md:px-0 lg:px-0 xl:px-0 2xl:px-0  md:flex lg:flex xl:flex 2xl:flex justify-center items-center h-full w-full">
                                            <div className="
                            2xl:max-w-[520px] 2xl:mr-[180px]
                            xl:max-w-[550px] xl:mr-[120px] 
                            lg:max-w-[400px] lg:mr-[100px]
                            md:max-w-[400px] md:mr-[80px]
                        ">
                                                <h2 className="ctaHeading">Ready to Bring Your Vision to Life?</h2>
                                                <p className="ctaPara">Don't settle for mediocre video content. Partner with Fowzi Media and unleash the power of professional videography to elevate your brand. Schedule a consultation today and let's create something extraordinary together.</p>
                                            </div>
                                            <div className="ctaBtnParent">
                                                <button className="ctaBtn">Reveal Price</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                {/* ================= Footer ============== */}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default SinglePortFolioBranding;