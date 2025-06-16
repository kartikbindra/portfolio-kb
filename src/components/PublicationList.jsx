import React from 'react'
import workFlowDiagram from '../assets/workflow_diagram_New.png'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

function PublicationList() {
  return (
    <div className='bg-bgDark text-white mt-4 w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-0'>
      <h1 className='text-3xl md:text-4xl font-bold'>Publications</h1>
      <p className='text-base md:text-md text-textSecondary'>Academic Published Research Papers</p>

      <div className='mt-4'>
        <PublicationItem />
      </div>
    </div>
  )
}

function PublicationItem() {
  return (
    <div className='mt-2 flex flex-col md:flex-row items-center md:justify-around gap-4 md:gap-8 hover:bg-darkCard/50 border border-1 border-[#ffffff10] p-4 rounded-xl hover:bg-darkCardHover transition-all cursor-pointer duration-300'>
      <img
        src={workFlowDiagram}
        alt='Publication Thumbnail'
        className='w-full max-w-xs md:w-64 h-36 md:h-[150px] object-cover rounded-md mb-2 md:mb-0'
      />
      <div className='flex flex-col gap-2 w-full'>
        <h2 className='text-base md:text-lg font-semibold'>
          HyperSwin: preventing deepfake proliferation with swin-efficient fusion in a hyperledger ecosystem
        </h2>
        <p className='text-sm md:text-base text-textSecondary'>
          Signal, Image & Video Processing Journal, Springer 2025
        </p>
        <Link
          to={'https://doi.org/10.1007/s11760-025-04183-8'}
          target='_blank'
          className='text-sm md:text-base text-textSecondary hover:underline hover:text-white transition-all duration-300 flex flex-col md:flex-row gap-1 items-center break-all'
        >
          <span className='text-white'>Link:</span> <div>https://doi.org/10.1007/s11760-025-04183-8 <ExternalLink className='w-4 h-4 inline' /></div>
        </Link>
      </div>
    </div>
  )
}

export default PublicationList
