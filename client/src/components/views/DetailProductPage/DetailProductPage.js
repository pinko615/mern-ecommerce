import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd'
import ProductImage from './Sections/ProductImage'
import ProductInfo from './Sections/ProductInfo'
import { addToCart } from '../../../_actions/user_actions'
import { useDispatch } from 'react-redux'

function DetailProductPage(props) {

    const dispatch = useDispatch()

    const productId = props.match.params.productId
    const [Product, setProduct] = useState([])

    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    }, [])

    const addToCartHandler = (productId) => {
        dispatch(addToCart(productId))

    }

    return (
        // <div className="postPage" style={{ width:'85%', margin:'auto' }}>
        //     <div style={{ display:'flex', justifyContent:'left' }}>

        //     </div>
            
        //     <br />

        //     <Row gutter={40, 40}>
        //         <Col style={{margin:'auto'}} lg={12} xs={24}>
        //             <ProductImage detail={Product} />
        //         </Col>
        //         <Col lg={12} xs={24}>
        //             <ProductInfo
        //             addToCart={addToCartHandler}
        //             detail={Product} />
        //         </Col>
        //     </Row>  
        // </div>

        <div className="postPage container">
            <div>
                <h1 className="mt-20">
                    Travel to {Product.title}
                </h1>
            </div>
            <div>
                <p className="country">
                    {Product.country}
                </p>
            </div>
            <ProductImage detail={Product} />
            <ProductInfo
                addToCart={addToCartHandler}
                detail={Product}
            />  
        </div>
    )
}

export default DetailProductPage
