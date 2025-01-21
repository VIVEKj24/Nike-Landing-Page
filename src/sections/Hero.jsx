import Button from "../components/Button"
import {arrowRight} from '../../assets/icons/index'
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../../assets/images/index"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
const Hero = () => {
  const [bigShoeImg,setBigShoeImg] = useState(bigShoe1)
  return (
    <section id="home" className=" w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container relative  ">
      
      <div className="relative xl:w-2/5 flex flex-col justify-center w-full items-start max-xl:padding-x">

        <p className='text-xl max-sm:mt-5 font-montserrat text-coral-red' >Our Summer Collection</p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap font-bold relative z-10 pr-10">The  New Arrival</span>
          <br/>
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"> Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label ="Shop now"
        iconUrl={arrowRight}/>

        <div className="flex  justify-start items-start flex-wrap w-full max-sm:flex-nowrap mt-20 gap-16 ">
          {statistics.map((stat,index)=>(
            <div key={index}>
              <p className="font-palanquin text-4xl max-sm:text-3xl font-bold">{stat.value}</p>
              <p className="text-slate-gray font-montserrat leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 xl::flex-col flex justify-center items-center xl:min-h-screen max-xl:max-w-lg max-xl:py-40  bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} width={610} height={500} alt="" className="object-contain relative z-10  " />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe=>(
            <ShoeCard shoe={shoe} changeBigShoe={(shoe)=>{setBigShoeImg(shoe)}} bigShoeImage={bigShoeImg} />
         
          )))}
      </div>
      </div>
      
    </section>
  )
}

export default Hero