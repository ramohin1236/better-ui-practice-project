import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router'
import video from '../assets/banner-video.mp4'
import leftBannerImage from '../assets/banner-left.avif'
import rightBannerImage from '../assets/banner-right.png'



const Hero = () => {
  return (
    <div className='pt-24 md:pt-32 bg-black text-white'>
      {/* subtitle */}
      <div className='container mx-auto px-4 xl:px-24 sm:px-6 lg:px-8 pt-32 pb-16 relative'>
        <div>
          <span className='text-[#999999999] uppercase tracking-[0.2em] text-sm font-medium '>MORE THAN A WEBSITE BUILDER</span>
        </div>
        {/* main heading */}
        <h1 className='text-4xl sm:text-5xl lg:text-8xl font-bold mb-8 md:mb-16 leading-[1.2] tracking-[-0.02em]'>Your site should do <br className='md:block hidden' /> more than look good</h1>


        {/* paragraph and button */}
        <div className='flex md:flex-row items-center flex-col justify-between gap-8'>
          <p className='text-[#999999] md:text-xl mb-8 md:mb-0 leading-relaxed md:w-3/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolore ipsam distinctio! Sequi quia, at excepturi eos ducimus quas sint amet, placeat recusandae commodi optio, voluptatum obcaecati quasi nisi qui!</p>

          <div className='flex flex-row flex-wrap gap-8 shrink-0'>
            <Link className='bg-[#4353FF] hover:bg-blue-700
             px-8 py-4 text-white rounded-md font-semibold text-lg transition-colors duration-200'>Start Building</Link>
            <Link className='flex items-center justify-center group
             px-8 py-4 text-white hover:text-white/60 rounded-md font-semibold text- transition-colors duration-200'>Contact Sales <HiArrowRight className='ml-3 w-5 group-hover:translate-x-1 transition-transform duration-200' /> </Link>
          </div>
        </div>


        {/* video section */}
        <div className='w-full h-full mt-16 relative'>
          <video src={video} autoPlay muted loop className='w-full h-full object-cover'></video>

          <div className='absolute top-1/2 xl:-left-20 z-20 hidden xl:block'>
            <img src={leftBannerImage} alt="" className='lg:h-24 h-20 w-fit object-cover' />
          </div>
          <div className='absolute bottom-1/5 md:-right-0 xl:-right-20 z-20 hidden xl:block'>
            <img src={rightBannerImage} alt="" className='lg:h-44 md:h-32 h-28 w-full object-cover' />
          </div>

       {/* overlay */}
       <div className='absolute bottom-0 left-0 h-1/2 right-0 z-10 bg-gradient-to-t from-black to-transparent hidden md:block'>
          
       </div>

        </div>

      </div>
    </div>
  )
}

export default Hero