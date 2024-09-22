import React from 'react'
import Navbar from '../components/Navbar';
import BlogComponent from '../components/BlogComponent';
import MostRecent from '../components/MostRecent';

const Landingpage = () => {
  return (
    <div className='min-h-[100vh] font-lora'>
      <Navbar/>
      {/* Layout */}
      <div className='flex justify-center items-center'>
        <div className='p-6 md:flex md:flex-col md:gap-4 lg:flex-row'>
          {/* Section one */}
          <div className='flex flex-col gap-6'>
              <div className='bg-black px-4 py-1 uppercase text-sm text-white'>Today's Picks</div>
              <div className='md:hidden'>
                <div className='flex-col gap-6 flex-wrap'>
                  <BlogComponent/>
                  <BlogComponent/>
                  <BlogComponent/>
                </div>
              </div>
              <div className='hidden md:flex md:gap-6'>
                {/* <div>
                  <BlogComponent/>
                  <BlogComponent/>
                </div> */}
                <div className='md:flex md:flex-col md:gap-6'>
                  <div><BlogComponent mdWidth mdText/></div>
                  <div><BlogComponent mdWidth mdText/></div>
                </div>
                <div>
                  <BlogComponent/>
                </div>
              </div>
          </div>
          
          {/* Section two */}
          <div className='flex flex-col gap-6 flex-wrap mt-16 lg:mt-0'>
            <div className='bg-black px-4 py-1 uppercase text-sm text-white'>Most recent</div>
            <div className='flex flex-wrap gap-6 lg:flex-col'>
              <MostRecent/>
              <MostRecent/>
              <MostRecent/>
              <MostRecent/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage;