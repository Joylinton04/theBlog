import droneImg from '../assets/drones.webp'

const BlogCards = () => {
  return (
    <div className="flex gap-4 pb-6 border-b-2 md:flex-col-reverse h-full md:max-w-[400px]">
        <div className='flex flex-col gap-4 w-[80%] md:w-full'>
            <div className='font-semibold text-lg md:text-2xl'>Drone piloted by AI could be used to prevent wildfires</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum autem error delectus officia veritatis a, maxime, placeat voluptatum aspernatur dolorem incidunt nem</div>
            <div className='uppercase font-semibold text-sm'>Joylinton 2.0</div>
        </div>
        <div className='h-[75px] w-[120px] md:w-full md:h-[160px]'>
            <img src={droneImg} className='w-full h-full object-cover object-center' />
        </div>
    </div>
  )
}

export default BlogCards;