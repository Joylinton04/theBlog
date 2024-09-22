import img1 from '../assets/img1.jpg'
interface sizeProps {
  mdWidth?: boolean;
  mmdWidth?: boolean;
  height?: boolean;
  mdText?: boolean;
}

const BlogComponent = ({mdWidth, mmdWidth, mdText}:sizeProps) => {
  const isWidth: string = mdWidth ? "md:w-[200px]" : "md:";
  const isText: string = mdText ? "md:hidden" : ""
  const isTextSize: string = mdText ? "md:text-2xl md:font-medium" : "";
  // const mmdWidth: String = ;

  return (
    <div className={`h-[600px] md:h-full ${isWidth } lg:max-w-[800px]` }>{/* {/* min-w-[450px] */} 
      <div className="h-full flex flex-col gap-4">
        <div className="h-[45%]">
            <img src={img1} className='h-full w-full object-cover object-center' />
        </div>
        <p className='uppercase font-medium'>Grand theft auto</p>
        <div className={`capitalize w-[95%] text-4xl font-Blogtitle font-bold ${isTextSize}`}>
            Grand Theft Auto V was realeased 11 years ago
        </div>
        <div className={`${isText}`}>
            Grand Theft Auto V is one of the most popular video games ever. It has sold over 250 million copies across the world. It was the first in the entertainment sector to make over 1 billion usd in just 3 days...
        </div>
        <h2 className='uppercase font-medium text-sm'>Joylinton</h2>
      </div>
    </div>
  )
}

export default BlogComponent;