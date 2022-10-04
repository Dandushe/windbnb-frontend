import { useRef } from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { modalType } from "../store/stay.action"
import { login, signup } from "../store/user.action"


export const LoginSignup = () => {

    const currModalType = useSelector(state => state.stayModule.currModalType)
    const [credentials, setCredentials] = useState({
        fullname: '',
        username: '',
        password: '',
    })
    const dispatch = useDispatch()

    const inputRef = useRef()

    useEffect(() => {
        if (inputRef.current)
            inputRef.current.focus()
    }, [currModalType])

    const clearState = () => {
        const defaultCredentials = {
            fullname: '',
            username: '',
            password: '',
        }
        setCredentials({ ...defaultCredentials })
    }

    const onLogin = async (ev) => {
        ev.preventDefault()
        try {
            dispatch(login(credentials))
            dispatch(modalType(''))
            clearState()
        } catch (err) {
            console.log('faild to login', err);

        }
    }

    const onSignup = async (ev) => {
        ev.preventDefault()

        try {
            dispatch(signup(credentials))
            dispatch(modalType(''))
            clearState()
        } catch (err) {
            console.log('faild to sign-up', err);
        }
    }


    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setCredentials(prevCredentials => ({ ...prevCredentials, [field]: value }))
    }

    const onSelectModalType = (type) => {
        dispatch(modalType(type))
    }

    if (currModalType === 'login' || currModalType === 'signup') return (

        <section className="login-signup-main-wrapper">
            {(currModalType === 'login') && <div className="login-wrapper">
                <div className="title">Log-in</div>
                <form onSubmit={onLogin}>
                    <input
                        ref={inputRef}
                        type="text"
                        name='username'
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder='User-name'
                        autoComplete="off" />
                    <input
                        type="password"
                        name='password'
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        autoComplete="off" />
                    <button>Log-in</button>
                    {/* <button type='button' onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button> */}
                    <span onClick={() => onSelectModalType('signup')}>Don't have an account yet?</span>
                </form>
            </div>}
            {(currModalType === 'signup') && <div className="signup-wrapper">
                <div className="title">Signup</div>
                <form onSubmit={onSignup}>
                    <input
                        type="text"
                        name='fullname'
                        value={credentials.fullname}
                        onChange={handleChange}
                        placeholder='Full-name'
                        autoComplete="off" />
                    <input
                        type="text"
                        name='username'
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder='User-name'
                        autoComplete="off"
                    />
                    <input
                        type="password"
                        name='password'
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        autoComplete="off" />
                    <button>Sign-up</button>
                    <span onClick={() => onSelectModalType('login')}>Log in</span>
                    {/* <button type='button' onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button> */}
                </form>
            </div>}
        </section>
    )
}