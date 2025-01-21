import { useState } from "react";

import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";

import Button from "../components/Button";

import { bigShoe1 } from "../../assets/images";
import { arrowRight } from "../../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex 2xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-6'
    >
      <div className='relative 2xl:w-2/5 flex flex-col justify-center items-start w-full max-2xl:padding-x pt-16 sm:pt-28'>
        <p className='text-lg sm:text-xl font-montserrat text-coral-red mb-2'>
          Our Summer collections
        </p>

        <h1 className='mt-8 sm:mt-10 font-palanquin text-[52px] sm:text-8xl leading-[1.1] sm:leading-[82px] font-bold'>
          <span className='2xl:bg-white 2xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-12'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-base sm:text-lg leading-7 sm:leading-8 mt-4 sm:mt-6 mb-8 sm:mb-14 max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-12 sm:mt-20 gap-8 sm:gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-3xl sm:text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='text-sm sm:text-base leading-6 sm:leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center 2xl:min-h-screen max-2xl:py-16 sm:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10 w-[85%] sm:w-auto'
        />

        <div className='flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 max-sm:justify-center w-full'>
          {shoes.map((image, index) => (
            <div key={index} className='max-sm:w-20'>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;