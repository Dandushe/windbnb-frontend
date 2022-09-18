import { useState } from "react";
import { NavLink } from "react-router-dom";
import { StayFilter } from "./app-filter";
import React, { useRef } from "react"
import { useClickOutside } from "../hooks/useClickOutside";

export function AppHeader() {
    const [isShowen, setIsShowen] = useState(false)
    const ref = useRef()
   
    useClickOutside(ref, () => {
        setIsShowen(false)
      })

    const toggleIsShowen = () => {
        setIsShowen(prevIsShowen => !prevIsShowen)
    }
    return (
        <header className="header-wrapper main-layout full">
            <div className="main-header">
                <nav>
                    <NavLink to='/'>windbnb</NavLink>
                </nav>
                <StayFilter/>
                {/* <div className="user-menu"  onClick={toggleIsShowen}> */}
                <div className="user-menu" onClick={toggleIsShowen} ref={ref}>
                    <span>&#9776;</span>
                    <img src="https://a0.muscache.com/defaults/user_pic-225x225.png?v=3" />
            
                   {isShowen && <div className="dropdown-content">
                        <span>Notifications</span>
                        {/* <a href="">Notifications</a> */}
                        <span>Account</span>
                        <span>Help</span>
                        <span>Log out</span>
                    </div>}
                </div>
            </div>
        </header>
    )
}