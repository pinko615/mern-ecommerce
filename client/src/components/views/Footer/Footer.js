import React from 'react'
import { Row, Col, Divider, Icon } from 'antd';

function Footer() {
    return (
        <footer>
        <div className="container">
            <Divider orientation="left" className="divider" />
            <Row>
            <Col lg={12} md={6} sm={24} xs={24}>
                <div>
                    <p className="d-logo">D.</p>
                    <p className="company-address">684 Sumner Street, 90220</p>
                    <p className="company-address">California, United States</p>
                    <a href="/"><Icon type="facebook" className="footer-icon hide-mobile"  /></a>
                    <a href="/"><Icon type="instagram" className="footer-icon hide-mobile"  /></a>
                    
                </div>
            </Col>
            <Col lg={4} md={6} sm={24} xs={24}>
                <div className="hide-mobile">
                    <p className="section-title">Discover</p>
                    <li>
                        <a href="/">Africa</a>
                    </li>
                    <li>
                        <a href="/">Asia</a>
                    </li>
                    <li>
                        <a href="/">Europe</a>
                    </li>
                    <li>
                        <a href="/">North America</a>
                    </li>
                    <li>
                        <a href="/">South America</a>
                    </li>
                    <li>
                        <a href="/">Oceania</a>
                    </li>

                </div>
            </Col>
            <Col lg={4} md={6} sm={24} xs={24}>
                <div className="hide-mobile">
                    <p className="section-title">Interests</p>
                    <li>
                        <a href="/">Adventure Travel</a>
                    </li>
                    <li>
                        <a href="/">Art and Culture</a>
                    </li>
                    <li>
                        <a href="/">Family Holidays</a>
                    </li>
                    <li>
                        <a href="/">Festivals</a>
                    </li>
                    <li>
                        <a href="/">Road Trips</a>
                    </li>
                    <li>
                        <a href="/">Wildlife and Nature</a>
                    </li>
                </div>
            </Col>
            <Col lg={4} md={6} sm={24} xs={24}>
                <div className="hide-mobile">
                    <p className="section-title">Blog</p>
                    <li>
                        <a href="/">Best of</a>
                    </li>
                    <li>
                        <a href="/">Trip Advisors</a>
                    </li>
                    <li>
                        <a href="/">Adventure trips</a>
                    </li>
                    <li>
                        <a href="/">Best beaches</a>
                    </li>
                    <li>
                        <a href="/">Customers reviews</a>
                    </li>
                    <li>
                        <a href="/">Travel</a>
                    </li>
                    
                </div>
            </Col>
            </Row>
            <div className="copyright">
                <div>Made by<a href="https://github.com/pinko615"> Pinko</a>. All right reserved</div>
            </div>
        </div>
        </footer>
    )
}

export default Footer
