import { useAppSelector } from "../store/store";
import BlogCards from "../components/BlogCards";

const Global = () => {
    const globalUpdate = useAppSelector(state => state.blogs.global);

  return (
    <div className=' pad' id='global'>
        <div className='bg-black px-4 py-1 uppercase text-sm text-white'>Global</div>
        <div className='flex flex-wrap gap-8 mt-6'>
        {globalUpdate.length? globalUpdate.map((blog) => 
            <BlogCards key={blog.id} blog={blog}/>) 
            : <p>No content to display</p>
        }
        </div>
    </div>
  )
}

export default Global;