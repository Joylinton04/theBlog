import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { format } from 'date-fns'

interface blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const PostPage = () => {
  const { id } = useParams()
  const allBlogs = useAppSelector(state => state.blogs.allBlogs)
  const blog:blog | undefined = allBlogs.find(blog => (blog.id).toString() == id);


  if (!blog) {
    return <p className="text-center font-semibold capitalize text-lg p-6">Blog not found</p>;
  }

  return (
    <div className="pad h-full flex justify-center items-center flex-col">
      <div>
      {/* section 1 */}
      {blog &&
        <>
          <div className="flex gap-6 mt-1 items-center flex-wrap">
            <div className="bg-black px-4 py-2 text-white text-sm uppercase">{blog.author}</div>
            <div className="flex gap-6 items-center text-xs">
              <h1>{blog?.category.toUpperCase()}</h1>
              <p>{blog?.date.toLocaleString()}</p>
            </div>
          </div>

          {/* section 2 */}
          <div>
            <div className="mt-4">
              <h1 className="text-5xl font-Blogtitle font-bold capitalize">{blog.title}</h1>
              <p className="mt-4 capitalize font-blogtitle font-semibold text-lg">{blog.slug}</p>
            </div>
            <div className="mt-6"> 
              <div className="max-w-[1000px]">
                <img src={blog.image} className="w-full h-full object-cover object-center"/>
              </div>
              <p className="mt-6 sm:leading-7 md:leading-8 text-lg">{blog.content}</p>
            </div>
          </div>
        </>
      }
        <div className="flex gap-6">

        </div>

      </div>
    </div>
  )
}

export default PostPage;