import React from 'react'

const Hero = () => {
  return (
    <div className='pt-24 md:pt-32 bg-black text-white'>
        {/* subtitle */}
        <div className='container mx-auto px-24 sm:px-6 lg:px-8 pt-32 pb-16 relative'>
            <div>
                <span className='text-[#999999999] uppercase tracking-[0.2em] text-sm font-medium '>MORE THAN A WEBSITE BUILDER</span>
            </div>
            {/* main heading */}
        <h1 className='text-4xl sm:text-5xl lg:text-8xl font-bold mb-8 md:mb-16 leading-[1.2] tracking-[-0.02em]'>Your site should do <br className='md:block hidden' /> more than look good</h1>
        </div>
    </div>
  )
}

export default Hero