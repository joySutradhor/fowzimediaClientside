
import headerLogo from "/headerLogo.png"
// import social icons
import fb from "/fb.png";
import instra from "/instra.png";
import youtube from "/youtube.png"
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";

import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Footer from "../Shared/Footer/Footer";
import { BsThreeDotsVertical } from "react-icons/bs";
import blog1 from "/blogImg1.webp"
import blog2 from "/blogImg2.webp"
import blog3 from "/blogImg3.webp"
import profile from "/profile.png"


const BlogMainPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false)
    }


    const [popUp, setPopUp] = useState(false)


    const adjustTextareaHeight = (element) => {
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight}px`;
    };

    const handleDescriptionChange = (e) => {

        adjustTextareaHeight(e.target);
    };

    const revealPrice = () => {
        setPopUp(true);
    }

    const closePopUp = () => {
        setPopUp(false);
    }
    return (
        <div>
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

           


        </div>

        <div className="bg-[#111111] 2xl:mt-[-100px] 2xl:rounded-t-[50px] 
            xl:mt-[-50px] xl:rounded-t-[50px]
            lg:mt-[-50px] lg:rounded-t-[50px]
            md:mt-[-50px] md:rounded-t-[50px]

             ">
                
                <div className="leftRight 2xl:pb-[200px] xl:pb-[180px] lg:pb-[150px] md:pb-[100px] pb-[60px]">
                    <h3 className="titleSubHeading ">Blog</h3>
                    <div className=" grid 
                    md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3
                    2xl:gap-y-[50px] xl:gap-y-[40px] lg:gap-y-[30px] md:gap-y-[25px] 
                      justify-between ">
                    <Link >
                        <div

                        // 2xl:bg-[url('/largeBorder.png')] xl:bg-[url('/mdBlogBorder.png')] 

                            className="  2xl:w-[494px]  2xl:mr-[55px] 2xl:mb-0
                            xl:w-[368.06px]  xl:mb-0
                            mb-[40px]
                            lg:mr-[30px]
                            md:mr-[15px]
                           border rounded-[15px] ">

                            <img className="blogImg" src={blog1} alt="" />

                            <div
                                className="2xl:px-[15px] 2xl:pt-[25px] 2xl:pb-[25px]
                                xl:px-[11px] xl:pt-[19px] xl:pb-[19px]
                                px-[5px] pt-[10px] pb-[10px]
                                flex justify-between items-center">
                                <div className="flex items-center">
                                    <div>
                                        <img className="xl:h-[25px] xl:w-[25px] h-[30px] w-[30px] object-cover" src={profile} alt="" />
                                    </div>
                                    <div className="2xl:ml-[10px] xl:ml-[7.24px] ml-[10px]">
                                        <h3 className="blogUserTitle">Hossen Noor</h3>
                                        <h3 className="blogDate">Dec 28, 2022</h3>
                                    </div>
                                </div>
                                <div>
                                    <p><BsThreeDotsVertical className="text-white"></BsThreeDotsVertical></p>
                                </div>
                            </div>
                            <p className="blogHeading">The Importance of Using Video to Market Your Products or Services</p>
                            <p className="blogPara">
                                Video is an increasingly important tool for businesses looking to market themselves effectively in today digital world.. <span className="font-glaCailBold underline underline-offset-2">read more</span>
                            </p>
                           
                        </div>
                    </Link>

                    {/* card two */}
                    <Link >
                    <div
                            className="   2xl:w-[494px]    2xl:mr-[55px] 2xl:mb-0
                            xl:w-[368.06px]  xl:mb-0
                            mb-[40px]
                            lg:mr-[30px]
                            md:mr-[15px]
                            border rounded-[15px]
                            object-cover bg-no-repeat">

                            <img className="blogImg" src={blog2} alt="" />

                            <div
                                className="2xl:px-[15px] 2xl:pt-[25px] 2xl:pb-[25px]
                                xl:px-[11px] xl:pt-[19px] xl:pb-[19px]
                                px-[5px] pt-[10px] pb-[10px]
                                flex justify-between items-center">
                                <div className="flex items-center">
                                    <div>
                                        <img className="xl:h-[25px] xl:w-[25px] h-[30px] w-[30px] object-cover" src={profile} alt="" />
                                    </div>
                                    <div className="2xl:ml-[10px] xl:ml-[7.24px] ml-[10px]">
                                        <h3 className="blogUserTitle">Hossen Noor</h3>
                                        <h3 className="blogDate">Dec 28, 2022</h3>
                                    </div>
                                </div>
                                <div>
                                    <p><BsThreeDotsVertical className="text-white"></BsThreeDotsVertical></p>
                                </div>
                            </div>
                            <p className="blogHeading">The Importance of Using Video to Market Your Products or Services</p>
                            <p className="blogPara">
                                Video is an increasingly important tool for businesses looking to market themselves effectively in today digital world.. <span className="font-glaCailBold underline underline-offset-2">read more</span>
                            </p>
                            
                        </div>
                    </Link>

                    {/* card three */}
                    <Link >
                    <div
                            className="   2xl:w-[494px]    2xl:mr-[55px] 2xl:mb-0
                            xl:w-[368.06px]  xl:mb-0 lg:mb-0 md:mb-0 mb-[40px]

                            border rounded-[15px]
                            object-cover bg-no-repeat">

                            <img className="blogImg" src={blog3} alt="" />

                            <div
                                className="2xl:px-[15px] 2xl:pt-[25px] 2xl:pb-[25px]
                                xl:px-[11px] xl:pt-[19px] xl:pb-[19px]
                                px-[5px] pt-[10px] pb-[10px]
                                flex justify-between items-center">
                                <div className="flex items-center">
                                    <div>
                                        <img className="xl:h-[25px] xl:w-[25px] h-[30px] w-[30px] object-cover" src={profile} alt="" />
                                    </div>
                                    <div className="2xl:ml-[10px] xl:ml-[7.24px] ml-[10px]">
                                        <h3 className="blogUserTitle">Hossen Noor</h3>
                                        <h3 className="blogDate">Dec 28, 2022</h3>
                                    </div>
                                </div>
                                <div>
                                    <p><BsThreeDotsVertical className="text-white"></BsThreeDotsVertical></p>
                                </div>
                            </div>
                            <p className="blogHeading">The Importance of Using Video to Market Your Products or Services</p>
                            <p className="blogPara">
                                Video is an increasingly important tool for businesses looking to market themselves effectively in today digital world.. <span className="font-glaCailBold underline underline-offset-2">read more</span>
                            </p>
                          
                        </div>
                    </Link>

                    <Link >
                        <div

                        // 2xl:bg-[url('/largeBorder.png')] xl:bg-[url('/mdBlogBorder.png')] 

                            className="  2xl:w-[494px]  2xl:mr-[55px] 2xl:mb-0
                            xl:w-[368.06px]  xl:mb-0
                            mb-[40px]
                            lg:mr-[30px]
                            md:mr-[15px]
                           border rounded-[15px] ">

                            <img className="blogImg" src={blog1} alt="" />

                            <div
                                className="2xl:px-[15px] 2xl:pt-[25px] 2xl:pb-[25px]
                                xl:px-[11px] xl:pt-[19px] xl:pb-[19px]
                                px-[5px] pt-[10px] pb-[10px]
                                flex justify-between items-center">
                                <div className="flex items-center">
                                    <div>
                                        <img className="xl:h-[25px] xl:w-[25px] h-[30px] w-[30px] object-cover" src={profile} alt="" />
                                    </div>
                                    <div className="2xl:ml-[10px] xl:ml-[7.24px] ml-[10px]">
                                        <h3 className="blogUserTitle">Hossen Noor</h3>
                                        <h3 className="blogDate">Dec 28, 2022</h3>
                                    </div>
                                </div>
                                <div>
                                    <p><BsThreeDotsVertical className="text-white"></BsThreeDotsVertical></p>
                                </div>
                            </div>
                            <p className="blogHeading">The Importance of Using Video to Market Your Products or Services</p>
                            <p className="blogPara">
                                Video is an increasingly important tool for businesses looking to market themselves effectively in today digital world.. <span className="font-glaCailBold underline underline-offset-2">read more</span>
                            </p>
                           
                        </div>
                    </Link>

                    {/* card two */}
                    <Link >
                    <div
                            className="   2xl:w-[494px]    2xl:mr-[55px] 2xl:mb-0
                            xl:w-[368.06px]  xl:mb-0
                            mb-[40px]
                            lg:mr-[30px]
                            md:mr-[15px]
                            border rounded-[15px]
                            object-cover bg-no-repeat">

                            <img className="blogImg" src={blog2} alt="" />

                            <div
                                className="2xl:px-[15px] 2xl:pt-[25px] 2xl:pb-[25px]
                                xl:px-[11px] xl:pt-[19px] xl:pb-[19px]
                                px-[5px] pt-[10px] pb-[10px]
                                flex justify-between items-center">
                                <div className="flex items-center">
                                    <div>
                                        <img className="xl:h-[25px] xl:w-[25px] h-[30px] w-[30px] object-cover" src={profile} alt="" />
                                    </div>
                                    <div className="2xl:ml-[10px] xl:ml-[7.24px] ml-[10px]">
                                        <h3 className="blogUserTitle">Hossen Noor</h3>
                                        <h3 className="blogDate">Dec 28, 2022</h3>
                                    </div>
                                </div>
                                <div>
                                    <p><BsThreeDotsVertical className="text-white"></BsThreeDotsVertical></p>
                                </div>
                            </div>
                            <p className="blogHeading">The Importance of Using Video to Market Your Products or Services</p>
                            <p className="blogPara">
                                Video is an increasingly important tool for businesses looking to market themselves effectively in today digital world.. <span className="font-glaCailBold underline underline-offset-2">read more</span>
                            </p>
                            
                        </div>
                    </Link>

                    {/* card three */}
                    <Link >
                    <div
                            className="   2xl:w-[494px]    2xl:mr-[55px] 2xl:mb-0
                            xl:w-[368.06px]  xl:mb-0

                            border rounded-[15px]
                            object-cover bg-no-repeat">

                            <img className="blogImg" src={blog3} alt="" />

                            <div
                                className="2xl:px-[15px] 2xl:pt-[25px] 2xl:pb-[25px]
                                xl:px-[11px] xl:pt-[19px] xl:pb-[19px]
                                px-[5px] pt-[10px] pb-[10px]
                                flex justify-between items-center">
                                <div className="flex items-center">
                                    <div>
                                        <img className="xl:h-[25px] xl:w-[25px] h-[30px] w-[30px] object-cover" src={profile} alt="" />
                                    </div>
                                    <div className="2xl:ml-[10px] xl:ml-[7.24px] ml-[10px]">
                                        <h3 className="blogUserTitle">Hossen Noor</h3>
                                        <h3 className="blogDate">Dec 28, 2022</h3>
                                    </div>
                                </div>
                                <div>
                                    <p><BsThreeDotsVertical className="text-white"></BsThreeDotsVertical></p>
                                </div>
                            </div>
                            <p className="blogHeading">The Importance of Using Video to Market Your Products or Services</p>
                            <p className="blogPara">
                                Video is an increasingly important tool for businesses looking to market themselves effectively in today digital world.. <span className="font-glaCailBold underline underline-offset-2">read more</span>
                            </p>
                          
                        </div>
                    </Link>
                </div>
                </div>


                 {/* -----------Call to Action Section ------------ */}

                 <div className="
            leftRight 
            2xl:pb-[200px] 2xl:pt-0
            xl:pb-[180px] xl:pt-0
            lg:pb-[150px] lg:pt-0
            md:pb-[100px]  md:pt-0
            pb-[60px] pt-0

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
                                        <button className="ctaBtn" onClick={revealPrice}>Reveal Price</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                 {/* --- cantact PopUp section -------- */}
            {
                popUp && <>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" aria-hidden="true" ></div>
                            <div className="relative bg-gray-700 rounded-sm w-[90%] md:w-[70%] lg:w-[70%] xl:w-[40%] 2xl:w-[50%]  overflow-hidden shadow-md transform transition-all  ">
                                <div className="px-6 py-4">

                                    <div className="flex justify-between items-start">
                                        <div className="text-lg text-gray-300 font-semibold mb-4 ">
                                            <h2 className="text-lg text-gray-300 font-semibold">Contact Now</h2>
                                            <p className="text-[12px] text-gray-300"></p>
                                        </div>
                                        <button className="text-md text-gray-300 py-2 rounded-md focus:outline-none font-semibold hover:text-red-600" onClick={closePopUp} >Close</button>
                                    </div>

                                    <div className=' grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]'>
                                        <input
                                            type="text"
                                            placeholder='Enter Your First Name'


                                            className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                                        />
                                        <input
                                            type="text"
                                            placeholder='Enter Your Last Name'


                                            className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                                        />

                                    </div>
                                    <div className=' grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]'>
                                        <input
                                            type="text"
                                            placeholder='Enter Your Company Name'


                                            className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                                        />
                                        <input
                                            type="text"
                                            placeholder='Enter Your Adreess '


                                            className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                                        />

                                    </div>
                                    <div className="grid grid-cols-1 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]">
                                        <textarea

                                            onChange={handleDescriptionChange}
                                            className='text-[14px] rounded-sm bg-transparent outline-none border border-gray-500 py-2 px-2 text-gray-300 resize-none overflow-hidden'
                                            placeholder='Ask a question ....'
                                            rows={2}
                                            style={{ minHeight: '3rem', maxHeight: '10rem' }}
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="px-2 py-4 bg-gray-700 flex md:justify-end lg:justify-end xl:justify-end 2xl:justify-end justify-center">
                                    <div>
                                        <button className="text-md py-2 px-4 rounded-md focus:outline-none text-green-500 font-semibold" >Submit</button>
                                        <button className="text-md py-2 px-4 rounded-md focus:outline-none text-red-500 font-semibold" onClick={closePopUp} >Cancel</button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </>
            }
                {/* footer section */}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default BlogMainPage;