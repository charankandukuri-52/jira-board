import React from 'react'
import '../Cosmetics/Navbar.css'
import NavItems from '../Data/NavItems'
import logo from '../../../assets/Atlassian_Logo.png'
import { FaSearch } from "react-icons/fa";
import { navLists } from '../Data/NavList';

function Navbar() {
    const _navItems = new NavItems(navLists)
    const [navList, setNavList] = React.useState<string[]>(_navItems.getItems())

    return (
        <>
            <div className='Navbar'>
                <div className="Navbrand">
                    <img src={logo} alt="" height={'40px'} />
                </div>
                <div className='NavMenu'>
                    <ul className='nav-items'>
                        {
                            navList.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className='NavSearch'>
                    <div className='Free-btn'>
                        <button className='free-btn'> <h2>Get it  Free</h2></button>
                    </div>
                    <div className='nav-search-input'>
                        <input type="text" placeholder='Search your Jiras..' />
                    </div>
                    <FaSearch />

                </div>
                <div className='user-login'>
                    <h3 className='user-sign-in'>Sign In</h3>
                </div>
            </div>

        </>
    )
}
export default Navbar