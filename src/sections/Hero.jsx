import Button from "../components/Button"
import {arrowRight} from '../../assets/icons/index'
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section id="home" className=" w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2 border-red-600 ">
      <div className="relative xl:w-2/5 flex flex-col justify-center w-full items-start max-xl:padding-x mt-28">
        <p>Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[83]">
          <span className="max-xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The  New Arrival</span>
          <br/>
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p> Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label ="Shop now"
        iconUrl={arrowRight}/>

        <div className="flex flex-row justify-start    items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stat,index)=>(
            <div key={stat.value}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero