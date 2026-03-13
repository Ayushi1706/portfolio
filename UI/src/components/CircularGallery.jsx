import React from "react";

export default function CircularGallery() {
  const items = [
    "/images/project1.png",
    "/images/project2.png",
    "/images/project3.png",
    "/images/project4.png"
  ];

  return (
    <div className="relative flex items-center justify-center h-[500px]">

      <div className="grid grid-cols-2 gap-6">

        {items.map((img, i) => (
          <div
            key={i}
            className="w-[200px] h-[200px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img
              src={img}
              alt="project"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

      </div>

    </div>
  );
}