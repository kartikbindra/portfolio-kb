import React from 'react'
import LeetCodeArchitecture from '../assets/leetcodeArchitecture2.png'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

function BlogList() {
  return (
    <div className='bg-bgDark text-white mt-4 w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-0'>
      <h1 className='text-3xl md:text-4xl font-bold'>Blogs</h1>
      <p className='text-base md:text-md text-textSecondary'>Sharing my knowledge and research through technical blogs</p>

      <div className='mt-4'>
        <BlogItem />
      </div>
    </div>
  )
}

function BlogItem() {
  return (
    <div className='mt-2 flex flex-col md:flex-row items-center md:justify-around gap-4 md:gap-8 hover:bg-darkCard/50 border border-1 border-[#ffffff10] p-4 rounded-xl hover:bg-darkCardHover transition-all cursor-pointer duration-300'>
      <img
        src={LeetCodeArchitecture}
        alt='Blog Thumbnail'
        className='w-full max-w-xs md:w-64 h-36 md:h-[150px] object-cover rounded-md mb-2 md:mb-0'
      />
      <div className='flex flex-col gap-2 w-full'>
        <h2 className='text-base md:text-lg font-semibold'>
          LeetCode EXPOSED : How It REALLY Works Behind the Scenes! 🔥
        </h2>
        <p className='text-sm md:text-base text-textSecondary'>
          Dive into LeetCode's back-end architecture and code assessment processes that drive its speed and security.
        </p>
        <Link
          to={'https://kartikbindra.hashnode.dev/leetcode-exposed-how-it-really-works-behind-the-scenes'}
          target='_blank'
          className='text-sm md:text-base text-textSecondary hover:underline hover:text-white transition-all duration-300 flex flex-col gap-1 break-all'
        >
          <span className='text-white'>Read it here:</span> <div>https://kartikbindra.hashnode.dev/leetcode-exposed-how-it-really-works-behind-the-scenes <ExternalLink className='w-4 h-4 inline' /></div>
        </Link>
      </div>
    </div>
  )
}

export default BlogList
