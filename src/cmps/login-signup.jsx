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

    useEffect(() => {
        // dispatch(loadStays())
    }, [])

    const onLogin = async (ev) => {
        ev.preventDefault()
        // if (!this.state.credentials.username || !this.state.credentials.password) return
        try {
            // await login(credentials)
            dispatch(login(credentials))
            dispatch(modalType(''))

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


    return (

        <section className="login-signup-main-wrapper">
       {(currModalType === 'login') &&<div className="login-wrapper">
                <form onSubmit={onLogin}>
                <label >
                <input
                    type="text"
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder='user-name' />
                </label>
                <label >
                <input
                    type="text"
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Enter password" />
                </label>
                <button>Log-in</button>
                {/* <button type='button' onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button> */}
                </form>
            </div>}
            {(currModalType === 'signup') &&<div className="signup-wrapper">
                <form onSubmit={onSignup}>
                <label >
                <input
                    type="text"
                    name='fullname'
                    value={credentials.fullname}
                    onChange={handleChange}
                    placeholder='full-name' />
                </label>
                <label >
                <input
                    type="text"
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder='user-name' />
                </label>
                <label >
                <input
                    type="text"
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Enter password" />
                <button>Sign-up</button>
                </label>
                {/* <button type='button' onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button> */}
                </form>
            </div>}
        </section>
    )
}