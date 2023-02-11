import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
//JS
import { uploadImg } from "../services/upload-service"
import { update } from "../store/user.action"
//ASSETS
import Dropzone from "react-dropzone"


export const UserProfile = () => {

    const user = useSelector(state => state.userModule.user)
    const dispatch = useDispatch()
    const [userToEdit, setUserToEdit] = useState(user)


    const onUploadImg = async (ev) => {
        const imgUrl = await uploadImg(ev)
        setUserToEdit(prevUserToEdit => ({ ...prevUserToEdit, userImg: imgUrl }))
    }

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setUserToEdit(prevUserToEdit => ({ ...prevUserToEdit, [field]: value }))
    }

    const onSubmit = (ev) => {
        ev.preventDefault()
        const updatedUser = { ...userToEdit }
        dispatch(update(updatedUser))
    }

    return (
        <section className="user-profile-main-wrapper">
            <div className="side-card">
                <div className="user-info">
                    <Dropzone onDrop={onUploadImg}>
                        {({ getRootProps, getInputProps }) => (
                            <section className="drop-warapper">
                                <div className="drop-con"{...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <div className="img-container ratio-square">
                                        <img src={userToEdit.userImg || 'https://res.cloudinary.com/dwnu4ghut/image/upload/v1664096494/windbnb/user_pic.png'} alt="user" />
                                    </div>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    <h3>{user.fullname}</h3>
                    <span>{user.mailAddress}</span>
                </div>
            </div>
            <form onSubmit={onSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="mailAddress">Email</label></td>
                            <td>
                                <input
                                    id="mailAddress"
                                    type="email"
                                    name="mailAddress"
                                    value={userToEdit.mailAddress}
                                    autoComplete="off"
                                    onChange={handleChange}
                                    placeholder="User@example.com" />
                            </td>
                        </tr>
                        <tr>
                            <td> <label htmlFor="username">Full Name</label></td>
                            <td>
                                <input
                                    id="username"
                                    type="text"
                                    name="username"
                                    value={userToEdit.username}
                                    autoComplete="off"
                                    onChange={handleChange}
                                    placeholder="Username" />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="fullname">Full Name</label></td>
                            <td>
                                <input
                                    id="fullname"
                                    type="text"
                                    name="fullname"
                                    value={userToEdit.fullname}
                                    autoComplete="off"
                                    onChange={handleChange}
                                    placeholder="Full Name" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button>Update</button>
            </form>


        </section>
    )
}