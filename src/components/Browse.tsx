import { useEffect, useState } from "react"
import Header from "./Header"
import Product from "./Product"
import { Col, Row } from "antd"
import Spinner from "./Spinner"

const Browse=()=>{
    // const[loading,setloading]=useState(false)
    const[products,setProducts]=useState([])
    const[loading,setloading]=useState(false)
    const API_URL="https://fakestoreapi.com/products"
    
    const fetchProduct=async ()=>{
        setloading(true)
        try{
            const data=await fetch(API_URL)
            const resposne=await data.json()
            setProducts(resposne)
            console.log(resposne)

        }catch(e){
            console.log(e,"error")
            setProducts([])
            
        }finally{
            setloading(false)

        }
    }
    useEffect(()=>{
        fetchProduct()

    },[])
    return (
        <>
        <Header/>
        <Row>
        <Col >
        <div className="productSection">
            {loading?(<Spinner/>):(null)}
            {products.length>0?(products.map((prod)=>(<Product key={prod.id} prod={prod}/>))):(<p>
                No Data avaliable
            </p>)}

        </div>
        </Col>
        </Row>
        </>
    )
}
export default Browse