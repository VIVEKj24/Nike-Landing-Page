import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"
const PopularProducts = () => {
  return (
   <section id="products" className="max-container max-sm:mt-12">
    <div className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-palanquin font-bold">Our  
        <span className="text-coral-red"> Popular </span>Products
        </h2>
      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Discover the perfect blend of comfort, style, and durability with our premium collection of shoes. We have the ideal pair to match every occasion and ensure your feet feel as great as they look!</p>
    </div>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 grid-cols-1 sm:gap-4 gap-14 ">
      {products.map((product)=>(
      <PopularProductCard key={product.name} imgUrl={product.imgURL} price={product.price} name={product.name}/>
      ))}
    </div>
   </section>
  )
}

export default PopularProducts