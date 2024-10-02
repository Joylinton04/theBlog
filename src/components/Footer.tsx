import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="pad bg-[#ccc] mt-10">
      <div className='flex justify-center items-center'>
          <div className='flex flex-wrap gap-6 md:flex-nowrap'>
            <div className='flex flex-col gap-4'>
                <h1 className="uppercase font-title text-3xl">In Today</h1>
                <p className='w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illo quisquam, quae adipisci ut deserunt qui pariatur natus, nemo, nihil minima! Nobis et quae, aut corrupti omnis qui non laborum.</p>
                <div className='flex gap-2'>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                    <InstagramIcon/>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-lg font-semibold underline'>Category</h1>
                <ul className='flex flex-col gap-2'>
                  <li>Home</li>
                  <li>Business</li>
                  <li>Technology</li>
                  <li>Sports</li>
                  <li>Global</li>
                </ul>
            </div>
            <div className='flex gap-4 flex-col'>
              <h1 className='text-lg font-semibold underline'>Subscribe to our Newsletter</h1>
              <p className='w-[80%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde architecto, facilis doloremque, minima aliquid suscipit</p>
              <input type="text" className='rounded-[3rem] max-w-[380px] h-[55px] px-6 outline-none' placeholder='Enter your email'/>
              <button className='h-[55px] max-w-[380px] rounded-[3rem] bg-active text-white font-medium px-6 py-2'>Subscribe</button>
            </div>
          </div>
        <div></div>
    </div>
    </div>
  )
}

export default Footer;