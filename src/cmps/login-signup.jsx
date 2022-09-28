import { useRef } from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, modalType, signup } from "../store/user.action"


export const LoginSignup = () => {

    const currModalType = useSelector(state => state.userModule.currModalType)
    const [isSignup, setIsSignup] = useState(false)
    const [credentials, setCredentials] = useState({
        fullname: '',
        username: '',
        password: '',
    })
    const dispatch = useDispatch()

    const inputRef = useRef()

    // useEffect(() => {
    //     clearState()
    //     // dispatch(loadStays())
    //     return () => {
    //         clearState()
    //     }
    // }, [])

    const clearState = () => {
        const credentials1 = {
            fullname: '',
            username: '',
            password: '',
        }
        setCredentials(prevCredentials => ({ ...credentials1 }))
    }

    const onLogin = async (ev) => {
        ev.preventDefault()
        // if (!this.state.credentials.username || !this.state.credentials.password) return
        try {
            // await login(credentials)
            dispatch(login(credentials))
            dispatch(modalType(''))
            clearState()
        } catch (err) {
            console.log('faild to login', err);

        }
    }

    const onSignup = async (ev) => {
        ev.preventDefault()
        // if (!this.state.credentials.fullname || !this.state.credentials.username || !this.state.credentials.password) return
        // const { credentials } = this.state
        try {
            // await signup(credentials)
            dispatch(signup(credentials))
            dispatch(modalType(''))
            clearState()
        } catch (err) {
            console.log('faild to sign-up', err);

        }

    }

    // const toggleSignup = () => {
    //     setIsSignup(prevIsSignup => !prevIsSignup)
    // }

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setCredentials(prevCredentials => ({ ...prevCredentials, [field]: value }))
    }

    if (currModalType === 'login' || currModalType === 'signup') return (

        <section className="login-signup-main-wrapper">
            {(currModalType === 'login') && <div className="login-wrapper">
                <div className="title">Log-in</div>
                <form onSubmit={onLogin}>
                    <label >
                        <input
                            ref={inputRef}
                            type="text"
                            name='username'
                            value={credentials.username}
                            onChange={handleChange}
                            placeholder='User-name'
                            autoComplete="off" />
                    </label>
                    <label >
                        <input
                            type="password"
                            name='password'
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            autoComplete="off" />
                    </label>
                    <button>Log-in</button>
                    {/* <button type='button' onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button> */}
                </form>
            </div>}
            {(currModalType === 'signup') && <div className="signup-wrapper">
                <div className="title">Signup</div>
                <form onSubmit={onSignup}>
                    <label >
                        <input
                            type="text"
                            name='fullname'
                            value={credentials.fullname}
                            onChange={handleChange}
                            placeholder='Full-name'
                            autoComplete="off" />
                    </label>
                    <label >
                        <input
                            type="text"
                            name='username'
                            value={credentials.username}
                            onChange={handleChange}
                            placeholder='User-name'
                            autoComplete="off"
                        />
                    </label>
                    <label >
                        <input
                            type="password"
                            name='password'
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            autoComplete="off" />
                    </label>
                    <button>Sign-up</button>
                    {/* <button type='button' onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button> */}
                </form>
            </div>}
        </section>
    )
}