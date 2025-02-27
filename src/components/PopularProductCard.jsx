import { star } from "../../assets/icons"

const PopularProductCard = ({imgUrl, name, price}) => {
  return (
    <div className="flex flex-1 w-full flex-col max:sm:w-full">
        <img src={imgUrl} alt={name} className='w-[282px] h-[282px]'/>
    <div className="mt-8 flex justify-start gap-2 5">
      <img src={star} alt="rating" width={24} height={24} />
      <p className="text-xl font-montserrat text-slate-gray">(4.5)</p>
    </div>
    <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
    <p className="font-montserrat text-2xl leading-normal text-coral-red">{price}</p>
    </div>
  )
}

export default PopularProductCard