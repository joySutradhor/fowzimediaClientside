import { Link } from "react-router-dom";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Footer from "../Shared/Footer/Footer";
import headerLogo from "/headerLogo.png"
// import social icons
import fb from "/fb.png";
import instra from "/instra.png";
import youtube from "/youtube.png"
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";

import { Fade } from 'react-awesome-reveal';
import { useState } from "react";






const VideoGraphy = () => {

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


        <>

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

            <div className="bg-[#111111] 
            2xl:mt-[-100px] 2xl:rounded-t-[50px] 
            xl:mt-[-50px] xl:rounded-t-[50px]
            lg:mt-[-50px] lg:rounded-t-[50px]
            md:mt-[-50px] md:rounded-t-[50px]
            ">
                <div className=" webDesignParent ">

                    <p className="pageTitle">Home . Our Service . Videography</p>
                    <h2 className="titleSubHeading block md:hidden lg:hidden xl:hidden 2xl:hidden
                            ">Videography</h2>
                    <div className="flex justify-between w-full flex-col-reverse md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">

                        <div className="2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[40%]  ">
                            <h2 className="titleSubHeading hidden md:block lg:block xl:block 2xl:block
                            ">Videography</h2>

                            <p className="brandingParaText">
                                Elevate your brand with captivating video content that tells your story and engages your audience. <span className="text-[#FF0000] font-glaCailBold"> Fowzi Media</span> specializes in professional videography services that bring your vision to life and leave a lasting impression. From corporate videos to promotional content, we're here to help you stand out in a crowded digital landscape.
                            </p>

                            <div className="barndingListItems">
                                <div className="flex flex-wrap gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[20px] 2xl:space-x-[30px]">
                                    <li>Corporate Videos</li>
                                    <li>Promotional Videos</li>

                                </div>
                                <div className="flex flex-wrap gap-x-[20px] md:gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[20px] 2xl:space-x-[30px]">
                                    <li>Brand Storytelling</li>
                                    <li>Event Coverage</li>

                                </div>
                                <div className="flex flex-wrap gap-x-[10px] md:gap-x-[15px]lg:gap-x-[20px] xl:gap-x-[20px]  2xl:space-x-[30px]">
                                    <li>Product Demonstrations</li>

                                    <li>Testimonials & Interviews</li>
                                </div>
                            </div>


                            <div
                                className=" hidden xl:block 2xl:block"
                            >
                                <h2 className="titleSubHeading
                                2xl:pt-[50px] 2xl:pb-[60px]
                                xl:pt-[50px] xl:pb-[35px]
                               
                                
                                ">Why Choose Fowzi Media?</h2>

                                <li className="weblistItem"> <span className="webListHead">Expertise : </span> With years of experience in videography, we have the skills and creativity to bring your vision to life.</li>

                                <li className="weblistItem xl:py-[15px] 2xl:py-[25px]"> <span className="webListHead">Customization : </span> We use high-quality equipment and techniques to ensure your videos are visually stunning and polished to perfection.</li>

                                <li className="weblistItem"> <span className="webListHead">Customer Satisfaction: </span>  We work closely with you every step of the way to understand your goals and objectives and tailor our services to meet your needs.</li>

                            </div>

                        </div>

                        {/* right side img  */}

                        <div className="webDesignImgParent">
                            <img className="h-full w-full xl:rounded-[30px] 2xl:rounded-[30px] lg:rounded-[15px] md:rounded-[10px]" src="/brandingLeft3.png" alt="" />
                        </div>
                    </div>

                    {/* =======for mobile ============= */}
                    <div className="block md:block lg:block xl:hidden 2xl:hidden ">
                        <h2 className="titleSubHeading
                                 lg:pt-[50px] lg:pb-[40px]
                                 md:pt-[40px] md:pb-[30px]
                                 pt-[30px] pb-[20px] 
                                
                                ">Why Choose Fowzi Media?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">

                            <li className="weblistItem"> <span className="webListHead">Expertise : </span> With years of experience in videography, we have the skills and creativity to bring your vision to life.</li>

                            <li className="weblistItem xl:py-[15px] 2xl:py-[25px]"> <span className="webListHead">Customization : </span> We use high-quality equipment and techniques to ensure your videos are visually stunning and polished to perfection.</li>

                            <li className="weblistItem"> <span className="webListHead">Customer Satisfaction: </span>  We work closely with you every step of the way to understand your goals and objectives and tailor our services to meet your needs.</li>

                        </div>
                    </div>
                </div>
                {/* --------------our Process Section --------------- */}

                <div className="text-white leftRight">
                    <h4 className="titleSubHeading">Our Process</h4>
                    <div className="processParent">

                        <Fade delay={500} duration={500}>
                            <div className="brandingNumberParent">
                                <div >
                                    <div className="brandingNumber" >01</div>
                                </div>
                                <div>
                                    <h4 className="processHeading">Consultation  :</h4>
                                    <p className="processPara">We start with a consultation to discuss your goals, vision, and ideas for your video project.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={800} duration={500}>
                            <div className="brandingNumberParent">
                                <div >
                                    <div className="brandingNumber" >02</div>
                                </div>
                                <div>
                                    <h4 className="processHeading">Planning & Scripting:</h4>
                                    <p className="processPara">Our team will work with you to develop a detailed plan and script for your video, outlining the key messages, scenes, and visuals.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={1100} duration={500}>
                            <div className="brandingNumberParent">
                                <div >
                                    <div className="brandingNumber" >03</div>
                                </div>
                                <div>
                                    <h4 className="processHeading">Production: :</h4>
                                    <p className="processPara">We'll handle all aspects of production, including filming, lighting, sound, and directing, to ensure your video looks and sounds amazing.</p>
                                </div>
                            </div>
                        </Fade>

                        <Fade delay={1500} duration={500}>
                            <div className="brandingNumberParent">
                                <div >
                                    <div className="brandingNumber" >04</div>
                                </div>
                                <div>
                                    <h4 className="processHeading">Editing & Post-Production:</h4>
                                    <p className="processPara">Our skilled editors will bring all the pieces together in post-production, adding effects, music, and graphics to create a polished final product.</p>
                                </div>
                            </div>
                        </Fade>

                        <Fade delay={1800} duration={500}>
                            <div className="brandingNumberParent">
                                <div >
                                    <div className="brandingNumber" >05</div>
                                </div>
                                <div>
                                    <h4 className="processHeading">Review & Revisions :</h4>
                                    <p className="processPara">We'll share the draft of your video for your feedback and make any necessary revisions to ensure it meets your expectations.</p>
                                </div>
                            </div>
                        </Fade>

                        <Fade delay={2100} duration={500}>
                            <div className="brandingNumberParent">
                                <div >
                                    <div className="brandingNumber" >06</div>
                                </div>
                                <div>
                                    <h4 className="processHeading">Delivery :</h4>
                                    <p className="processPara">Once approved, we'll deliver the final video in the format of your choice, ready to be shared with your audience.</p>
                                </div>
                            </div>
                        </Fade>


                    </div>
                </div>


                {/* -------------------our work sections */}
                <div className="leftRight">
                    <div>
                        <h4 className="titleSubHeading">Our Works :</h4>
                    </div>
                    <div className="ourWorkParent">
                        <div>
                            <img className="WorkImgOne" src="/cardOne.png" alt="" />

                        </div>
                        <div>
                            <img className="WorkImgTwo" src="/cardTwo.jpeg" alt="" />

                        </div>
                        <div>
                            <img className="WorkImgThree" src="/cardThree.png" alt="" />

                        </div>
                        <div>
                            <img className="WorkImgOne" src="/cardFour.png" alt="" />

                        </div>
                    </div>
                </div>

                {/* ----------Testimonial Sections -------------- */}

                <Testimonial></Testimonial>

                {/* -----------Call to Action Section ------------ */}

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
                                        <h2 className="ctaHeading">Ready to Transform Your Online Presence?</h2>
                                        <p className="ctaPara">Don't let your website hold you back. Partner with Fowzi Media and unleash the full potential of your online brand. Schedule a consultation today and let's create a website that sets you apart from the competition.</p>
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
                                <div className="relative bg-gray-700 rounded-sm w-[90%] md:w-[70%] lg:w-[70%] xl:w-[40%] 2xl:w-[50%]  mx-auto overflow-hidden shadow-md transform transition-all ">
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


        </>





    );
};

export default VideoGraphy;