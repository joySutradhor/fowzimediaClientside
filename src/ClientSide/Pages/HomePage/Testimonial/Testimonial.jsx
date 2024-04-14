import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css';
import profile from "/profile.png"
import line from "/line.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from 'react';



const CustomPrevArrow = (props) => (
    

<button {...props} className="arrow-button" aria-label="Previous" type="button">
    <FaArrowRightLong></FaArrowRightLong>
</button>
);

const CustomNextArrow = (props) => (
    <button {...props} className="arrow-button2" aria-label="Next" type="button">
        <FaArrowLeftLong></FaArrowLeftLong>
    </button>
);

const Testimonial = () => {

    // const [show, setShow] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };


    // const showBtn = () => {
    //     setShow(!show)
    // }


    return (
        <div className="leftRight">
            <h1 className="titleSubHeading">Testimonial</h1>

            <Slider {...settings}>
                <div >
                    <div className='relative flex flex-col xl:justify-between xl:flex-row 2xl:flex-row 2xl:justify-between '>
                        <div className='  '>
                            <div className='flex items-center '>
                                <div>
                                    <img
                                        src={profile}
                                        className="block 2xl:w-[51px] 2xl:h-[51px] xl:w-[42px] xl:h-[42px] w-[30px]"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div className='text-white 2xl:ml-[20px] xl:ml-[15px] ml-[5px]'>
                                    <h3 className='testHeading'>Nazmul Islam</h3>
                                    <div className='flex items-center'>
                                        <h4 className='testSubHeading'>Graphics Designer</h4>
                                        <h3 className='2xl:ml-[10px] 2xl:mt-[10px] xl:ml-[5px] xl:mt-[5px] ml-1 mt-1'><img className='h-[1px] xl:w-[25px] 2xl:w-[34px] w-[10px]' src={line} alt="" /></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='2xl:w-[1180px] xl:w-[781px] 2xl:ml-[200px] '>
                            <p className="text-white 2xl:text-[25px] 2xl:leading-[37.5px] 2xl:mt-0
                            xl:text-[18px] xl:leading-[25px] xl:mt-0
                            text-[14px] mt-[20px] 
                            font-glacialBase  xl:bg-[url('/testimonialBg.png')] 2xl:bg-[url('/testimonialBg.png')] bg-[url('/testimonialBgMobile.png')]   bg-no-repeat bg-left-top">
                               Working with”Fowzi Media” has been an absolute pleasure! Their talent and expertise in logo design and graphics have truly elevated my brand as a photographer and videographer. They have a keen eye for detail and always deliver designs that perfectly capture the essence of my work. Not only are they incredibly talented, but they are also a reliable and efficient collaborator. They take the time to understand my vision and turn it into reality, exceeding my expectations every time. I highly recommend “Fowzi Media” for anyone in need of logo design, graphics, and branding services. Their exceptional work will undoubtedly make a positive impact on your brand identity.
                            </p>
                            {/* <p className="pt-[5px] text-[#FF0101]" onClick={()=>showBtn()}>{show? "Show More" : "Show Less"}</p> */}
                        </div>
                    </div>
                </div>
                <div >
                    <div className='relative flex flex-col xl:justify-between xl:flex-row 2xl:flex-row 2xl:justify-between '>
                        <div className='  '>
                            <div className='flex items-center '>
                                <div>
                                    <img
                                        src={profile}
                                        className="block 2xl:w-[51px] 2xl:h-[51px] xl:w-[42px] xl:h-[42px] w-[30px]"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div className='text-white 2xl:ml-[20px] xl:ml-[15px] ml-[5px]'>
                                    <h3 className='testHeading'>Nazmul Islam</h3>
                                    <div className='flex items-center'>
                                        <h4 className='testSubHeading'>Graphics Designer</h4>
                                        <h3 className='2xl:ml-[10px] 2xl:mt-[10px] xl:ml-[5px] xl:mt-[5px] ml-1 mt-1'><img className='h-[1px] xl:w-[25px] 2xl:w-[34px] w-[10px]' src={line} alt="" /></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='2xl:w-[1180px] xl:w-[781px] 2xl:ml-[200px] '>
                            <p className="text-white 2xl:text-[25px] 2xl:leading-[37.5px] 2xl:mt-0
                            xl:text-[18px] xl:leading-[25px] xl:mt-0
                            text-[14px] mt-[20px] 
                            font-glacialBase  xl:bg-[url('/testimonialBg.png')] 2xl:bg-[url('/testimonialBg.png')] bg-[url('/testimonialBgMobile.png')]   bg-no-repeat bg-left-top">
                               Working with”Fowzi Media” has been an absolute pleasure! Their talent and expertise in logo design and graphics have truly elevated my brand as a photographer and videographer. They have a keen eye for detail and always deliver designs that perfectly capture the essence of my work. Not only are they incredibly talented, but they are also a reliable and efficient collaborator. They take the time to understand my vision and turn it into reality, exceeding my expectations every time. I highly recommend “Fowzi Media” for anyone in need of logo design, graphics, and branding services. Their exceptional work will undoubtedly make a positive impact on your brand identity.
                            </p>
                            {/* <p className="pt-[5px] text-[#FF0101]" onClick={()=>showBtn()}>{show? "Show More" : "Show Less"}</p> */}
                        </div>
                    </div>
                </div>
                <div >
                    <div className='relative flex flex-col xl:justify-between xl:flex-row 2xl:flex-row 2xl:justify-between '>
                        <div className='  '>
                            <div className='flex items-center '>
                                <div>
                                    <img
                                        src={profile}
                                        className="block 2xl:w-[51px] 2xl:h-[51px] xl:w-[42px] xl:h-[42px] w-[30px]"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div className='text-white 2xl:ml-[20px] xl:ml-[15px] ml-[5px]'>
                                    <h3 className='testHeading'>Nazmul Islam</h3>
                                    <div className='flex items-center'>
                                        <h4 className='testSubHeading'>Graphics Designer</h4>
                                        <h3 className='2xl:ml-[10px] 2xl:mt-[10px] xl:ml-[5px] xl:mt-[5px] ml-1 mt-1'><img className='h-[1px] xl:w-[25px] 2xl:w-[34px] w-[10px]' src={line} alt="" /></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='2xl:w-[1180px] xl:w-[781px] 2xl:ml-[200px] '>
                            <p className="text-white 2xl:text-[25px] 2xl:leading-[37.5px] 2xl:mt-0
                            xl:text-[18px] xl:leading-[25px] xl:mt-0
                            text-[14px] mt-[20px] 
                            font-glacialBase  xl:bg-[url('/testimonialBg.png')] 2xl:bg-[url('/testimonialBg.png')] bg-[url('/testimonialBgMobile.png')]   bg-no-repeat bg-left-top">
                               Working with”Fowzi Media” has been an absolute pleasure! Their talent and expertise in logo design and graphics have truly elevated my brand as a photographer and videographer. They have a keen eye for detail and always deliver designs that perfectly capture the essence of my work. Not only are they incredibly talented, but they are also a reliable and efficient collaborator. They take the time to understand my vision and turn it into reality, exceeding my expectations every time. I highly recommend “Fowzi Media” for anyone in need of logo design, graphics, and branding services. Their exceptional work will undoubtedly make a positive impact on your brand identity.
                            </p>
                            {/* <p className="pt-[5px] text-[#FF0101]" onClick={()=>showBtn()}>{show? "Show More" : "Show Less"}</p> */}
                        </div>
                    </div>
                </div>
          

            </Slider>
        </div>
    );
};

export default Testimonial;
