import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop'
import ProtectedRoutes from '../utils/ProtectedRoutes';

const Layout = () => {
  return (
    <div className='min-h-[100vh] font-lora text-[#333333]'>
        <ScrollToTop/>
        <Navbar/>
        <ProtectedRoutes/>
        <Footer/>
    </div>
  )
}

export default Layout;