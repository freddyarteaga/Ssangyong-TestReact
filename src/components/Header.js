import React from 'react'
import './Header.css'
import SsanyongLogo from '../assets/Ssangyong_logo.png'

const Header = () => {
    return ( 
        <div className="header">
            <div className="header_logo">
                <img src={SsanyongLogo} alt="Ssangoyong logo" style={{height: '70px'}}/>
            </div>
            <div className="header_center">
                <p>XLV</p>
                <p>TIVOL</p>
                <p>KORANDO</p>
                <p>KORANDO C</p>
                <p>REXTON</p>
                <p>REXTON SPORTS</p>
            </div>
            <div className="header_right">
                <p>Tienda Virtual</p>
                <p>Repuestos</p>
                <p>Ayuda</p>
            </div>
        </div>
     );
}
 
export default Header;