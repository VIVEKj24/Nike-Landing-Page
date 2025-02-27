
const ServiceCard = ({imgUrl, label , subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] shadow-3xl px-10 py-16">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img src={imgUrl} alt="label" width={24} height={24} />
        </div>
        <h3 className="mt-5 font-palanquin font-bold leading-normal text-3xl">{label}</h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard