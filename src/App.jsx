import Hero from "./sections/Hero";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";
import SpecialOffer from "./sections/SpecialOffer";
import Services from "./sections/Services";
import PopularProducts from "./sections/PopularProducts";
import Nav from "./components/Nav";
const App = () => {
  return (
    <main>
      <section className='relative'>
        <Nav/>
      </section>
       <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'> 
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      
    </main>
  );
};

export default App;