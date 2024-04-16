
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


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [showContact , setShowContact] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false)
    }



    // for hire us button
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

    // For contact button functions

    const adjustTextareaHeightContact = (element) => {
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight}px`;
    };

    const handleDescriptionChangeContact = (e) => {

        adjustTextareaHeightContact(e.target);
    };

    const contactBtn = () => {
        setShowContact(true);
    }
    const closeContactForm = ()=> {
        setShowContact(false)
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
                            <ScrollLink to="/"> <li className="desktopMenu">SERVICES</li> </ScrollLink>
                            <ScrollLink to="/" > <li className=" desktopMenu">ABOUT</li> </ScrollLink>
                            <ScrollLink to="/"> <li className="desktopMenu ">PORTFOLIO</li> </ScrollLink>
                            <RouterLink to="/blogs" > <li className=" desktopMenu">CASE STUDIES</li> </RouterLink>
                            <ScrollLink to="/"> <li className="cursor-pointer" onClick={contactBtn}> CONTACT</li> </ScrollLink>
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
                                            <ScrollLink to="/">
                                                <li >SERVICES</li>
                                            </ScrollLink>
                                            <ScrollLink to="/" >
                                                <li >ABOUT</li>
                                            </ScrollLink>
                                            <ScrollLink to="/">
                                                <li >PORTFOLIO</li>
                                            </ScrollLink>
                                            <RouterLink to="/">
                                                <li >BLOG</li>
                                            </RouterLink>
                                            <ScrollLink to="/">
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
                            <Link to='https://www.facebook.com/fowzimedia' target="_blank">
                                <img className="w-full h-full " src={fb} alt="" />
                            </Link>
                            </div>

                            {/* -------instragram ---------- */}
                            <div className="
                        2xl:h-[25.11px] 2xl:w-[25.6px] 2xl:mr-[18.49px]                       
                        xl:w-[24.24px] xl:h-[23.78px] xl:mr-[17.51px]  
                        lg:w-[25px] lg:h-[22px] lg:mr-[15px]
                        md:w-[20px] md:h-[19px] md:mr-[10px]

                        cursor-pointer">
                            <Link to='https://www.instagram.com/fowzimedia/' target="_blank">
                                <img className=" h-full w-full " src={instra} alt="" />
                            </Link>
                            </div>
                            {/* -------Youtube ---------- */}
                            <div className="
                        2xl:h-[24px] 2xl:w-[36px] 
                        xl:h-[22.73px] xl:w-[34.09px]
                        lg:h-[22px] lg:w-[30px]
                        md:h-[20px] md:w-[20px]

                        cursor-pointer">
                            <Link to='https://www.youtube.com/@husseinnoor' target="_blank">
                                <img className=" w-full h-full object-cover" src={youtube} alt="" />
                            </Link>
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
                    <button className="headerHireBtn" onClick={revealPrice}>Hire Us</button>
                </div>
            </div>

             {/* --- cantact PopUp section -------- */}
             {
                popUp && <>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" aria-hidden="true" ></div>
                            <div className="relative bg-gray-700 xl:rounded-3xl 2xl:rounded-3xl lg:rounded-2xl md:rounded-2xl rounded-xl  border w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%] 2xl:w-[50%]  mx-auto overflow-hidden shadow-md transform transition-all ">
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
             {/* --- cantact PopUp section -------- */}
             {
                showContact && <>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" aria-hidden="true" ></div>
                            <div className="relative bg-gray-700 xl:rounded-3xl 2xl:rounded-3xl lg:rounded-2xl md:rounded-2xl rounded-xl  border w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%] 2xl:w-[50%]  mx-auto overflow-hidden shadow-md transform transition-all ">
                                <div className="px-6 py-4">

                                    <div className="flex justify-between items-start">
                                        <div className="text-lg text-gray-300 font-semibold mb-4 ">
                                            <h2 className="text-lg text-gray-300 font-semibold">Contact Now</h2>
                                            <p className="text-[12px] text-gray-300"></p>
                                        </div>
                                        <button className="text-md text-gray-300 py-2 rounded-md focus:outline-none font-semibold hover:text-red-600" onClick={closeContactForm} >Close</button>
                                    </div>

                                    <div className=' grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]'>
                                        <input
                                            type="text"
                                            placeholder='Enter Your Name'


                                            className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                                        />
                                        <input
                                            type="text"
                                            placeholder='Enter Your Phone Number'


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

                                            onChange={handleDescriptionChangeContact}
                                            className='text-[14px] rounded-sm bg-transparent outline-none border border-gray-500 py-2 px-2 text-gray-300 resize-none overflow-hidden'
                                            placeholder='Ask a question ....'
                                            rows={2}
                                            style={{ minHeight: '3rem', maxHeight: '10rem' }}
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="px-2 py-4 bg-gray-700 flex md:justify-end lg:justify-end xl:justify-end 2xl:justify-end justify-center">
                                    <div>
                                        <button className="text-md py-2 px-4 rounded-md focus:outline-none text-white font-semibold" >Submit</button>
                                        <button className="text-md py-2 px-4 rounded-md focus:outline-none text-white font-semibold" onClick={closeContactForm} >Cancel</button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </>
            }


        </div>


    );
};

export default Header;