import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Navbar */}

      {/* Fullscreen Image */}
      <div className="h-full w-full">
        <Image
          src="/img-3.png"
          alt="Fullscreen Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
