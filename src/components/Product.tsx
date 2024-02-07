
import { Key } from "react";

interface Product {
    id: Key | null | undefined;
    
    title: string;
    description: string;
    image: string;
    price: number;
    rating:{
        rate:number
        count:number
    }
    
    
}

const Product = ({ prod }: { prod: Product }) => {
    return (
        <>
            {/* <List grid={{xs:1,sm:2,md:3,lg:4,xl:5,xxl:6}}> */}
            
            <div className="product">
                <p className="product-title">
                    {prod.title}
                </p>
                
                <div className="product-image">
                    <img src={prod.image} alt="" />
                </div>
                <div className="product-description">
                    <p>{prod.description.split(' ').splice(0, 10).join(' ') + '...'}</p>
                </div>
                <div className="product-rating">
                    <p>Rating {prod.rating.rate}</p>
                </div>
                <div className="product-count">
                    <p>In Stock:{prod.rating.count}</p>
                </div>
                <div className="price">
                    <p>Price: ${prod.price}</p>
                </div>
            </div>
            {/* </List> */}
        </>
    )
}

export default Product;
