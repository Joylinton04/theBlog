import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop'
import ProtectedRoutes from '../utils/ProtectedRoutes';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
      <div className='min-h-[100vh] font-lora text-[#333333] dark:bg-black dark:text-white'>
          <ScrollToTop/>
          <Navbar/>
          {/* <ProtectedRoutes/> */}
          <Outlet/>
          <Footer/>
      </div>
  )
}

export default Layout;