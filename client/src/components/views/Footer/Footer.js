import React from 'react'
import { Row, Col, Divider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <div style={{
            marginTop: '30px',
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
            <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
    </Divider>
    <Row justify="center">
      <Col span={4}><FontAwesomeIcon icon="check-square" /></Col>
      <Col span={4}><FontAwesomeIcon icon={['fab', 'google']} /></Col>
      <Col span={4}><FontAwesomeIcon icon={['fab', 'google']} /></Col>
      <Col span={4}><FontAwesomeIcon icon={['fab', 'google']} /></Col>
    </Row>
           <div className="footer-copyright">Made by <a href="https://github.com/pinko615">Pinko</a>. All right reserved</div>
        </div>
    )
}

export default Footer
