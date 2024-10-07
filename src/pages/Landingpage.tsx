import Navbar from '../components/Navbar';
import BlogComponent from '../components/BlogComponent';
import Minicards from '../components/Minicards';
import MiniCards2 from '../components/MiniCards2';
import BigStory from '../components/BigStory';
import BlogCards from '../components/BlogCards';
import { useAppSelector } from '../store/store';


const Landingpage = () => {
  const allBlogs = useAppSelector(state => state.blogs.allBlogs);
  const techUpdate = useAppSelector(state => state.blogs.technology);
  const todaysPick = useAppSelector(state => state.blogs.todaysPick);
  const globalUpdate = useAppSelector(state => state.blogs.global);
  // const update = useAppSelector(state => state.blogs.allBlogs.technology)
  const mostRecent = useAppSelector(state => state.blogs.mostRecent)
  console.log(mostRecent)
  const theBigOne = techUpdate.length > 0 ? techUpdate[0] : null;
  const bigToday = todaysPick.length > 2 ? todaysPick[2] : null;



  
  return (
    <div>
      {/* Layout */}
      <div className='flex justify-center items-center flex-col pad'>
        <div>
          <div className='md:flex md:flex-col md:gap-4 lg:flex-row'>
            {/* Section one */}
            <div className='flex flex-col gap-6'>
                <div className='bg-black px-4 py-1 uppercase text-sm text-white'>Today's Picks</div>
                <div className='md:hidden h-full'>
                  <div className='flex-col gap-12 flex-wrap h-full'>
                    {todaysPick.length ? (todaysPick).map((blog) => 
                      <div><BlogComponent blog={blog} key={blog.id}/></div>
                    ) 
                    : (<p>No content to display</p>)
                    }
                  </div>
                </div>
                <div className='hidden md:flex md:gap-6'>
                    <div className='md:flex md:flex-col md:gap-6'>
                      {todaysPick.length ? (todaysPick.slice(0,2).map((blog) => 
                          <div><BlogComponent mdWidth mdText blog={blog} key={blog.id}/></div>))
                        : (<p>No content to display</p>)
                      }
                    </div>
                    <div>
                    {bigToday ? (
                        <BlogComponent blog={bigToday} />
                      ) : (
                        <p>No content available for today's pick</p>
                      )
                    }
                    </div>
                </div>
            </div>
            
            {/* Section two */}
            <div className='flex flex-col gap-6 flex-wrap mt-16 lg:mt-0'>
              <div className='bg-black px-4 py-1 uppercase text-sm text-white'>Most recent</div>
              <div className='flex flex-wrap gap-6 lg:flex-col'>
                {mostRecent.length? (mostRecent.slice(0,4).map((blog) => 
                <Minicards key={blog.id} blog={blog}/>  
              ))
                : (<p>No content to be displayed</p>)}
              </div>
            </div>
          </div>

          {/* section 3 */}
          <div className='flex flex-col gap-4 mt-10'>
              <div className='bg-black px-4 py-1 uppercase text-sm text-white'>The big story</div>
              { theBigOne ?
                <div><BigStory blog={theBigOne}/></div>
                : (
                  <p>No content available for the big story</p>
                )
              }
              <div className='flex flex-wrap md:justify-between gap-6 mt-8'>
                {techUpdate.length? techUpdate.slice(0,4).map((blog) => 
                  <MiniCards2 key={blog.id} blog={blog}/>) 
                  : <p>No content to display</p>
                }
              </div>
          </div>

          {/* section 4 */}
          <div className='mt-10'>
              <div className='bg-black px-4 py-1 uppercase text-sm text-white'>technology</div>
              <div className='flex flex-wrap md:flex-nowrap gap-8 mt-6'>
                {techUpdate.length? techUpdate.slice(0,4).map((blog) => 
                  <BlogCards key={blog.id} blog={blog}/>) 
                  : <p>No content to display</p>
                }
              </div>
          </div>

          {/* section 5
          <div className='mt-10'>
              <div className='bg-black px-4 py-1 uppercase text-sm text-white'>Security</div>
              <div className='flex flex-wrap md:flex-nowrap gap-8 mt-6'>
                <BlogCards/>
                <BlogCards/>
                <BlogCards/>
                <BlogCards/>
              </div>
          </div> */}

          {/* section 6
          <div className='mt-10'>
              <div className='bg-black px-4 py-1 uppercase text-sm text-white'>Gear</div>
              <div className='flex flex-wrap md:flex-nowrap gap-8 mt-6'>
                <BlogCards/>
                <BlogCards/>
                <BlogCards/>
                <BlogCards/>
              </div>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Landingpage;