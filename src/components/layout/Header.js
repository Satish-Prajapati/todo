import React from 'react'
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <h1>TODO LIST</h1>
                <Link style={linkStyle} to='/' >Home</Link> | <Link style={linkStyle} to='/about'>About Us</Link>
            </header>
        </div>
    )
}

const headerStyle = {
    textAlign: "center",
    background: "#34495e"
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}