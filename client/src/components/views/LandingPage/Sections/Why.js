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
                <h2 style={{marginTop:'70px'}}>
                    Why Use Discover?
                </h2>
                <Row>
                    <Col lg={12} xs={24}>
                        <div>
                            <div>
                        <h3>Discover the world with us, from a different perspective. Don't be a tourist!</h3>
                        <p style={{ fontSize:'16px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p style={{ fontSize:'16px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <img src={appbtn} style={{ width:'30%', marginTop:'30px' }}></img>
                        </div>
                        </div>
                    </Col>
                    <Col lg={12} xs={24}>
                        <img src={appdesign} className="mobile-img" style={{ width:'65%', display:'block', marginLeft:'auto', marginRight:'auto'}}></img>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Why
