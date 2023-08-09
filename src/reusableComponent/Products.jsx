
import React from 'react';
import Button from '../subcomponent/Button';

const products = [
    {
        id: 1,
        productImg: "https://getpeppermint.co/wp-content/uploads/2023/07/new-45.webp",
        productTitle: "Scrubber Dryer"
    },
    {
        id: 1,
        productImg: "https://getpeppermint.co/wp-content/uploads/2023/04/Untitled-design-59.png",
        productTitle: "TUG AMR"
    },
    {
        id: 1,
        productImg: "https://getpeppermint.co/wp-content/uploads/2023/07/SD-45-Gen2-With-Mopper-View-1-1024x700-1.webp",
        productTitle: "Combo Map"
    }
]


const Products = () => {
    return (
        <div className='mt-[10px] py-[100px] bg-neutral-300'>
            <h1 className='text-center text-4xl font-bold mb-10'>Our Products</h1>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                {
                    products.map(product => (
                        <div className="bg-transparent w-[370px] p-6 rounded-lg shadow-2xl flex flex-col justify-center items-center">
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
