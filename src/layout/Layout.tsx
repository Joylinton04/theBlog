import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop'

const Layout = () => {
  return (
    <div className='min-h-[100vh] font-lora text-[#333333]'>
        <ScrollToTop/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout;