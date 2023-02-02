import { httpService } from './http.service.js'

// const STORAGE_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'
export const authService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    update
    
}

async function login(credentials) {
    const user = await httpService.post('auth/login', credentials)
    if (user) sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return user
}

async function signup(userInfo) {
    const user = await httpService.post('auth/signup', userInfo)
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return user

}

async function logout() {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    return await httpService.post('auth/logout')
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

async function update(user) {
    console.log('update');
    user = await httpService.put(`user/${user._id}`, user)
    return user
}
