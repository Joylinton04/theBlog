import React from 'react'
import Navbar from '../components/Navbar';
import BlogComponent from '../components/BlogComponent';
import MostRecent from '../components/MostRecent';

const Landingpage = () => {
  return (
    <div className='min-h-[100vh] font-lora'>
      <Navbar/>
      {/* Layout */}

      <div className='p-6 sm:flex'>
        {/* Section one */}
        <div className='flex flex-col gap-6'>
            <div className='bg-black px-4 py-1 uppercase text-sm text-white'>Today's Picks</div>
            <div className='sm:hidden'>
              <div className='flex-col gap-6 flex-wrap'>
                <BlogComponent/>
                <BlogComponent/>
                <BlogComponent/>
              </div>
            </div>
            <div>
              <div><BlogComponent/></div>
              <div><BlogComponent/></div>
              <div></div>
            </div>
        </div>
        
        {/* Section two */}
        <div className='flex flex-col gap-6 flex-wrap mt-16'>
          <div className='bg-black px-4 py-1 uppercase text-sm text-white'>Most recent</div>
          <div className='flex flex-wrap gap-6'>
            <MostRecent/>
            <MostRecent/>
            <MostRecent/>
            <MostRecent/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Landingpage;