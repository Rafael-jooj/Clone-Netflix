import React from 'react'
import './Header.css'

const Header = ({black})=>{
    return(
        <header className={black ? 'escuro' : ''}>
            <div className='header-logo'>
                <a href="/">
                    <img src='./logo.png' alt='logo'></img>
                </a>
            </div>
            <div className='header-user'>
                <img src='https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg' alt='usuario'></img>    
            </div>
        </header>
    )
}

export default Header;