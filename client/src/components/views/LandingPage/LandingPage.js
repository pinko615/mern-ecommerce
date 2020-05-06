import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Icon, Card, Col, Row } from 'antd'
import ImageSlider from '../../utils/ImageSlider'
const { Meta } = Card


function LandingPage() {

    const [Products, setProducts] = useState([])

    useEffect(() => {
        Axios.post('/api/product/getProducts')
        .then(response => {
            if(response.data.success) {
                setProducts(response.data.products);
                console.log(response.data.products);
            } else {
                alert('Failed to fetch product data')
            }
        })
    })

    const renderCards = Products.map((product, index) => {
        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<ImageSlider images={product.images} />}
            >
                <Meta 
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })

    return (
        <div style={{ width:'75%', margin:'3rem auto' }}>
            <div style={{ textAlign:'center' }}>
                <h2>Let's Travel Anywhere <Icon type="rocket" /></h2>
            </div>

            {/* filter */}

            {/* search */}

            {Products.length === 0 ?
                <div style={{ display:'flex', height:'300px', justifyContent:'center', alignItems:'center' }}>
                    <h2>No post yet...</h2>
                </div> :
                <div>
                    <Row gutter={[16,16]}>
                        {Products.map((product, index) => {})}
                        {renderCards}
                    </Row>
                </div>
            }
                <br /><br />
                <div style={{ display:'flex', justifyContent:'center' }}>
                    <button>Load more</button>
                </div>
        </div>
    )
}

export default LandingPage
