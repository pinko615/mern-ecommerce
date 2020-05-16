import React, { useState, useEffect } from 'react'
import { Button, Rate } from 'antd'
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {
        setProduct(props.detail)
    }, [props.detail])

    const addToCartHandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div className="product-info">
                <Row gutter={[32, 32]}>
                <Col lg={16}>
                    <h3>
                        Description
                    </h3>
                    <p className="mt">
                        {Product.description}
                    </p>
                    <h3 className="mt-20">
                        What to do?
                    </h3>
                    <p className="mt">
                        {Product.todo}
                    </p>
                    <h3 className="mt-20">
                        More information
                    </h3>
                    <p className="mt">
                        {Product.info}
                    </p>
                    <Button size="large"
                            shape="round"
                            onClick={addToCartHandler}
                            className="btn mb-20">
                        Book your trip
                    </Button>
                </Col>
                <Col lg={8}>
                    <div>
                        <h3>
                            ✨ Popularity:
                        </h3>
                        <Rate value={Product.popularity} allowHalf disabled />
                    </div>
                    <div>
                        <h3 className="mt-20">
                            🌃 Nightlife:
                        </h3>
                        <Rate value={Product.nightlife} allowHalf disabled />
                    </div>
                    <div>
                        <h3 className="mt-20">
                            🎡 Attractions:
                        </h3>
                        <Rate value={Product.attractions} allowHalf disabled />
                    </div>
                    <div>
                        <h3 className="mt-20">
                            🍔 Gastronomy:
                        </h3>
                        <Rate value={Product.gastronomy} allowHalf disabled />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductInfo
