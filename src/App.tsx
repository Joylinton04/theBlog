import { RouterProvider } from 'react-router-dom';
import router from './route/Approute';
import { useEffect } from 'react';
import { initializeAuthListener } from './store/FirebaseAuth';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initializeAuthListener(dispatch);
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;