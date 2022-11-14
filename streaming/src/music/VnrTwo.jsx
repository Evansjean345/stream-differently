import { React, useState } from "react";
import "../index.css";
import Footer from "../layout/Footer";
import imgVnr from "../images/bs-vnr.jpg";
//import { AiOutlineArrowDown } from "react-icons/ai";
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";

const ObjTrailer = {
  videoTrailer:
    imgVnr,
  title: "simba_93",
  text: "Freestyle VNR#2",
  videoModal:"https://www.youtube-nocookie.com/embed/aVrmOuhf9jg",
};

const SecondObj = {
  title: "Lyrics",
  text: `Et jsuis le meilleur de ma génération 
  Jte baise ta meuf et elle veut la fellation
  - [ ] Conçu pas d’taille même si il vienne à 100
  Jsuis méchant méchant pas besoin été compation
  
  Jsuis sous le porche j’prends ma ration et quand tu me parle fais attention mon gang n’est pas dans les explications on peut tout niquer tchek l’assomption j’veux être friquer peut importe la sanction
  Dans le rap jsuis trop déter la concurrence on les enterre 
  
  dans mon tieks ke des long tehrs j’veux la révolte comme les black panthères ma tess est monarchique comme en Angleterre 
  
  En aucun cas tu peux mla mettre mon rap est pur comme de la méth j’les instruit comme un maître 
  mon ekip est dur   pas bsoin de l’admettre dans ma ur on vends pas de la merde ma vie a pris une mauvaise tournure la bitch veut que je la baise tout nu au finish c’que j’voulais j’ai obtenu 
  Dans ma kitch les gos sont en tenues
  Comme modric à la Maison Blanche 
  On redetaille ce ke tu pense mon block tu pour des kilos de cons ki est 
  `,
};

export default function VnrTwo() {
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);
  return (
    <div className="bg-black m-0 p-0 h-[100vh] w-full">
      <>
        {/*Video Trailer Start */}
        <header>
          <div className="relative h-full  w-full" id="video-container">
            <img
              id="video-trailer"
              alt=""
              src={ObjTrailer.videoTrailer}
              className="object-cover sm:h-[550px] w-full"
            />
            <div
              className=" absolute bottom-0 flex flex-col z-40 bg-[rgba(0, 0, 0, 0.5)] text-white w-full p-20 bg-gradient-to-t from-black to-[rgba(0, 0, 0, 0.667)]"
              id="trailer-text"
            >
              <div>
                <h1 className="text-3xl">{ObjTrailer.title}</h1>
              </div>
              <br />
              <div>
                <p>{ObjTrailer.text}</p>
              </div>
              <br />
              <div>
                {/*Btn modal Start */}
                <label
                  id="toggler"
                  className="btn modal-button btn-wide rounded-full bg-red-700 hover:bg-white hover:text-black active:bg-red-900 focus:outline-none focus:ring focus:ring-red-900 transform hover:scale-125"
                  onClick={() => handleOpen("xl")}
                >
                  ecouter
                </label>
                <Dialog
                  open={
                    size === "xs" ||
                    size === "sm" ||
                    size === "md" ||
                    size === "lg" ||
                    size === "xl" ||
                    size === "xxl"
                  }
                  size={size || "md"}
                  handler={handleOpen}
                  className="bg-black"
                >
                  <DialogBody divider>
                    <iframe
                      id="iframe-trailer"
                      className="rounded-xl w-full"
                      width="560"
                      height="500"
                      src={ObjTrailer.videoModal}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
                      allowfullscreen="true"
                    ></iframe>
                  </DialogBody>
                  <DialogFooter>
                    <label
                      id="modal-btn"
                      className="btn modal-button btn-wide rounded-full bg-red-700 hover:bg-white hover:text-black active:bg-red-900 focus:outline-none focus:ring focus:ring-red-900"
                      onClick={() => handleOpen(null)}
                    >
                      <span>exit</span>
                    </label>
                  </DialogFooter>
                </Dialog>
              </div>
              {/*Btn modal End */}
            </div>
          </div>
        </header>
        {/*Video Trailer End */}
        {/* Other Video Start */}
        <section class="text-white body-font bg-black">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col">
              <div class="h-1 bg-gray-200 rounded overflow-hidden">
                <div class="w-[70%] h-full bg-red-700"></div>
                {/*progess bar */}
              </div>
              <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 class="sm:w-2/5 text-slate-100 font-medium title-font text-2xl mb-2 sm:mb-0">
                  {SecondObj.title}
                </h1>
                <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  {SecondObj.text}
                </p>
              </div>
            </div>
            {/*section Season Hero Start */}
            <section className="text-white body-font overflow-hidden">
              <div className="container px-5  pb-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <div className="w-20 h-20 relative ml-6">
                        <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                        <div className="text-white absolute bottom-0 left-0 bg-red-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_heading_with_icon-SVG3.svg"
                            alt="html tag"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-red-700 title-font mb-2">
                        get started to stream differently
                      </h2>
                      {/*
                    <p class="leading-relaxed">
                      Glossier echo park pug, church-key sartorial biodiesel
                      vexillologist pop-up snackwave ramps cornhole. Marfa 3
                      wolf moon party messenger bag selfies, poke vaporware
                      kombucha lumbersexual pork belly polaroid hoodie
                      portland craft beer.
                    </p> */}
                      {/*
                      <p class="leading-relaxed text-lg">
                        Voir les autres saisons
                      </p>

                      <div className="text-red-600  text-xl  inline-flex items-center mt-4 animate-[bounce_1s_infinite]">
                        cliquer sur la saison
                        <AiOutlineArrowDown />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*section Season Hero End */}
            {/*section Tabs Start  */}
            {/*section Tabs End  */}
          </div>
        </section>
        {/* Other Video End */}
      </>
      <Footer />
    </div>
  );
}
