import React from 'react'
import { Button, Icon, Col } from 'antd'

function UserCardBlock(props) {

    const renderCartImage = (images) => {
        if (images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (
        props.products && props.products.map(product => (
            <div key={product._id}>
                <Col lg={12}>
                <div>
                <img className="cart-img" alt="product" src={renderCartImage(product.images)} />
                </div>
                <h2 className="cart-title"> Trip to <span>{product.title}</span>
                </h2>
                <p className="cart-price">Price per person: <span>${product.price}</span></p>
                <Button size="large" shape="round" style={{color:'#6420F7', marginBottom:'30px'}}
                onClick={() => props.removeItem(product._id)}
                ><Icon type="delete" />Remove</Button>
                </Col>
                
                    
                    
                
                

            </div>
        ))
    )


    return (
        <div>
       {renderItems()}
       </div>
                
    )
}

export default UserCardBlock
