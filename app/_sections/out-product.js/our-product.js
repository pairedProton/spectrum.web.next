'use client'
import React from "react";
import Product from "../../_components/product";
import krishi from "../../_assets/image/krishi.jpg";
import shuddh from "../../_assets/image/Shuddh.png";
import setu from "../../_assets/image/ban2.jpg";
import vikas from "../../_assets/image/vikash.jpg";


const products =[
    {
        img:krishi,
        name:'Spectrum Krishi',
        desc:'We develop climate-smart systems—like contract farming, multilayer cultivation, and agroforestry—that boost yields, enrich soil, and ensurestable incomes for farmers of all scales.',
        imgUrl:krishi,

    },
    {
        img:shuddh,
        name:'Spectrum Shuddh',
        desc:'Organic, eco-friendly processing that transforms farm-fresh produce into premium products—delivering purity, transparency, and globalquality standards for healthconscious consumers.',
        imgUrl:shuddh,
    },
    {
        img:setu,
        name:'Spectrum Setu',
        desc:'A direct B2B platform linking farmers with retailers, FMCGs, and exporters—ensuring fair prices for producers and dependable sourcing for buyers.',
        imgUrl:setu,
    },
     {
        img:vikas,
        name:'Spectrum Vikas',
        desc:'Driving agri-innovation through smart tools, research, and digital solutions—empowering future-ready,resilient rural farming.',
        imgUrl:vikas,
    },
]

const OurProduct = () => {
  return (
    <section className="w-full min-h-screen h-[150vh] lg:h-screen flex flex-col  bg-[#F5E1C9] relative">
        <h2 className="heading w-full bg-emerald-950 lg:bg-none rounded-none md:w-auto relative lg:absolute top-0 left-1/2 -translate-x-1/2 font-[curvyText] text-white  py-5 px-10 z-50 backdrop-blur-lg lg:rounded-2xl" >Our Core Operations</h2>
        <div className="flex w-full h-full flex-col lg:flex-row justify-around  " >
            {
                products.map((e,i)=>(
                    <Product img={e.img} name={e.name} desc={e.desc}  imgUrl={e.imgUrl} key={i} />
                ))
            }
        </div>
    </section>
  );
};

export default OurProduct;
