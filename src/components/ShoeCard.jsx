const ShoeCard = ({shoe , changeBigShoe , bigShoeImage}) => {
  //imgUrl -> The original Shoe , changeBigshoes is a setter function and bigShoesImage is empty
  const handleClick = ()=>{
    if(bigShoeImage!==shoe.bigShoe){
      changeBigShoe(shoe.bigShoe)
    }
  }
  return (
 <div className={`border-2 rounded-xl ${bigShoeImage==shoe.bigShoe ? 'border-coral-red':'border-transparent'} cursor-pointer max-sm:flex-1`}
 onClick={handleClick}
 ><div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4">
  <img src={shoe.thumbnail}
  width={127} height={103} className="object-contain"/> </div>
 </div>   
)}
 
export default ShoeCard