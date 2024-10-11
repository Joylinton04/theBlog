import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink,Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <nav className='h-[10vh] sm:h-[130px] sticky top-0 z-50 bg-white'>
        {/* Title */}
        <div className="flex items-center justify-between border-b p-2 h-full sm:px-6 sm:h-[85px] relative">
            <div className='hidden sm:flex sm:gap-1'>
              <FacebookIcon/>
              <TwitterIcon/>
              <LinkedInIcon/>
              <InstagramIcon/>
            </div>

            {/* Mobile menu */}
            <div className='flex items-center gap-3'>
                <div className={`sm:hidden z-10 ml-2 cursor-pointer ${isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => handleMenuToggle()}>
                  {isMenuOpen ? 
                  <CloseIcon style={{fontSize: '36px'}}/>
                  :
                  <MenuIcon style={{fontSize: '36px'}}/>  
                }
                </div>
                <div className='uppercase font-title text-3xl'>in today</div>
            </div>
            {isMenuOpen 
              &&
            <div className='bg-[#000000f3] text-white fixed top-0 left-0 h-full w-[210px] md:hidden'>
              <ul className='flex flex-col gap-6 text-[#ccc] pad mt-[55px] text-lg'>
                <li onClick={() => setIsMenuOpen(prev => !prev)} className='hover:underline hover:duration-300 hover:scale-110 cursor-pointer'><Link to="/">Home</Link></li>
                <li onClick={() => setIsMenuOpen(prev => !prev)} className='hover:underline hover:duration-300 hover:scale-110 cursor-pointer'><a href="#global">Global</a></li>
                <li onClick={() => setIsMenuOpen(prev => !prev)} className='hover:underline hover:duration-300 hover:scale-110 cursor-pointer'><a href="#technology">Technology</a></li>
              </ul>
            </div>
            }


            <div className='bg-[#2E6697] text-[#f9f9f9f9] px-[0.5rem] py-1 rounded-sm text-xs'>SUBSCRIBE</div>
        </div>
        {/* Navbar */}
        <div className='hidden sm:flex sm:justify-between sm:border-b sm:h-[45px] sm:px-6 sm:w-full'>
            <div className='flex justify-between gap-6 h-full'>
              <NavLink to="/" className='flex items-center justify-center hover:bg-active hover:text-white h-full text-center px-4 cursor-pointer'>Home</NavLink>
              {/* <NavLink to="/technology" className='flex items-center justify-center hover:bg-active hover:text-white h-full text-center px-4 cursor-pointer'>Gear</NavLink> */}
              <div className='flex items-center justify-center hover:bg-active hover:text-white h-full text-center px-4 cursor-pointer'><a href="#technology">Technology</a></div>
              {/* <div className='flex items-center justify-center hover:bg-active hover:text-white h-full text-center px-4 cursor-pointer'>Sports</div> */}
              <div className='flex items-center justify-center hover:bg-active hover:text-white h-full text-center px-4 cursor-pointer'><a href="#global">Global</a></div>
            </div>
            <div className='flex items-center justify-center'>
              <SearchIcon />
            </div>
        </div>

      </nav>

  )
}

export default Navbar;