import Navbar from '../components/Navbar';
import BlogComponent from '../components/BlogComponent';
import Minicards from '../components/Minicards';
import MiniCards2 from '../components/MiniCards2';
import BigStory from '../components/BigStory';
import BlogCards from '../components/BlogCards';

const Landingpage = () => {
  return (
    <div className='min-h-[100vh] font-lora'>
      <Navbar/>
      {/* Layout */}
      <div className='flex justify-center items-center flex-col p-6'>
        <div>
          <div className='md:flex md:flex-col md:gap-4 lg:flex-row'>
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
                <Minicards/>
                <Minicards/>
                <Minicards/>
                <Minicards/>
              </div>
            </div>
          </div>

          {/* section 3 */}
          <div className='flex flex-col gap-4 mt-10'>
              <div className='bg-black px-4 py-1 uppercase text-sm text-white'>The big story</div>
              <div><BigStory/></div>
              <div className='flex flex-wrap md:justify-between gap-6 mt-8'>
                <MiniCards2/>
                <MiniCards2/>
                <MiniCards2/>
                <MiniCards2/>
              </div>
          </div>

          {/* section 4 */}
          <div className='mt-10'>
              <div className='bg-black px-4 py-1 uppercase text-sm text-white'>technology</div>
              <div className='flex flex-wrap md:flex-nowrap gap-8 mt-6'>
                <BlogCards/>
                <BlogCards/>
                <BlogCards/>
                <BlogCards/>
              </div>
          </div>
  
        </div>
      </div>
    </div>
  )
}

export default Landingpage;