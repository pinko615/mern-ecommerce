import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <div className="footer-copyright">Made by <a href="https://github.com/pinko615">Pinko</a>. All right reserved</div>
        </div>
    )
}

export default Footer
