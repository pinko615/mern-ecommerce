import React, { useState, useEffect } from 'react'
import { Button, Descriptions, Rate } from 'antd'
import { Row, Col, Divider } from 'antd';
import { Progress } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {
        setProduct(props.detail)
    }, [props.detail])

    const addToCartHandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <p style={{ fontFamily:'Catamaran, sans serif', fontSize:'16px', fontWeight:'600', color:'#6420F7', marginTop:'10px'}}>
                {Product.country}
            </p>
            <h1 style={{ marginTop:'20px'}}>Travel to {Product.title} 🛫</h1>
            <p style={{ fontFamily:'Catamaran, sans serif', fontSize:'16px', marginTop:'10px'}}>
                {Product.description}
            </p>
            <h3 style={{ fontSize:'20px', fontWeight:'600', marginTop:'20px'}}>What to do? ✨</h3>
            <p style={{ fontFamily:'Catamaran, sans serif', fontSize:'16px', marginTop:'10px'}}>
                {Product.todo}
            </p>
            <Row justify="start">
                <Col span={4}> <Progress style={{color:'red'}} percent={50} showInfo={false} /></Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
            </Row>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Sold"> {Product.sold}</Descriptions.Item>
                <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
            </Descriptions>
            <Rate allowHalf defaultValue={4.5} />
            <br />
            <br />
            <br />
            <div style={{ display:'flex', justifyContent: 'left' }}>
                <Button size="large" style={{ backgroundColor:'#6420F7', color:'white', border:'none', fontWeight:'600' }} shape="round" onClick={addToCartHandler}>
                    Book your trip
                </Button>
            </div>
        </div>
    )
}

export default ProductInfo
