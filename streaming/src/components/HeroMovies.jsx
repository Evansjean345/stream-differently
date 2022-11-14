import React from "react";
import "../index.css"

export default function HeroMovies() {
  return (
    <div
      className="hero h-[60vh] relative"
      style={{
        backgroundImage: `url("https://c.tenor.com/KJEh_lRRiUwAAAAC/squad-you-were-saying.gif")`,
      }}
    >
      <div className=" absolute bottom-0 flex flex-col z-40 bg-[rgba(0, 0, 0, 0.5)] text-white w-full p-12  pl-4 bg-gradient-to-t from-black to-[rgba(0, 0, 0, 0.667)]">
        <div id="div-trailer-movies-one">
          <h1 className="text-3xl">
            <b>Découvrez les meilleurs films et series du moment</b>
          </h1>
        </div>
        <div id="div-trailer-movies-two">
          <h1 className="text-3xl">
            <b>
              Découvrez les meilleurs
              <br />
              films et series du moment
            </b>
          </h1>
        </div>
      </div>
    </div>
  );
}
