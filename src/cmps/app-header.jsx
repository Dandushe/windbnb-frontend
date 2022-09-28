import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { StayFilter } from "./app-filter";
import React, { useRef } from "react"
import { useClickOutside } from "../hooks/useClickOutside";
// import { LoginSignup } from "./login-signup";
import { useDispatch, useSelector } from "react-redux";
import { logout, modalType } from "../store/user.action";

export const AppHeader = () => {
    const user = useSelector(state => state.userModule.user)
    const [isShowen, setIsShowen] = useState(false)
    // const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch()
    const ref = useRef()
    const navigate = useNavigate()
    useClickOutside(ref, () => {
        setIsShowen(false)
    })

    const toggleIsShowen = () => {
        setIsShowen(prevIsShowen => !prevIsShowen)
    }

    const onlogOut = () => {

        dispatch(modalType(''))
        dispatch(logout())
        navigate('/')
    }

    const onSelectModalType = (type) => {
        dispatch(modalType(type))
    }

    return (
        <header className="header-wrapper main-layout full">
            <div className="main-header">
                <nav>
                    <NavLink to='/'>windbnb</NavLink>
                </nav>
                <StayFilter />
                {/* <div className="user-menu"  onClick={toggleIsShowen}> */}
                <div className="user-menu" onClick={toggleIsShowen} ref={ref}>
                    <div className="host-link-con">
                        {user && <span><NavLink to='/host'>Become a host</NavLink></span>}
                    </div>
                    <div className="user-pill-menu-con">
                        <span>&#9776;</span>
                        <div className="user-avater-con">
                            <img src="https://a0.muscache.com/defaults/user_pic-225x225.png?v=3" />
                            {user && <span>•</span>}
                        </div>

                    </div>

                    {isShowen && <div className="dropdown-content">
                        {/* <span>Notifications</span> */}
                        {user && <span><NavLink to='/host'>Manage listings</NavLink></span>}
                        <span>Wishlist</span>
                        {user && <span><NavLink to='/user/trips'>Trips</NavLink></span>}
                        {!user && <span onClick={() => onSelectModalType('login')}>Log in</span>}
                        {!user && <span onClick={() => onSelectModalType('signup')}>Sign up</span>}
                        {/* {!user && <span><NavLink to='/host'>Become a host</NavLink></span>} */}
                        {user && <span>{user.fullname}</span>}
                        {user && <span><NavLink to='/user/profile'>Account</NavLink></span>}
                        {user && <span onClick={onlogOut}>Log out</span>}
                    </div>}
                    
                </div>
            </div>
        </header>
    )
}