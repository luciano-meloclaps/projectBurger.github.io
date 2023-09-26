import React from "react";
import { Image } from "@nextui-org/react";

function BannerAboutUs() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-9 xl:p-10 p-6 justify-items-center items-center bg-pink-user-0 text-white">
      <div className="col-span-4 xl:p-10 ml-10">
        <Image
          isBlurred
          src="public\sk-uVPV_nV17Tw-unsplash.jpg"
          alt="aboutUs"
          width={800}
          height={800}
        />
      </div>
      <div className="flex-colum text-center col-span-3 ">
        <h1 className="xl:text-6xl md:text-6xl text-4xl text-red-user-0 font-title my-5">
          Sobre nosotros
        </h1>
        <p className="xl:text-xl md:text-xl text-sm text-found-user-0 font-body text-center px-10">
          Somos un restaurante de hamburguesas que se enorgullece de servir solo
          los ingredientes más frescos y de alta calidad. Nuestro objetivo es
          brindar una experiencia gastronómica única y satisfacer a nuestros
          clientes con cada bocado.
        </p>
      </div>
    </div>
  );
}

export default BannerAboutUs;
