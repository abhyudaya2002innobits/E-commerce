import HeaderComponent from "./Header";
import Product from "./Product";
import { List, Row, Col,  } from "antd";
import Spinner from "./Spinner";
import useBrowseProducts from "../hooks/useBrowseProducts";


const Browse = () => {
    const { loading, products } = useBrowseProducts();

    return (
        <>
            
            {/* <Row justify="center">
                <Col span={20}> */}
                <HeaderComponent/>
                <List grid={{xs:1,sm:2,lg:3,xl:4,xxl:5}}>
                    <div className="productSection">
                        {loading ? (
                            <Spinner />
                        ) : products.length > 0 ? (
                            <Row gutter={[16, 16]}>
                                {products.map((prod:Product) => (
                                    <Col key={prod.id} xs={24} sm={12} md={8} lg={6}>
                                        <Product prod={prod} />
                                    </Col>
                                ))}
                            </Row>
                        ) : (
                            <p>No  Products....</p>
                        )}
                    </div>
                    </List>
                {/* </Col>
            </Row> */}
        </>
    );
};

export default Browse;
