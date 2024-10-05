import img from '../assets/hurricane.webp'

interface blog {
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
  blog?: blog
}

const MiniCards2 = ({blog}:blogProp) => {
  return (
    <div>
      <div className='flex items-center justify-between border-b-2 gap-2 pb-4 md:w-[300px] lg:w-[350px]'>
        <div className='w-[80%] hover:underline cursor-pointer font-medium'>{blog?.title}</div>
        <div className='w-[130px] h-[110px]'>
          <img src={blog?.image} className='h-full w-full object-cover object-center' />
        </div>
      </div>
    </div>
  )
}

export default MiniCards2;