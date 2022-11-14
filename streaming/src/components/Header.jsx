import React from "react";

function Header() {
  const items = {
    keys: ["1", "2", "3", "4"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWZyaWNhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        alt: "header one ",
      },
      {
        src: "https://images.unsplash.com/photo-1653400518546-15244b496467?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://images.unsplash.com/photo-1630701846960-d142bc396cec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXVwaG9yaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        alt: "header two",
      },
      {
        src: "https://images.unsplash.com/photo-1629238416320-36597a283c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXVwaG9yaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        alt: "header three",
      },
    ],
  };
  return (
    <>
      <article>
        <div className="bg-black">
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 w-full h-full pb-[47px]">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                key={items.keys[0]}
                src={items.images[0].src}
                alt={items.images[0].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  key={items.keys[1]}
                  src={items.images[1].src}
                  alt={items.images[1].alt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  key={items.keys[2]}
                  src={items.images[2].src}
                  alt={items.images[2].alt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img
                key={items.keys[3]}
                src={items.images[3].src}
                alt={items.images[3].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Header;
