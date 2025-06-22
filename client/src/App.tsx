import { RouterProvider } from "react-router-dom";
import router from "./route/Approute";
import { useEffect } from "react";
import { initializeAuthListener } from "./store/FirebaseAuth";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getToken } from "./config/tokens";
import { auth } from "./config/firebase";

const App = () => {
  const dispatch = useDispatch();

  axios.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

  useEffect(() => {
    initializeAuthListener(dispatch);
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
