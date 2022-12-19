import React from 'react'
import Cards from '../../components/Cards';
import Nav from '../../components/Nav';
import ProductsFeed from '../../components/ProductsFeed';

export default function Id({product}: any) {
  return (
    <div className=''>
       <Nav />
       <Cards 
       key={product.id}
       id={product.id}
       title={product.title}
       price={product.price * 60}
       description={product.description}
       category={product.category}
       image={product.image}
     />
      
      
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const getId = context.params.id;
  const product = await fetch(`https://fakestoreapi.com/products/${getId}`).then(res=>res.json())
  return {
    props: {
      product
    }, // will be passed to the page component as props
  }
}