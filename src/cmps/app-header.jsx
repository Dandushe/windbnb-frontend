import { useState } from "react";
import { NavLink } from "react-router-dom";


export function AppHeader() {
    const [isShowen, setIsShowen] = useState(false)
    


    const toggleIsShowen = () => {
        setIsShowen(prevIsShowen => !prevIsShowen)
    }
    return (
        <header className="header-wrapper main-layout full">
            <div className="main-header">
                <nav>
                    <NavLink to='/'>windbnb</NavLink>
                </nav>
                <div className="user-menu" onClick={toggleIsShowen}>
                    {/* <div className="user-pill-con"> */}
                    <span>&#9776;</span>
                    <img src="https://a0.muscache.com/defaults/user_pic-225x225.png?v=3" />
                    {/* </div> */}
                    {/* <svg viewBox="0 0 100 80" width="15" height="20">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg> */}

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