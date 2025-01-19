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
 ><div>
  <img src={shoe.thumbnail}/> </div>
 </div>   
)}
 
export default ShoeCard