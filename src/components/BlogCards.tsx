import { Link } from "react-router-dom";

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

interface blogProp {
  blog?: blog
}

const BlogCards = ({blog}:blogProp) => {
  return (
    <Link to={`/postpage/${blog?.id}`} className="flex gap-4 pb-6 border-b-2 md:flex-col-reverse h-full md:max-w-[320px]">
        <div className='flex flex-col gap-4 w-[80%] md:w-full'>
            <div className='font-semibold text-lg md:text-2xl hover:underline cursor-pointer'>{blog?.title}</div>
            <div>{blog?.content.slice(0,210) + '...'}</div>
            <div className='uppercase font-semibold text-sm'>{blog?.author}</div>
        </div>
        <div className='h-[75px] w-[120px] md:w-full md:h-[160px]'>
            <img src={blog?.image} className='w-full h-full object-cover object-center' />
        </div>
    </Link>
  )
}

export default BlogCards;