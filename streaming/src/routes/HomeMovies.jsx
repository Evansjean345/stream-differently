import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeroMovies from "../components/HeroMovies";
import SliderAnimatedMovies from "../components/SliderAnimatedMovies";
import SliderAnime from "../components/SliderAnime";
import SliderHF from "../components/SliderHF";
import Footer from "../layout/Footer";
import SliderMovies from "../layout/SliderMovies";

export default function HomeMovies() {
  return (
    <>
      <div className="bg-black m-0 p-0 h-[100vh] w-full">
        <NavLink
          className="navbar bg-black fixed z-50
"
        >
          {/*Nav mobile version Start */}
          <div className="navbar-start">
            <div className="dropdown">
              {/*burger icon start */}
              <label
                tabIndex={0}
                className="btn text-white btn-ghost lg:hidden bg-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              {/*burger icon end*/}
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52"
              >
                <li>
                  <Link to="/" className="hover:bg-red-900 ">
                    home
                  </Link>
                </li>
                <li tabIndex={0}>
                  <Link
                    to="/moviesHome"
                    className="justify-between bg-red-700 transition-all hover:bg-white hover:text-black hover:text-2xl"
                  >
                    Movies
                  </Link>
                </li>
                <li>
                  <Link to="/musicsHome" className="hover:bg-red-900">
                    music
                  </Link>
                </li>
                <li>
                  <Link to="/abouts" className="hover:bg-red-900">
                    about
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*Nav mobile version End */}
          {/*Nav PC version Start */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 text-white">
              <li>
                <Link to="/" className="hover:bg-red-900 text-lg">
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/moviesHome"
                  className="text-lg bg-red-700 transition-all hover:bg-white hover:text-black hover:text-2xl"
                >
                  Movies
                </Link>
                <li className="text-lg p-2 bg-black">
                  <Link to="/musicsHome" className="hover:bg-red-900">
                    music
                  </Link>
                </li>
              </li>
              <li>
                <Link to="/abouts" className="hover:bg-red-900 text-lg">
                  about
                </Link>
              </li>
            </ul>
          </div>
          {/*Nav PC version End */}
          <div className="navbar-end">
          <Link to="" className="btn bg-gradient-to-r from-black to-red-900 text-base ">
            Stream Differently
          </Link>
          </div>
        </NavLink>
        <br />
        <br />
        <br />
        <br />
        <HeroMovies />
        <br />
        <br />
        <br />
        <br />
        <div className="bg-black">
          <SliderMovies />
          <br />
          <br />
          <SliderHF />
          <br />
          <br />
          <SliderAnime />
          <br />
          <br />
          <SliderAnimatedMovies/>
          <Footer />
        </div>
      </div>
    </>
  );
}
