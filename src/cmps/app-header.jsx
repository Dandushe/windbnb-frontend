import { useState } from "react";
import { NavLink } from "react-router-dom";
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

    useClickOutside(ref, () => {
        setIsShowen(false)
    })

    const toggleIsShowen = () => {
        setIsShowen(prevIsShowen => !prevIsShowen)
    }

    const onlogOut =()=>{

        dispatch(modalType(''))
        dispatch(logout())
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
                    <span>&#9776;</span>
                    <div className="user-avater-con">
                    <img src="https://a0.muscache.com/defaults/user_pic-225x225.png?v=3" />
                    { user &&<span>•</span>}
                    </div>

                    {isShowen && <div className="dropdown-content">
                        {/* <span>Notifications</span> */}
                        {/* <a href="">Notifications</a> */}
                        <span onClick={() => onSelectModalType('login')}>Log in</span>
                        <span onClick={() => onSelectModalType('signup')}>Sign up</span>
                        {/* <span>Help</span> */}
                        { user &&<span>{user.fullname}</span>}
                        { user &&<NavLink to='/user/trips'>Trips</NavLink>}
                        <span onClick={onlogOut}>Log out</span>
                    </div>}
                    {/* {isModalOpen && <div>
                        <LoginSignup />
                    </div>} */}
                </div>
            </div>
        </header>
    )
}