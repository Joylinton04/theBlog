import { createBrowserRouter } from 'react-router-dom';
import Landingpage from '../pages/Landingpage';
import Layout from '../layout/Layout';
import PostPage from '../pages/PostPage';
import NewPost from '../pages/NewPost';
import LoginPage from '../pages/LoginPage';
import Technology from '../pages/Technology';
import Global from '../pages/Global';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage/>
        
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Landingpage/>
            },
            {
                path: 'postpage/:id',
                element: <PostPage/>
            },
            {
                path: 'newpostpage',
                element: <NewPost/>
            },
            {
                path: '/technology',
                element: <Technology/>
            },
            {
                path: '/global',
                element: <Global/>
            }
        ]
    }
])

export default router;