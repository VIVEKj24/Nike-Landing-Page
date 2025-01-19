import Button from "../components/Button"
import {arrowRight} from '../../assets/icons/index'
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../../assets/images/index"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
const Hero = () => {
  const [bigShoeImg,setBigShoeImg] = useState(bigShoe1)
  return (
    <section id="home" className=" w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  ">
      <div className="relative xl:w-2/5 flex flex-col justify-center w-full items-start max-xl:padding-x mt-28">
        <p>Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[83]">
          <span className="xl:bg-white xl:whitespace-nowrap font-bold relative z-10 pr-10">The  New Arrival</span>
          <br/>
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"> Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label ="Shop now"
        iconUrl={arrowRight}/>

        <div className="flex flex-row justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stat,index)=>(
            <div key={stat.value}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="text-slate-gray font-montserrat leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center  items-center xl:min-h-screen max:xl:py-40  bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} width={610} height={500} alt="" className="object-contain relative z-10 x" />
        <div >
          {shoes.map((shoe=>(
            <ShoeCard shoe={shoe} changeBigShoe={(shoe)=>{setBigShoeImg(shoe)}} bigShoeImage={bigShoeImg} />
         
          )))}
      </div>
      </div>
      
    </section>
  )
}

export default Hero