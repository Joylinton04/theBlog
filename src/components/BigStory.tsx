import img1 from '../assets/img1.jpg'


const BigStory = () => {

  return (
    <div className='h-[600px] md:h-full'>{/* {/* min-w-[450px] */} 
      <div className="h-full flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="h-[45%] lg:h-[420px] lg:w-[70%]">
            <img src={img1} className='h-full w-full object-cover object-center' />
        </div>
        <div className='flex flex-col gap-4 lg:gap-8 lg:lg:w-[300px]'>
          <p className='uppercase font-medium'>Grand theft auto</p>
          <div className="capitalize w-[95%] text-4xl font-Blogtitle font-bold">
              Grand Theft Auto V was realeased 11 years ago
          </div>
          <div className='lg:'>
              Grand Theft Auto V is one of the most popular video games ever. It has sold over 250 million copies across the world. It was the first in the entertainment sector to make over 1 billion usd in just 3 days...
          </div>
          <h2 className='uppercase font-medium text-sm'>Joylinton</h2>
        </div>
      </div>
    </div>
  )
}

export default BigStory;