import { useAppSelector } from "../store/store";
import BlogCards from "../components/BlogCards";

const Technology = () => {
  const techUpdate = useAppSelector(state => state.blogs.technology)
  console.log(techUpdate)
  return (
    <div className=' pad' id='global'>
        <div className='bg-black px-4 py-1 uppercase text-sm text-white'>Technology</div>
        <div className='flex flex-wrap gap-8 mt-6'>
        {techUpdate.length? techUpdate.map((blog) => 
            <BlogCards key={blog.id} blog={blog}/>) 
            : <p>No content to display</p>
        }
        </div>
    </div>
  )
}

export default Technology;