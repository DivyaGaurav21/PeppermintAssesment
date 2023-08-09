
import React from 'react';
import Button from '../subcomponent/Button';



const Products = ({ products }) => {
    return (
        <div className='mt-[10px] py-[100px] bg-neutral-300'>
            <h1 className='text-center text-4xl font-bold mb-10'>Our Products</h1>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                {
                    products.map(product => (
                        <div className="bg-transparent w-[370px] p-6 rounded-lg shadow-2xl flex flex-col justify-center items-center" key={product.id}>
                            <img
                                src={product.productImg}
                                alt={product.productTitle}
                                className="mx-auto mb-7 w-[360px] h-[250px] rounded-full"
                            />
                            <h3 className="text-xl font-semibold mb-8 text-center">{product.productTitle}</h3>
                            <Button>Know More</Button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;
