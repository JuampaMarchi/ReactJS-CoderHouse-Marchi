import { buildQueries } from '@testing-library/dom';
import { findByLabelText } from '@testing-library/dom'
import React from 'react'
import CartWidget from './CartWidget'

const navStyles = {
    display: 'flex',
    listStyleType: 'none'
}
const itemStyle = {
    marginRight: '15px',

}

function NavBar(){

    return (
        <div style={{backgroundColor: 'blue'}}>
            <ul style={navStyles}>
                <li style={itemStyle}>Home</li>
                <li style={itemStyle}>Quienes Somos</li>
                <li style={itemStyle}>Galeria</li>
                <li style={itemStyle}>Productos</li>
                <li style={itemStyle}></li>
            </ul>
        </div>
    )
}

export default NavBar;