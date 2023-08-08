
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
        productImg: "https://getpeppermint.co/wp-content/uploads/2023/07/new-45.webp",
        productTitle: "Scrubber Dryer"
    }
]


const Products = () => {
    return (
        <div>
            {
                products.map(product => (
                    <div className="bg-white w-[370px] p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
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
    );
};

export default Products;
