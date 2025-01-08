
import { Fragment } from 'react'
// import Hero from './Hero'
import Product from './Product'
import WhyUs from './WhyUs'
import ChairProduct from './ChairProduct'
import ClothesProduct from './ClothesProduct'
const Home = () => {
  return (
    <Fragment >
      {/* <Hero/> */}
      <Product/>
      <ChairProduct/>
      <ClothesProduct/>
      <WhyUs/>
    </Fragment>

  )
}

export default Home
