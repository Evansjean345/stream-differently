import React from "react";
import { AiFillFastForward } from "react-icons/ai";

export default function SecondHero() {
  let text = `Swiper pour parcourir la liste`;
  let icon = <AiFillFastForward />;
  return (
    <div className="bg-black">
      <article>
        <div className="bg-black">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Aperçu de </span>
              <span className="block ">Notre liste de diffusion</span>
              <br />
              <span className="block text-xl text-red-700 underline underline-offset-4 animate-bounce ">
                {text}
                {icon}
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0"></div>
          </div>
        </div>
      </article>
    </div>
  );
}
