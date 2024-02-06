
interface Product {
    
    title: string;
    description: string;
    image: string;
    price: number;
    rating:{
        rate:number
    }
    
    
}

const Product = ({ prod }: { prod: Product }) => {
    return (
        <>
            <div className="product">
                <p className="product-title">
                    {prod.title}
                </p>
                <div className="product-description">
                    <p>{prod.description.split(' ').splice(0, 10).join(' ') + '...'}</p>
                </div>
                <div className="product-image">
                    <img src={prod.image} alt="" />
                </div>
                <div className="product-rating">
                    <p>Rating {prod.rating.rate}</p>
                </div>
                <div className="price">
                    <p>${prod.price}</p>
                </div>
            </div>
        </>
    )
}

export default Product;
