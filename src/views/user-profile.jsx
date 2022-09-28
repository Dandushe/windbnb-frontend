import Dropzone from "react-dropzone"
import { useDispatch, useSelector } from "react-redux"
import { uploadImg } from "../services/upload-service"


export const UserProfile = () => {

    const user = useSelector(state => state.userModule.user)
    const dispatch = useDispatch()

    const onUploadImg = async (ev) => {
        const newImgUrls = await uploadImg(ev)
        // setStay(prevStay => ({ ...prevStay, imgUrls: [...prevStay.imgUrls, newImgUrls] }))
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
                    <input type="email" name="email" />
                </div>
            </div>

            <section className="profile-main-content">
                <div>
                    <h1>Hi, I`m {user.fullname}</h1>
                    <div className="sub">Joined in 2022</div>
                    <form >
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
                    </form>
                </div>

            </section>

        </section>
    )
}