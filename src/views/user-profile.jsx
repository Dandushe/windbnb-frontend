import { useState } from "react"
import Dropzone from "react-dropzone"
import { useDispatch, useSelector } from "react-redux"
import { uploadImg } from "../services/upload-service"
import { update } from "../store/user.action"


export const UserProfile = () => {

    const user = useSelector(state => state.userModule.user)
    const dispatch = useDispatch()
    const [credentials, setCredentials] = useState({
        // userImg: '',
        mailAddress: ''
    })


    const onUploadImg = async (ev) => {
        const newImgUrls = await uploadImg(ev)
        // setStay(prevStay => ({ ...prevStay, imgUrls: [...prevStay.imgUrls, newImgUrls] }))
    }

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setCredentials(prevCredentials => ({ ...prevCredentials, [field]: value }))
    }

    const onSubmit = (ev) => {
        ev.preventDefault()
       const updatedCred ={...credentials}
        dispatch(update(updatedCred))
    }

    return (
        <section className="user-profile-main-wrapper">
            <div className="side-card">
                <div className="img-container ratio-square">
                    <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664096494/windbnb/user_pic.png" alt="user" />
                </div>
                <Dropzone onDrop={onUploadImg}>
                    {({ getRootProps, getInputProps }) => (
                        <section className="drop-warapper">
                            <div className="drop-con"{...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Update photo</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
                <div className="confirmation">
                    <div>
                        <div>Email verification</div>
                        <p>Add your email address</p>

                        <form onSubmit={onSubmit}>
                            <input
                                type="email"
                                name="mailAddress"
                                autoComplete="off"
                                onChange={handleChange}
                                placeholder="user@example.com" />
                        </form>
                    </div>
                </div>
            </div>

            <section className="profile-main-content">
                <div>
                    <h1>Hi, I`m {user.fullname}</h1>
                    <div className="sub">Joined in 2022</div>
                    {/* <form >
                        <label >
                            About
                            <textarea name="about"></textarea>
                        </label>
                        <label >
                            Location
                            <input type="text" name="location" />
                        </label>
                        <label >
                            Work
                            <input type="text" name="work" />
                        </label>
                    </form> */}
                </div>

            </section>

        </section>
    )
}