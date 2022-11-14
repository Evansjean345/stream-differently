import React from "react";
import { Link, NavLink } from "react-router-dom";
import ContactForm from "../api/ContactForm";
import Footer from "../layout/Footer";

export default function About() {
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
                  <Link to="/" className="hover:bg-red-900">
                    Home
                  </Link>
                </li>
                <li tabIndex={0}>
                  <Link
                    to="/moviesHome"
                    className="justify-between hover:bg-red-900"
                  >
                    movies
                  </Link>
                </li>
                <li>
                  <Link to="/musicsHome" className="hover:bg-red-900">
                    music
                  </Link>
                </li>
                <li>
                  <Link to="/abouts" className="hover:bg-red-900 bg-red-700">
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
                <Link to="/" className="hover:bg-red-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/moviesHome" className="hover:bg-red-900 text-lg">
                  movies
                </Link>
                <li className="text-lg p-2 bg-black">
                  <Link to="/musicsHome" className="hover:bg-red-900">
                    music
                  </Link>
                </li>
              </li>
              <li>
                <Link
                  to="/abouts"
                  className="hover:bg-red-900 text-lg bg-red-700"
                >
                  about
                </Link>
              </li>
            </ul>
          </div>
          {/*Nav PC version End */}
          <div className="navbar-end">
            <Link
              to=""
              className="btn bg-gradient-to-r from-black to-red-900 text-base "
            >
              Stream Differently
            </Link>
          </div>
        </NavLink>
        <br />
        <br />
        <br />
        <div className="hero min-h-screen bg-black text-white">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://images.unsplash.com/photo-1664910059414-f7d75a61f907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="sm:w-[400px] rounded-lg drop-shadow-2xl "
              alt=""
            />
            <div>
              <h1 className="text-5xl font-bold ">Who is Stream Differently</h1>
              <p className="py-6">
                "Stream Differently" est une nouvelle plateforme ouverte
                récemment. Le but de cette plateforme indépendante est d'élargir
                son audience grâce à des partenariats qui nous permettront de
                diffuser du contenu de tout genre. Notre Objectif est de
                permettre à des personnes du monde entier de pouvoir écouter de
                la musique ou regarder des séries sans "Tabou" Que vous soyez
                artiste , vidéaste ou simplement rapper cloud désirant faire
                partir de l'aventure nous vous invitons à nous rejoindre
                n'hesitez pas à nous contacter en remplissant le formulaire
                ci-dessous pour que votre single ou votre série soit diffuser
                sur notre plateforme.
                <br />
                <h3 className="font-bold text-red-700">
                  Stream Differently : "SANS TABOU"
                </h3>
              </p>
              {/* Form */}
              <ContactForm/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
