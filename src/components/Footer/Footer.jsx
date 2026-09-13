import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Cars",
        link: "/cars",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Booking",
        link: "/booking",
    },
]

const Footer = ({theme}) => {
    return (
        <div className={`py-14 ${
            theme === "dark" 
            ? "bg-black text-white" 
            : "bg-gray-200 text-black"
        }`}>
            <div className="container">
                <div className='grid md:grid-cols-3 py-5'>
                    {/* company details */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center'>Car Rental</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit sequi expedita.</p>
                        <br />
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow className='text-yellow-500' />
                            <p>Noida, Uttar Pradesh</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaMobileAlt className='text-yellow-500' />
                            <p>+92 123456789</p>
                        </div>
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="#">
                                <FaInstagram className="text-3xl hover:text-yellow-500 duration-300" />
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl hover:text-yellow-500 duration-300" />
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl hover:text-yellow-500 duration-300" />
                            </a>
                        </div>
                    </div>
                    {/* navlinks */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Quick Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.slice(0, 2).map((data) => {
                                        return (
                                            <li key={data.title} className='cursor-pointer hover:text-yellow-500 duration-300'>
                                                <span className='mr-2'>..</span>
                                                <a href={data.link}>{data.title}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Support</h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.slice(2, 4).map((data) => {
                                        return (
                                            <li key={data.title} className='cursor-pointer hover:text-yellow-500 duration-300'>
                                                <span className='mr-2'>..</span>
                                                <a href={data.link}>{data.title}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Legal</h1>
                                <ul className='flex flex-col gap-3'>
                                    <li className='cursor-pointer hover:text-yellow-500 duration-300'>
                                        <span className='mr-2'>..</span>
                                        Privacy Policy
                                    </li>
                                    <li className='cursor-pointer hover:text-yellow-500 duration-300'>
                                        <span className='mr-2'>..</span>
                                        Terms & Conditions
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer