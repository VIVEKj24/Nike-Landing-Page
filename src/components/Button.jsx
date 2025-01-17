const Button = ({label,iconUrl}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full text-white bg-coral-red">
        {label}
        <img src={iconUrl} className="ml-2  rounded-full w-5 h-5" alt="arrow right"/>
    </button>
  )
}

export default Button