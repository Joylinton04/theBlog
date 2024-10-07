import { Link } from 'react-router-dom';
import img1 from '../assets/cybertruck.webp'

interface blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  // tags: string[];
}

interface sizeProps {
  mdWidth?: boolean;
  mmdWidth?: boolean;
  height?: boolean;
  mdText?: boolean;
  blog:blog
}

const BlogComponent = ({mdWidth, mmdWidth, mdText, blog}:sizeProps) => {
  const isWidth: string = mdWidth ? "md:w-[200px]" : "md:";
  const isText: string = mdText ? "md:hidden" : ""
  const isTextSize: string = mdText ? "md:text-2xl md:font-medium" : "";


  return (
    <div className={`h-[600px] md:h-full ${isWidth } h-full lg:max-w-[800px]` }> 
      <Link to={`postpage/${blog.id}`} className="h-full flex flex-col gap-4">
        <div className="max-h-[430px]">
            <img src={blog.image} className='h-full w-full object-cover object-center' />
        </div>
        <p className='uppercase font-medium hover:underline cursor-pointer'>{blog.slug}</p>
        <div className={`capitalize w-[95%] text-4xl font-Blogtitle font-bold hover:underline cursor-pointer ${isTextSize}`}>
          {blog.title}
        </div>
        <div className={`${isText}`}>
            {blog.content.slice(0,210) + '...'}
        </div>
        <h2 className='uppercase font-medium text-sm'>{blog.author}</h2>
      </Link>
    </div>
  )
}

export default BlogComponent;