import { useState } from "react";
import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
//JS
import { logout } from "../store/user.action";
import { modalType } from "../store/stay.action";
//CMPS
import { useClickOutside } from "../hooks/useClickOutside";
import { StayFilter } from "./app-filter";


export const AppHeader = () => {

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const pillRef = useRef()

    const user = useSelector(state => state.userModule.user)
    const currModalType = useSelector(state => state.stayModule.currModalType)
    const [isShown, setIsShown] = useState(false)
    const defaultImg = 'https://res.cloudinary.com/dwnu4ghut/image/upload/v1664096494/windbnb/user_pic.png'

    useClickOutside(pillRef, () => {
        setIsShown(false)
    })

    const toggleIsShown = () => {
        setIsShown(prevIsShown => !prevIsShown)
    }

    const onLogOut = () => {
        onSelectModalType('')
        dispatch(logout())
        navigate('/')
    }

    const onSelectModalType = (type) => {
        dispatch(modalType(type))
    }

    return (
        <header className="header-wrapper main-layout full">

            <div className={`main-header ${(currModalType === 'expended-pill') ? 'expended' : ''}`}>

                <Link to='/' className="logo">
                    <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664797356/LOGOOO_og9lqv.png" alt="logo" />
                </Link>

                {location.pathname.startsWith('/dashboard') ?
                    <nav className="dashboard-nav">
                        <NavLink to="/dashboard/listing">Listings</NavLink>
                        <NavLink to="/dashboard/reservation">Reservations</NavLink>
                        <NavLink to='/dashboard/trips'>Trips</NavLink>
                    </nav> :
                    <StayFilter />}

                <div className="user-menu">
                    {(user && !location.pathname.startsWith('/dashboard')) && <>
                        {!!user.listingsCount && <span className="host-link"><Link to='/dashboard/listing'>Switch to hosting</Link></span>}
                        {!user.listingsCount && <span className="host-link"><Link to='/host'>Become a host</Link></span>}
                    </>}
                    <div className="user-pill-menu-con" onClick={toggleIsShown} ref={pillRef}>
                        <span>&#9776;</span>
                        <div className="user-avater-con">
                            <img src={user?.userImg || defaultImg} alt="Profile pic" />
                            {user && <span>•</span>}
                        </div>

                        {isShown && <div className="dropdown-content">
                            {user && <Link to='/dashboard/trips'>Trips</Link>}
                            {user && <Link to='/dashboard/listing'>Manage listings</Link>}
                            {!user && <span onClick={() => onSelectModalType('login')}>Log in</span>}
                            {!user && <span onClick={() => onSelectModalType('signup')}>Sign up</span>}
                            {user && <Link to='/user/profile'>Account</Link>}
                            {user && <span onClick={onLogOut}>Log out</span>}
                        </div>}
                    </div>
                </div>
            </div>


        </header>
    )
}