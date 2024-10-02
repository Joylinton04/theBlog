import { createBrowserRouter } from 'react-router-dom';
import Landingpage from '../pages/Landingpage';
import Layout from '../layout/Layout';
import PostPage from '../pages/PostPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Landingpage/>
            },
            {
                path: 'postpage',
                element: <PostPage/>
            }
        ]
    }
])

export default router;