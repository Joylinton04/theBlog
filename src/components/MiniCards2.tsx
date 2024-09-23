import img from '../assets/img1.jpg'

const MiniCards2 = () => {
  return (
    <div>
      <div className='flex items-center justify-between border-b-2 gap-2 pb-4 md:w-[300px] lg:w-[350px]'>
        <div className='w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel accusantium illum pariatur odit</div>
        <div className='w-[130px] h-[110px]'>
          <img src={img} className='h-full w-full object-cover object-center' />
        </div>
      </div>
    </div>
  )
}

export default MiniCards2;