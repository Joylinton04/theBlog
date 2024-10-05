import img1 from '../assets/cybertruck.webp'
interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  date: Date;
  author: string;
  image: string;
  category: string;
}

interface blogProp {
  blog: Blog
}


const BigStory = ({ blog }:blogProp) => {

  return (
    <div className='h-[600px] md:h-full'>{/* {/* min-w-[450px] */} 
      <div className="h-full flex flex-col gap-12 lg:flex-row">
        <div className="h-[45%] lg:h-[420px] lg:max-w-[1200px]">
            <img src={blog.image} className='h-full w-full object-cover object-center' />
        </div>
        <div className='flex flex-col gap-4 lg:gap-8 lg:lg:w-[300px]'>
          <p className='uppercase font-medium'>{blog.slug}</p>
          <div className="capitalize w-[95%] text-4xl font-Blogtitle font-bold hover:underline cursor-pointer">
              {blog.title}
          </div>
          <div className='lg:'>
              {blog.content.slice(0,210) + '...'}
          </div>
          <h2 className='uppercase font-medium text-sm'>{blog.author}</h2>
        </div>
      </div>
    </div>
  )
}

export default BigStory;