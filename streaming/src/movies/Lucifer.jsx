import { React, useState } from "react";
import "../index.css";
import Footer from "../layout/Footer";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const ObjTrailer = {
  videoTrailer: "https://c.tenor.com/dgUy2OURsk4AAAAd/lucifer.gif",
  title: "Lucifer",
  text: `Lassé et mécontent de sa position de "Seigneur des Enfers", Lucifer Morningstar démissionne et abandonne le trône de son royaume pour la bouillonnante et non moins impure Los Angeles.`,
  videoModal: "https://www.dailymotion.com/embed/video/x83asjo",
};

const saison1_2 = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div class="rounded-lg h-64 overflow-hidden">
        <iframe
          class="rounded-lg h-64 w-full overflow-hidden"
          src="https://www.dailymotion.com/embed/video/x5stjmq"
          title="t"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
          allowfullscreen="true"
        ></iframe>
      </div>
      <Link to="#" class="text-red-700 text-xl inline-flex items-center mt-3">
        saison 1
      </Link>
    </div>
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div class="rounded-lg h-64 overflow-hidden">
        <iframe
          class="rounded-lg h-64 w-full overflow-hidden"
          src="https://www.dailymotion.com/embed/video/x4llbb7"
          title="t"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
          allowfullscreen="true"
        ></iframe>
      </div>
      <Link to="#" class="text-red-700 text-xl inline-flex items-center mt-3">
        saison 2
      </Link>
    </div>
  </div>
);
const saison3_4 = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div class="rounded-lg h-64 overflow-hidden">
        <iframe
          class="rounded-lg h-64 w-full overflow-hidden"
          src="https://www.dailymotion.com/embed/video/x74rqkx"
          title="t"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
          allowfullscreen="true"
        ></iframe>
      </div>
      <Link to="#" class="text-red-700 text-xl inline-flex items-center mt-3">
        saison 3
      </Link>
    </div>
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div class="rounded-lg h-64 overflow-hidden">
        <iframe
          class="rounded-lg h-64 w-full overflow-hidden"
          src="https://www.dailymotion.com/embed/video/x76lk1e"
          title="to"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
          allowfullscreen="true"
        ></iframe>
      </div>
      <Link to="#" class="text-red-700 text-xl inline-flex items-center mt-3">
        saison 4
      </Link>
    </div>
  </div>
);
const saison5_6 = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div class="rounded-lg h-64 overflow-hidden">
        <iframe
          class="rounded-lg h-64 w-full overflow-hidden"
          src="https://www.dailymotion.com/embed/video/x810eui"
          title="t"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
          allowfullscreen="true"
        ></iframe>
      </div>
      <Link to="#" class="text-red-700 text-xl inline-flex items-center mt-3">
        saison 5
      </Link>
    </div>
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div class="rounded-lg h-64 overflow-hidden">
        <iframe
          class="rounded-lg h-64 w-full overflow-hidden"
          src="https://www.dailymotion.com/embed/video/x83asjo"
          title="l"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
          allowfullscreen="true"
        ></iframe>
      </div>
      <Link to="#" class="text-red-700 text-xl inline-flex items-center mt-3">
        saison 6
      </Link>
    </div>
  </div>
);

const data = [
  {
    label: "saison 1-2",
    value: "action",
    desc: saison1_2,
  },
  {
    label: "saison 3-4",
    value: "drame",
    desc: saison3_4,
  },
  {
    label: "saison 5-6",
    value: "sf",
    desc: saison5_6,
  },
];

function TooHotToHandle() {
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
                  voir Film
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
                  Lucifer
                </h1>
                <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  Lucifer est une série télévisée américaine créée par Tom
                  Kapinos, adaptée du personnage de bandes dessinées créée par
                  Neil Gaiman, Sam Kieth et Mike Dringenberg, publié chez
                  Vertigo DC Comics (ou adaptée du comics de Mike Carey,
                  lui-même dérivé du Sandman de Neil Gaiman). Lucifer
                  Morningstar, le personnage principal, est interprété par Tom
                  Ellis. Lucifer y est présenté comme un ange déchu qui, lassé
                  de devoir garder l'Enfer, vient vivre parmi les humains sur
                  Terre, à Los Angeles.
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
                      <p class="leading-relaxed text-lg">
                        Voir les autres saisons
                      </p>

                      <div className="text-red-600  text-xl  inline-flex items-center mt-4 animate-[bounce_1s_infinite]">
                        cliquer sur la saison
                        <AiOutlineArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*section Season Hero End */}
            {/*section Tabs Start  */}
            <section>
              <Tabs id="custom-animation" value="html" className="bg-black">
                <TabsHeader>
                  {data.map(({ label, value }) => (
                    <Tab
                      className="text-red-700 text-xl rounded-lg  hover:bg-white active:bg-red-700 active:text-white hover:text-red-700  hover:text-2xl transition-all"
                      key={value}
                      value={value}
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                >
                  {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                      {desc}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </section>
            {/*section Tabs End  */}
          </div>
        </section>
        {/* Other Video End */}
      </>
      <Footer />
    </div>
  );
}

export default TooHotToHandle;
