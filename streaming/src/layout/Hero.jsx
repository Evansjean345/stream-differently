import React from "react";

export default function Hero() {
  return (
    <>
      <article>
        <div className="bg-black">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to</span>
              <span className="block text-red-700">stream differently ?</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0"></div>
          </div>
        </div>
      </article>
    </>
  );
}
 