import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Navbar */}

      {/* Fullscreen Image */}
      <div className="h-full w-full">
        <Image
          src="/assets/img-3.png"
          alt="Fullscreen Image"
          // layout="fill"
          // objectFit="cover"
          // priority
          width={800}
          height={600}
          className="w-full h-[500px]"
        />
      </div>
    </div>
  );
};

export default Banner;
