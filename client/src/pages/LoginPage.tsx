import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/login.svg";
import { auth } from "../config/firebase";
import {
  signInWithCustomToken,
} from "firebase/auth";
import axios from "axios";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(false)
      setIsLoading(prev => !prev);
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/custom-token",
        {email, password},
        { withCredentials: true }
      );
      const data = await signInWithCustomToken(auth, response.data.token)
      setIsLoading(prev => !prev);
    }catch (err){
      setError(true)
      console.log({err})
      setIsLoading(false);
    }
  };

  const toggleSignup = (): void => {
    setPassword("");
    setEmail("");
    setSignUp((prev) => !prev);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(false);
      setIsLoading((prev) => !prev);
      const { data } = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/register",
        { email, password },
        { withCredentials: true }
      );
      setIsLoading(false)
    } catch (err) {
      setError(true);
      console.log(err);
      setIsLoading(false);
    }
  };


  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen font-lora">
      <div className="flex items-center justify-center flex-wrap">
        <form
          className={`sm:border sm:border-gray-300 min-h-[450px] min-w-[400px] sm:w-[500px] pad ${
            signUp ? "lg:translate-x-[100%]" : ""
          } duration-500`}
          onSubmit={signUp ? handleSignUp : handleLogin}
        >
          {
            <h1 className="uppercase font-title text-3xl text-center">
              Blog Blound
            </h1>
          }

          {!signUp ? (
            <div className="flex flex-col gap-6 border border-gray-300 p-4 mt-6">
              <label className="font-medium text-sm" id="email">
                Email
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 p-2 w-full"
                name="email"
              />

              <label className="font-medium text-sm">Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 p-2 w-full"
                name="Password"
              />

              {/* !has account */}
              {isError && <p className="text-red-500">Invalid details</p>}

              <button
                type="submit"
                className="bg-black text-white text-sm p-2 uppercase"
              >
                {signUp ? "signup" : "Login"}
              </button>
              <p
                className="underline text-[#5b5a5a] text-sm cursor-pointer"
                onClick={toggleSignup}
              >
                {signUp ? "Already have an account? Sign in" : "Sign Up?"}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6 border border-gray-300 p-4 mt-6">
              <p className="text-center mt-4 uppercase font-semibold">
                Welcome to BlogBlound🚀
              </p>
              <label className="font-medium text-sm">Email:</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 p-2 w-full"
                name="email"
              />

              <label className="font-medium text-sm">Password:</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 p-2 w-full"
                name="Password"
              />

              {/*!has account */}
              {!isError && (
                <p className="text-red-500">Account already exists</p>
              )}

              <button
                type="submit"
                className="bg-black text-white text-sm p-2 uppercase"
              >
                {signUp ? "signup" : "Login"}
              </button>
              <p
                className="underline text-[#5b5a5a] text-sm cursor-pointer"
                onClick={toggleSignup}
              >
                {signUp ? "Already have an account? Sign in" : "Sign Up?"}
              </p>
            </div>
          )}
          {!signUp && (
            <p className="text-center mt-4 uppercase font-semibold">
              Welcome to BlogBlound🚀
            </p>
          )}
        </form>
        <img
          src={loginImg}
          alt=""
          className={`w-[460px] min-h-[450px] object-cover object-center ${
            signUp ? "lg:-translate-x-[100%]" : ""
          } duration-500`}
        />
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 z-20 w-full h-full bg-[#21212190]">
          <div className="flex justify-center items-center h-full w-full px-4 ssm:p-2">
            <div className="bg-white w-[200px] h-[200px] p-2 flex justify-center items-center rounded">
              <div className="flex flex-col items-center gap-6">
                <div className="loader2"></div>
                <div>Please Wait...</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
