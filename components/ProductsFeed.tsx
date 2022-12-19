import React from 'react'
import Cards from './Cards'

export default function({ products }: any) {
  return (
    <div className="grid grid-flow-row-dense mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-40 lg:-mt-52">
       {products.slice(0,4).map((product: any) => (
        <Cards
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price * 60}
          description={product.description}
          category={product.category}
          image={product.image}
        />
       ))}
       <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />
       <div className='md:col-span-2'>
        {products.slice(4,5).map((product: any) => (
         <Cards
          key={product.id}
          id={product.id}
          title={product.title}
          price={Math.floor(product.price * 60)}
          description={product.description}
          category={product.category}
          image={product.image}
         />
        ))}
        </div>
        {products.slice(5, products.length).map((product: any) => (
         <Cards
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price * 60}
          description={product.description}
          category={product.category}
          image={product.image}
         />
        ))}
       
    </div>
  )
}