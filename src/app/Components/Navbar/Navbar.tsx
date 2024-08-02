import React from 'react'
import '../Cosmetics/Navbar.css'
import NavItems from '../Data/NavItems'
import logo from '../../../assets/Atlassian_Logo.png'
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
                    <div className='search-icon'>
                        <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="_1bsb1tcg _4t3i1tcg _1pbykb7n _1otx14rb _1tindoyu"><path d="M17.0918 18.5623L20.2497 21.7201" stroke="#101214" strokeWidth="2.75" strokeLinecap="round"></path><path d="M10.8417 19.1316C15.289 19.1316 18.8943 15.5263 18.8943 11.079C18.8943 6.63165 15.289 3.02637 10.8417 3.02637C6.39435 3.02637 2.78906 6.63165 2.78906 11.079C2.78906 15.5263 6.39435 19.1316 10.8417 19.1316Z" stroke="#101214" strokeWidth="2.25"></path></svg>
                    </div>
                    <div className='user-login'>
                        <div className='divider'></div>
                        <div>
                            <h3 className='user-sign-in'>Sign In</h3>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
export default Navbar