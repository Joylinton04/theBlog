import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className='min-h-[100vh] font-lora'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout;