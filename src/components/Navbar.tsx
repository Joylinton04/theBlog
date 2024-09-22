import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <nav className='h-[10vh] sm:h-[130px] sticky top-0 z-50 bg-white'>
        {/* Title */}
        <div className="flex items-center justify-between border-b p-2 h-full sm:px-6 sm:h-[85px]">
            <div className='hidden sm:flex sm:gap-1'>
              <FacebookIcon/>
              <TwitterIcon/>
              <LinkedInIcon/>
              <InstagramIcon/>
            </div>
            <div className='flex items-center gap-3'>
                <div className='sm:hidden'><MenuIcon style={{fontSize: '28px'}}/></div>
                <div className='uppercase font-title text-3xl'>in today</div>
            </div>
            <div className='bg-[#2E6697] text-[#f9f9f9f9] px-[0.5rem] py-1 rounded-sm text-xs'>SUBSCRIBE</div>
        </div>
        {/* Navbar */}
        <div className='hidden sm:flex sm:justify-between sm:border-b sm:h-[45px] sm:px-6 sm:w-full'>
            <ul className='flex justify-between gap-6 h-full'>
              <li className='flex items-center justify-center hover:bg-active hover:text-white h-full text-center px-4 cursor-pointer'>Home</li>
              <li className='flex items-center justify-center hover:bg-active hover:text-white h-full text-center px-4 cursor-pointer'>Business</li>
              <li className='flex items-center justify-center hover:bg-active hover:text-white h-full text-center px-4 cursor-pointer'>Technology</li>
              <li className='flex items-center justify-center hover:bg-active hover:text-white h-full text-center px-4 cursor-pointer'>Sports</li>
              <li className='flex items-center justify-center hover:bg-active hover:text-white h-full text-center px-4 cursor-pointer'>Global</li>
            </ul>
            <div className='flex items-center justify-center'>
              <SearchIcon />
            </div>
        </div>

      </nav>

  )
}

export default Navbar;