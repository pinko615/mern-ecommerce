import React from 'react'
import { Row, Col, Divider } from 'antd';

function Footer() {
    return (
        <footer>
        <div className="container">
            <Divider orientation="left" className="divider" />
            <Row>
            <Col span={12}>
                <div>
                    <p className="d-logo">D.</p>
                    <p className="company-address">684 Sumner Street, 90220</p>
                    <p className="company-address">California, United States</p>
                </div>
            </Col>
            <Col span={4}>
                <div>
                    <p className="section-title">Sections</p>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </div>
            </Col>
            <Col span={4}>
                <div>
                    <p className="section-title">Sections</p>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </div>
            </Col>
            <Col span={4}>
                <div>
                    <p className="section-title">Sections</p>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
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
