import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { StayFilter } from "./app-filter";
import React, { useRef } from "react"
import { useClickOutside } from "../hooks/useClickOutside";
// import { LoginSignup } from "./login-signup";
import { useDispatch, useSelector } from "react-redux";
import { logout, modalType } from "../store/user.action";

export const AppHeader = () => {
    const user = useSelector(state => state.userModule.user)
    const currModalType = useSelector(state => state.stayModule.currModalType)
    const [isShown, setIsShown] = useState(false)
    const location = useLocation()
    const defaultImg = 'https://res.cloudinary.com/dwnu4ghut/image/upload/v1664096494/windbnb/user_pic.png'
    // const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch()
    const ref = useRef()
    const navigate = useNavigate()
    useClickOutside(ref, () => {
        setIsShown(false)
    })

    const toggleIsShown = () => {
        setIsShown(prevIsShown => !prevIsShown)
    }

    const onlogOut = () => {

        dispatch(modalType(''))
        dispatch(logout())
        navigate('/')
    }

    const onSelectModalType = (type) => {
        dispatch(modalType(type))
    }
    console.log('user', user);
   
    return (
        <header className="header-wrapper main-layout full">
            {/* <div className="main-header"> */}
            <div className={`main-header ${(currModalType === 'expended-pill') ? 'expended' : ''}`}>

                <Link to='/' className="logo">windbnb</Link>

                {location.pathname.startsWith('/dashboard') ?
                    <nav className="dashboard-nav">
                        <NavLink to="/dashboard/listing">Listings</NavLink>
                        <NavLink to="/dashboard/reservation">Reservations</NavLink>
                        <NavLink to='/dashboard/trips'>Trips</NavLink>
                        {/* <Link to="/dashboard/trips">Trips</Link> */}
                    </nav> :
                    <StayFilter />}
                {/* <div className="user-menu"  onClick={toggleIsShown}> */}
                <div className="user-menu" onClick={toggleIsShown} ref={ref}>
                    {(user && !location.pathname.startsWith('/dashboard')) &&<>
                   
                        {!!user.listingsCount && <span className="host-link"><Link to='/dashboard/listing'>Switch to hosting</Link></span>}
                        {!user.listingsCount && <span className="host-link" onClick={() => onSelectModalType('')}><Link to='/host'>Become a host</Link></span>}
                    </>}
                    <div className="user-pill-menu-con">
                        <span>&#9776;</span>
                        <div className="user-avater-con">
                            <img src={user ? user.userImg : defaultImg} alt="Profile pic" />
                            {user && <span>•</span>}
                        </div>

                        {isShown && <div className="dropdown-content">
                            {user && <Link to='/dashboard/trips'>Trips</Link>}
                            <span>Wishlist</span>
                            {user && <Link to='/dashboard/listing'>Manage listings</Link>}
                            {!user && <span onClick={() => onSelectModalType('login')}>Log in</span>}
                            {!user && <span onClick={() => onSelectModalType('signup')}>Sign up</span>}
                            {/* {!user && <span><NavLink to='/host'>Become a host</NavLink></span>} */}
                            {user && <span>{user.fullname}</span>}
                            {user && <Link to='/user/profile'>Account</Link>}
                            {user && <span onClick={onlogOut}>Log out</span>}

                            {/* {user && <div>
                            <span><NavLink to='/user/profile'>Account</NavLink></span>
                            <span onClick={onlogOut}>Log out</span>
                        </div>} */}
                        </div>}
                    </div>
                </div>
            </div>


        </header>
    )
}