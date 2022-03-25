import './Header.css'
import React from 'react'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
import Constants from "./Constants";

const Header = ({ setContractAddress }) => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt=''/>
            </div>

            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} alt=''/>
                </div>
                <input
                    className='searchInput'
                    placeholder='Smart Contract Address'
                    onChange={(e) => {
                        let content = e.target.value
                        if (content)
                        {
                            setContractAddress(e.target.value)
                        }
                        else
                        {
                            setContractAddress(Constants().DefaultContractAddress)
                        }
                    }} />
            </div>

            <div className='headerItems'>
                <p>Drops</p>
                <p>MarketPlace</p>
                <p>Create</p>
            </div>

            <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} alt=''/>
                </div>
            </div>

            <div className='loginButton'>GET IN</div>
        </div>
    )
}

export default Header