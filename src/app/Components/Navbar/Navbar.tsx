import React, {useEffect} from 'react'
import '../Cosmetics/Navbar.css'
import NavItems from '../Data/NavItems'
import { navLists } from '../Data/NavList';

function Navbar() {
    const _navItems = new NavItems(navLists)
    const [navList, setNavList] = React.useState<string[]>([])
    useEffect(()=> {
        setNavList(_navItems.getItems())
    },[])

    return (
        <>
            <div className='Navbar'>
                <div className="Navbrand">
                    <div className='brandLogo'>
                        <svg viewBox="0 0 32 32" height="32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                            <defs>
                                <linearGradient id="uid18" x1="14.8402" y1="15.8324" x2="8.6599" y2="26.5369" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#C1C7D0" offset="0%"></stop>
                                    <stop stopColor="#FFFFFF" offset="0.9228"></stop>
                                </linearGradient>
                            </defs>
                            <path fill="url(#uid18)" d="M11.6397 14.0398C11.2789 13.643 10.7378 13.679 10.4852 14.148L4.64091 25.8728C4.42446 26.3418 4.74912 26.8829 5.25419 26.8829H13.4074C13.6599 26.8829 13.9125 26.7386 14.0207 26.4861C15.7885 22.8424 14.7061 17.3227 11.6397 14.0398Z"></path>
                            <path fill="#FFFFFF" d="M15.9343 3.36124C12.6513 8.55622 12.8678 14.2923 15.0324 18.6215C17.1969 22.9506 18.8565 26.2336 18.9647 26.4861C19.0729 26.7386 19.3254 26.8829 19.578 26.8829H27.7312C28.2363 26.8829 28.597 26.3418 28.3445 25.8728C28.3445 25.8728 17.3774 3.93846 17.0887 3.39732C16.8723 2.89225 16.259 2.85618 15.9343 3.36124Z"></path>
                        </svg>
                    </div>

                </div>
                <div className='NavMenu'>
                    <ul className='nav-items'>
                        <svg width="61px" height="26px" viewBox="0 0 61 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2967_1690)"><path d="M31.2078 5.90745H33.4436V17.1052C33.4436 20.0579 32.1134 22.1192 29.0285 22.1192C27.8681 22.1192 26.9625 21.9242 26.3398 21.7013V19.5565C27.0191 19.835 27.8398 19.9743 28.6606 19.9743C30.5568 19.9743 31.2078 18.8601 31.2078 17.2445V5.90745Z" fill="#101214"></path><path d="M37.5475 5.04395C38.4248 5.04395 39.0475 5.57319 39.0475 6.52027C39.0475 7.43949 38.4248 7.99659 37.5475 7.99659C36.6701 7.99659 36.0475 7.46734 36.0475 6.52027C36.0475 5.60105 36.6701 5.04395 37.5475 5.04395ZM36.4437 9.75147H38.5946V22.0077H36.4437V9.75147Z" fill="#101214"></path><path d="M43.9152 22.0077H41.8209V9.75146H43.9152V11.8963C44.6511 10.4478 45.8964 9.4172 48.3303 9.55648V11.6178C45.585 11.3392 43.9152 12.147 43.9152 14.7654V22.0077Z" fill="#101214"></path><path d="M58.3775 19.8072C57.585 21.4228 56.085 22.2584 54.1605 22.2584C50.8492 22.2584 49.1794 19.5008 49.1794 15.8796C49.1794 12.4256 50.9341 9.50077 54.4152 9.50077C56.2265 9.50077 57.6416 10.3086 58.3775 11.8963V9.75147H60.5284V22.0077H58.3775V19.8072ZM54.7265 20.3086C56.6511 20.3086 58.3492 19.1108 58.3492 16.381V15.4061C58.3492 12.6763 56.7926 11.4785 54.953 11.4785C52.5473 11.4785 51.302 13.0384 51.302 15.8796C51.3303 18.8322 52.519 20.3086 54.7265 20.3086Z" fill="#101214"></path><path d="M19.9721 3.40039H10.1797C10.1797 5.79593 12.1608 7.74579 14.5948 7.74579H16.4061V9.44496C16.4061 11.8405 18.3872 13.7904 20.8212 13.7904V4.23605C20.8212 3.76251 20.4533 3.40039 19.9721 3.40039Z" fill="#1868DB"></path><path d="M15.1323 8.19141H5.33984C5.33984 10.5869 7.32098 12.5368 9.75494 12.5368H11.5663V14.2638C11.5663 16.6594 13.5474 18.6092 15.9814 18.6092V9.02706C15.9814 8.58138 15.6134 8.19141 15.1323 8.19141Z" fill="#1868DB"></path><path d="M10.2925 13.0107H0.5C0.5 15.4063 2.48113 17.3561 4.91509 17.3561H6.72641V19.0553C6.72641 21.4509 8.70755 23.4007 11.1415 23.4007V13.8464C11.1415 13.3729 10.7453 13.0107 10.2925 13.0107Z" fill="#1868DB"></path></g></svg>
                        <span className='nav-list'>
                            {
                                navList.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))
                            }
                        </span>

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
