'use client'
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import falcon from "../../_assets/imageslide/falcon1.png";
import ffm from "../../_assets/imageslide/ffm1.png";
import hdfc from "../../_assets/imageslide/hdfc2.png";
import hyper from "../../_assets/imageslide/hyper1.png";
import idfc from "../../_assets/imageslide/idfc1.png";
import kubota from "../../_assets/imageslide/kubota1.png";
import mani from "../../_assets/imageslide/mani1.png";
import marut from "../../_assets/imageslide/marut1.png";
import vioq from "../../_assets/imageslide/vioq1.png";

const brands = [falcon, ffm, hdfc, hyper, idfc, kubota, mani, marut, vioq];

const Marquee = () => {
  const marqueeRef = useRef(null);
  const firstMarqueeRef = useRef(null);
  const secondMarqueeRef = useRef(null);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      const marqueeAnimation = gsap.to([firstMarqueeRef.current, secondMarqueeRef.current], {
        xPercent: -100,
        repeat: -1,
        duration: 20,
        ease: "none",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-emerald-950 py-6 overflow-x-hidden relative" ref={marqueeRef}>
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-[20vw] h-full bg-gradient-to-r from-emerald-950 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-[20vw] h-full bg-gradient-to-r from-transparent to-emerald-950 z-10"></div>

      {/* Marquee container */}
      <div className="flex relative ">
        {/* First set of images */}
        <div ref={firstMarqueeRef} className="flex min-w-full w-[900%] md:w-[400%] lg:w-[200%] justify-around items-center shrink-0 ">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              width={120}
              height={80}
              className="w-auto h-20 rounded-xl object-contain transition-transform hover:scale-110 "
            />
          ))}
        </div>
        
        {/* Second set of images for seamless loop */}
        <div ref={secondMarqueeRef} className="flex min-w-full w-[900%] md:w-[400%] lg:w-[200%] justify-around items-center shrink-0 ">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              width={120}
              height={80}
              className="w-auto h-20 rounded-xl object-contain transition-transform hover:scale-110 "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
