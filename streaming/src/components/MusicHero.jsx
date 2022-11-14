import React from "react";
import "../index.css"

export default function MusicHero() {
  return (
    <div
      className="hero h-[60vh] relative"
      style={{
        backgroundImage: `url("https://i.pinimg.com/originals/9b/17/b8/9b17b8eaf90a677e8a6902cad1c061b4.gif")`,
      }}
    >
      <div className=" absolute bottom-0 flex flex-col z-40 bg-[rgba(0, 0, 0, 0.5)] text-white w-full p-12  pl-4 bg-gradient-to-t from-black to-[rgba(0, 0, 0, 0.667)]">
        <div id="div-trailer-movies-one">
          <h1 className="text-3xl">
            <b>Entrez dans la vibse de notre playlist</b>
          </h1>
        </div>
        <div id="div-trailer-movies-two">
          <h1 className="text-3xl">
            <b>
              Entrez dans  
              <br />
              la vibse de notre playlist
            </b>
          </h1>
        </div>
      </div>
    </div>
  );
}
