import { RouterProvider } from "react-router-dom";
import router from "./route/Approute";
import { useEffect } from "react";
import { initializeAuthListener } from "./store/FirebaseAuth";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getToken } from "./config/tokens";

const App = () => {
  const dispatch = useDispatch();

  axios.interceptors.request.use(
    async (config) => {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    initializeAuthListener(dispatch);
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
