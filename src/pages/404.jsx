import React from 'react'
import loaderVid from '../assets/frame1_2.mp4';
import { FaArrowLeftLong } from "react-icons/fa6";
import '../App.css';
import { Link } from 'react-router-dom';

const NotFound404 = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
        <video className="w-64 h-64 z-0 cropped-video" autoPlay loop muted>
        <source src={loaderVid} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        {/* <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div> */}
        <div className="flex flex-col justify-center items-center text-white px-4 text-center">
        {/* <h1 className="text-6xl font-bold mb-4">404</h1> */}
        <h2 className="text-3xl mb-2 font-semibold">Page Not Found</h2>
        <h6 className="text-lg mb-4">The page you are looking for does not exist. Return to home page.
        </h6>
        <Link className="flex items-center gap-1 bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300" to="/"><FaArrowLeftLong /> Return to Home</Link>
        </div>
    </div>
  )
}

export default NotFound404
