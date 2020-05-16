import React from 'react'
import { Row, Col } from 'antd'
import { Card, Avatar } from 'antd'
import appdesign from './app.png'
import appbtn from './app-btn.png'

const { Meta } = Card;

function Why() {
    return (
        <div>
            <div className="home">
                <h2>
                    Why Use Discover?
                </h2>
                <Row>
                    <Col span={12}>
                        <h3 style={{ color:'#6420F7', fontSize:'30px' }}>Discover the world with us, from a different perspective. Don't be a tourist!</h3>
                        <p style={{ fontSize:'16px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p style={{ fontSize:'16px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <img src={appbtn} style={{ width:'30%' }}></img>
                    </Col>
                    <Col span={12}>
                        <img src={appdesign} style={{ width:'70%', display:'block', marginLeft:'auto', marginRight:'auto'}}></img>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Why
