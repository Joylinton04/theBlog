import { createBrowserRouter } from 'react-router-dom';
import Landingpage from '../pages/Landingpage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landingpage/>
    }
])

export default router;