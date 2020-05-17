import React, { useState, useEffect } from 'react'
import { Button, Rate, notification, Space } from 'antd'
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
                <Col lg={14}>
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
                </Col>
                <Col lg={10}>
                    <div>
                        <Col lg={12} md={12} sm={12} xs={12}>
                        <h3>
                            ✨ Popularity:
                        </h3>
                        <Rate value={Product.popularity} allowHalf disabled />
                        </Col>
                    </div>
                    <div>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h3>
                            🌃 Nightlife:
                        </h3>
                        <Rate value={Product.nightlife} allowHalf disabled />
                        </Col>
                    </div>
                    <div>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h3>
                            🎡 Attractions:
                        </h3>
                        <Rate value={Product.attractions} allowHalf disabled />
                        </Col>
                    </div>
                    <div>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h3>
                            🍔 Gastronomy:
                        </h3>
                        <Rate value={Product.gastronomy} allowHalf disabled />
                        </Col>
                    </div>
                     <Col lg={12} md={24} sm={12} xs={12}>
                     <Button size="large"
                            shape="round"
                            onClick={addToCartHandler}
                            className="btn mb-20">
                       Book this trip for ${Product.price}
                    </Button>
                        </Col>
                    
                </Col>
                
            </Row>
        </div>
    )
}

export default ProductInfo
