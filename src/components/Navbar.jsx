import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router'

const Navbar = () => {

  const [isMenuOpen, setIsMenuItemOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleMenu = () => {
    setIsMenuItemOpen(!isMenuOpen)
  }

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const menuItems = {
    platform: {
      title: 'Platform',
      sections: [
        {
          title: 'BUILD',
          items: [
            { name: 'Design', desc: 'Build high-performing sites' },
            { name: 'Edit mode', desc: 'Empower your content team' },
            { name: 'Interactions', desc: 'Craft immersive experiences' },
            { name: 'Page building', desc: 'Launch simple landing pages quickly', isNew: true },
          ]
        },
        {
          title: 'MANAGE',
          items: [
            { name: 'CMS', desc: 'Manage content at scale' },
            { name: 'Hosting', desc: 'Host and scale your site without the hassle' },
            { name: 'Localization', desc: 'Customize your site for a worldwide audience' },
            { name: 'Security', desc: 'Ensure your site stays safe' },
          ]
        },
        {
          title: 'OPTIMIZE',
          items: [
            { name: 'Analyze', desc: 'Understand how your site performs', isNew: true },
            { name: 'Optimize', desc: 'Maximize conversions with testing', isNew: true },
            { name: 'SEO', desc: 'Grow your reach with fine-tuned controls' },
          ]
        },
      ]
    },
    solutions: {
      title: 'Solutions',
      items: [
        { name: 'Enterprise', desc: 'Scale your business' },
        { name: ' Startups', desc: 'Move faster with CodeTutor' },
        { name: 'Agencies', desc: 'Win more clients' },
        { name: ' Marketing', desc: 'Drive more growth' },
      ]
    },
    resources: {
      title: 'Resources',
      items: [
        { name: 'Showcase', desc: 'Get inspired by the community' },
        { name: 'Blog', desc: 'Read latest news and articles' },
        { name: 'Documentation', desc: 'Learn from our resources' },
        { name: 'Community', desc: 'Join the conversation' },
      ]
    }
  };


  return (
    <nav className='bg-black text-white fixed top-0 left-0 right-0 border-b border-white/10'>
      <div className='container mx-auto px-4 py-2 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          {/* logo */}
          <div>
            <Link to='/' className='text-2xl'> <span className='text-blue-700'>ReactTutor</span> UI</Link>
          </div>
          {/* dekstop menu */}
          <div className='hidden lg:flex items-center space-x-6'>
            {
              Object.keys(menuItems).map((key, idx) => (
                <div key={idx} className='relative'>
                  <button onClick={() => toggleDropdown(key)} className='hover:text-gray-400 cursor-pointer flex items-center px-3 py-2 text-sm rounded-md font-medium'>
                    {menuItems[key].title}
                    <MdKeyboardArrowDown className={`ml-2 h-5 w-5 transition-transform ${activeDropdown === key ? 'transform rotate-180' : ""}`} /></button>

                  {/* dropdown items */}
                  {
                    activeDropdown === key && (

                      <div className='absolute left-0 mt-2 w-screen max-w-md bg-white text-black shadow-lg rounded-md py-1 pl-1 pr-1'>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-12 p-4' >
                          {
                            key === 'platform' ? (menuItems[key]?.sections?.map((section, idx) => (
                              <div key={idx}>
                                <h3 className='text-xs font-semibold text-gray-500 tracking-wider mb-2'>{section?.title}</h3>

                                <div>
                                  {
                                    section.items.map((item, idx) => (
                                      <Link to={`/${key}/${item.name.toLowerCase()}`} className='group flex items-start p-2 rounded-lg hover:bg-gray-300'>
                                        <div className='px-2'>

                                           

                                          <p className='text-xm font-medium text-black'>{item?.name} {item.isNew &&(<span className='ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue.800'>NEW</span>)}</p>
                                          <p className='text-sm text-gray-600 '>{item?.desc}</p>
                                        </div>
                                      </Link>
                                    ))
                                  }

                                </div>
                              </div>))) : <div className='space-y-2 flex flex-col gap-2'>
                              {menuItems[key].items.map((item, idx) => (
                                <Link to={`/${key}/${item.name.toLowerCase()}`} className='group flex items-start p-2 rounded-lg hover:bg-gray-300'>
                                  <div className='px-2'>
                                    <p className='text-xm font-medium'>{item.name}</p>
                                    <p className='text-sm text-gray-600 '>{item.desc}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          }
                        </div>
                      </div>

                    )
                  }
                </div>
              ))
            }

            <Link to='/enterprice' className='hover:text-gray-400'>Enterprice</Link>
            <Link to='/pricing' className='hover:text-gray-400'>Pricing</Link>
          </div>
          {/* auth button */}
          <div>auth button</div>
          {/* mobile menu */}
          <div className='md:hidden'>
            mobile menu
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar