
import { useEffect, useState } from "react";
import API_URL from "../utils/common";
const useBrowseProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const data = await fetch(API_URL);
            const response = await data.json();
            setProducts(response);
            console.log(response,">>data")
        } catch (error) {
            console.log(error,":error")
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return { loading, products };
};

export default useBrowseProducts;
