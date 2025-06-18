import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../store/authSlice";
import { useAppSelector } from "../store/store";
import axios from "axios";
import { auth } from "../config/firebase";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [notAdmin, setNotAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const isAdmin = useAppSelector((state) => state.auth.currentUser?.isAdmin);
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const toggleLogout = () => {
    setIsLogout((prev) => !prev);
  };

  const handleLogOut = () => {
    setIsLoading((prev) => !prev);
    dispatch(clearUser());
    navigate("/login");
    setIsLoading((prev) => !prev);
  };

  const handlePostblog = async () => {
    try {
      setIsLoading((prev) => !prev);
      const { data } = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/isAuth"
      );
      setIsLoading((prev) => !prev);
      data.success && navigate("/newpostpage");
      !data.success && setNotAdmin(true);
    } catch (err) {
      setIsLoading(false);
      setNotAdmin(true);
    }
  };

  return (
    <nav className="h-[10vh] sm:h-[130px] sticky top-0 z-50 bg-white dark:bg-black">
      {/* Title */}
      <div className="flex items-center justify-between border-b p-2 h-full sm:px-6 sm:h-[85px] relative">
        <div className="hidden sm:flex sm:gap-1">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-3">
          <div
            className={`sm:hidden z-10 ml-2 cursor-pointer ${
              isMenuOpen ? "text-white" : "text-black"
            }`}
            onClick={() => handleMenuToggle()}
          >
            {isMenuOpen ? (
              <CloseIcon style={{ fontSize: "36px" }} />
            ) : (
              <MenuIcon style={{ fontSize: "36px" }} />
            )}
          </div>
          <div className="uppercase font-title text-3xl">
            <Link to={"/"}>Blog blound</Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="bg-[#000000f3] text-white fixed top-0 left-0 h-full w-[280px] md:hidden">
            <ul className="flex flex-col gap-6 text-[#ccc] pad mt-[55px] text-lg">
              <li
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="hover:underline hover:duration-300 hover:scale-110 cursor-pointer"
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="hover:underline hover:duration-300 hover:scale-110 cursor-pointer"
              >
                <Link to="/global">Global</Link>
              </li>
              <li
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="hover:underline hover:duration-300 hover:scale-110 cursor-pointer"
              >
                <Link to="/technology">Technology</Link>
              </li>
              {currentUser ? (
                <li
                  className="text-[#f9f9f9f9] px-[1rem] py-2 rounded-sm text-xs cursor-pointer"
                  onClick={() => toggleLogout()}
                >
                  LOGOUT
                </li>
              ) : (
                <li
                  className="text-[#f9f9f9f9] px-[1rem] py-2 rounded-sm text-xs cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  SIGNUP
                </li>
              )}
            </ul>
          </div>
        )}

        <div className="flex gap-4 items-center">
          {/* Post a blog for admins only */}
          <div
            className="bg-[#2E6697] uppercase text-[#f9f9f9f9] px-[1rem] py-2 rounded-sm text-xs cursor-pointer"
            onClick={() => handlePostblog()}
          >
            Post a Blog
          </div>
          {notAdmin && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
              <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8 animate-fadeIn">
                <h1 className="text-xl font-semibold text-center text-gray-800 mb-4">
                  🔒 Kindly sign up to access this feature
                </h1>
                <p className="text-sm text-center text-gray-600 mb-6">
                  You need an account to use this functionality. Please create
                  one or log in.
                </p>
                <div className="flex justify-center">
                  <button
                    className="uppercase px-6 py-2 text-sm font-medium bg-[#0096ff] hover:bg-[#007cd1] text-white rounded-lg transition"
                    onClick={() => setNotAdmin((prev) => !prev)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Logout */}
          {currentUser ? (
            <div
              className="bg-red-500 text-[#f9f9f9f9] px-[1rem] py-2 rounded-sm text-xs cursor-pointer hidden sm:block"
              onClick={() => toggleLogout()}
            >
              LOGOUT
            </div>
          ) : (
            <div
              className="bg-red-500 text-[#f9f9f9f9] px-[1rem] py-2 rounded-sm text-xs cursor-pointer hidden sm:block"
              onClick={() => navigate("/login")}
            >
              SIGNUP
            </div>
          )}
          {isLogout && (
            <div className="fixed top-0 left-0 z-20 w-full h-full bg-[#21212190]">
              <div className="flex justify-center items-center h-full">
                <div className="bg-white w-[350px] pad flex flex-col gap-3">
                  <h1 className="text-lg">Are you sure you want to logout ?</h1>
                  <div className="flex justify-between">
                    <button
                      className="uppercase px-6 py-2 text-sm bg-red-500 text-white"
                      onClick={() => handleLogOut()}
                    >
                      Logout
                    </button>
                    <button
                      className="uppercase px-6 py-2 text-sm bg-[#0096ff] text-white"
                      onClick={() => toggleLogout()}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
      </div>
      {/* Navbar */}
      <div className="hidden sm:flex sm:justify-between sm:border-b sm:h-[45px] sm:px-6 sm:w-full">
        <div className="flex justify-between gap-6 h-full">
          <NavLink
            to="/"
            className="flex items-center justify-center hover:bg-active hover:text-white h-full text-center px-4 cursor-pointer"
          >
            Home
          </NavLink>
          <NavLink
            to="/technology"
            className="flex items-center justify-center hover:bg-active hover:text-white h-full text-center px-4 cursor-pointer"
          >
            Technology
          </NavLink>
          <NavLink
            to="/global"
            className="flex items-center justify-center hover:bg-active hover:text-white h-full text-center px-4 cursor-pointer"
          >
            Global
          </NavLink>
        </div>
        <div className="flex items-center justify-center">
          <SearchIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
