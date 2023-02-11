
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
//JS
import { stayService } from "../services/stay.service"
import { uploadImg } from "../services/upload-service"
import { addStay } from "../store/stay.action"
//CMPS
import { LongText } from "../cmps/long-text"
import { BrandBtn } from "../cmps/brand-btn"
import { ToolTip } from "../cmps/tool-tip"
//ASSETS
import Dropzone from 'react-dropzone'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export const BecomeHost = () => {
    const user = useSelector(state => state.userModule.user)
    const [tabIdx, setTabIdx] = useState(0)
    const [isOn, setIsOn] = useState(true)
    const navigate = useNavigate()

    const [stay, setStay] = useState(stayService.getDefaultStay())

    const dispatch = useDispatch()

    const onSelectValue = (field, value) => {
        setStay(prevStay => ({ ...prevStay, [field]: value }))
    }

    const onSelectAmenity = (amenity) => {
        let newAmenities = [...stay.amenities]
        if (stay.amenities.includes(amenity)) {
            newAmenities = stay.amenities.filter(a => a !== amenity)
        } else {
            newAmenities.push(amenity)
        }
        setStay(prevStay => ({ ...prevStay, amenities: newAmenities }))
    }

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setStay(prevReservation => ({ ...prevReservation, [field]: value }))
    }

    const handleAddressChange = ({ target }) => {
        const field = target.name
        const value = target.value
        setStay(prevReservation =>
        ({
            ...prevReservation,
            address: {
                ...prevReservation.address,
                [field]: value
            }
        }))
    }

    const changeTabIdx = (diff) => {
        const idxMaxLength = 11
        const lastTabIdx = tabIdx === 0 ? 0 : +1
        let nextTabIdx = tabIdx + diff
        if (nextTabIdx < 0) {
            return setTabIdx(lastTabIdx)
        } else if (nextTabIdx === idxMaxLength) {
            return setTabIdx(0)
        }
        setTabIdx(prevTabIdx => prevTabIdx += diff)
    }

    const onUploadImg = async (ev) => {
        const newImgUrl = await uploadImg(ev)
        setStay(prevStay => ({ ...prevStay, imgUrls: [...prevStay.imgUrls, newImgUrl] }))
    }

    const onRemoveImg = (ev, imgUrl) => {
        ev.stopPropagation()
        const newImgUrls = stay.imgUrls.filter(url => url !== imgUrl)
        setStay(prevStay => ({ ...prevStay, imgUrls: newImgUrls }))
    }

    const toggleIsOn = () => {
        setIsOn(prevIsOn => !prevIsOn)
    }

    const onAddListing = async () => {
        stay.host = {
            _id: user._id,
            fullname: user.fullname,
            userImg: user.userImg,
            isSuperhost: false,
        }
        await dispatch(addStay(stay))
        navigate('/dashboard/listing')
    }

    const amenities = [
        'TV',
        'Cable TV',
        'Wifi',
        'Air conditioning',
        'Wheelchair accessible',
        'Pool',
        'Kitchen',
        'Free parking on premises',
        'Gym',
        'Elevator',
        'Hot tub',
        'Heating',
        'Washer',
        'Dryer',
        'Smoke detector',
        'First aid kit',
        'Hair dryer',
        'Laptop friendly workspace',
        'Self check-in',
    ]
    const categories = [
        'Amazing views',
        'Amazing pools',
        'Islands',
        'Mansions',
        'Arctic',
        'OMG!',
        'Beach',
        'Cabins',
        'Lake',
        'Bed & breakfast',
        'Campers',
        'Desert',
        'Creative spaces'
    ]
    const prevButton = {
        prevBtnIcn: <Tooltip title="go back" onClick={() => navigate('/')}>
            <IconButton>
                <NavigateBeforeIcon />
            </IconButton>
        </Tooltip>
    }

    const { country, city, street } = stay.address
    return (
        <section className="become-host-main-wrapper">
            {!isOn && <>
                <section className="side-wrapper">
                    <div className="questions-con">
                        {tabIdx === 0 && <div>What kind of place will you host?</div>}
                        {tabIdx === 1 && <div>What kind of space will guests have?</div>}
                        {tabIdx === 2 && <div>How many guests would you like to welcome?</div>}
                        {tabIdx === 3 && <div>Where's your place located?</div>}
                        {tabIdx === 4 && <div>Let guests know what your place has to offer</div>}
                        {tabIdx === 5 && <div>let's add some photos of your place</div>}
                        {tabIdx === 6 && <div>Let's give your place a name</div>}
                        {tabIdx === 7 && <div>Now, let's describe your place</div>}
                        {tabIdx === 8 && <div>Now for the fun part *set your price</div>}
                        {tabIdx === 9 && <div>Select the category that describe your place the best</div>}
                        {tabIdx === 10 && <div>Check out your listing!</div>}
                    </div>
                </section>
                <section className="details-editor-wrapper">
                    <div className="hompage-link"><NavLink to='/'>Back to home page</NavLink></div>
                    {(tabIdx === 0) && <div className="property-type-con">
                        <div className={(stay.propertyType === 'Apartment') ? 'active' : ''} onClick={() => onSelectValue('propertyType', 'Apartment')}>Apartment</div>
                        <div className={(stay.propertyType === 'House') ? 'active' : ''} onClick={() => onSelectValue('propertyType', 'House')}>House</div>
                        <div className={(stay.propertyType === 'Secondary unit') ? 'active' : ''} onClick={() => onSelectValue('propertyType', 'Secondary unit')}>Secondary unit</div>
                        <div className={(stay.propertyType === 'Uniqe space') ? 'active' : ''} onClick={() => onSelectValue('propertyType', 'Uniqe space')}>Uniqe space</div>
                        <div className={(stay.propertyType === 'Bed and breakfast') ? 'active' : ''} onClick={() => onSelectValue('propertyType', 'Bed and breakfast')}>Bed and breakfast</div>
                        <div className={(stay.propertyType === 'Boutiqe hotel') ? 'active' : ''} onClick={() => onSelectValue('propertyType', 'Boutiqe hotel')}>Boutiqe hotel</div>
                    </div>}
                    {(tabIdx === 1) && <div className="room-type-con">
                        <div className={(stay.roomType === 'Entire place') ? 'active' : ''} onClick={() => onSelectValue('roomType', 'Entire place')}>An entire place</div>
                        <div className={(stay.roomType === 'Shared room') ? 'active' : ''} onClick={() => onSelectValue('roomType', 'Shared room')}>A shared room</div>
                        <div className={(stay.roomType === 'Private room') ? 'active' : ''} onClick={() => onSelectValue('roomType', 'Private room')}>A private room</div>
                    </div>}

                    {(tabIdx === 2) && <div className="capacity-con">
                        <div className="guests">
                            <div className="value-title">Guests</div>
                            <div className="nums-con">
                                <button className="btn btn-dec" disabled={stay.capacity === 1} onClick={() => onSelectValue('capacity', stay.capacity - 1)}>-</button>
                                <span>{stay.capacity}</span>
                                <button className="btn btn-inc" onClick={() => onSelectValue('capacity', stay.capacity + 1)}>+</button>
                            </div>
                        </div>
                        <div className="beds">
                            <div className="value-title">Beds</div>
                            <div className="nums-con">
                                <button className="btn btn-dec" disabled={stay.beds === 1} onClick={() => onSelectValue('beds', stay.beds - 1)}>-</button>
                                <span>{stay.beds}</span>
                                <button className="btn btn-inc" onClick={() => onSelectValue('beds', stay.beds + 1)}>+</button>
                            </div>
                        </div>
                        <div className="bedrooms">
                            <div className="value-title">Bedrooms</div>
                            <div className="nums-con">
                                <button className="btn btn-dec" disabled={stay.bedrooms === 1} onClick={() => onSelectValue('bedrooms', stay.bedrooms - 1)}>-</button>
                                <span>{stay.bedrooms}</span>
                                <button className="btn btn-inc" onClick={() => onSelectValue('bedrooms', stay.bedrooms + 1)}>+</button>
                            </div>
                        </div>
                        <div className="bathrooms">
                            <div className="value-title">Bathrooms</div>
                            <div className="nums-con">
                                <button className="btn btn-dec" disabled={stay.bathrooms === 1} onClick={() => onSelectValue('bathrooms', stay.bathrooms - 1)}>-</button>
                                <span>{stay.bathrooms}</span>
                                <button className="btn btn-inc" onClick={() => onSelectValue('bathrooms', stay.bathrooms + 1)}>+</button>
                            </div>
                        </div>
                    </div>}

                    {(tabIdx === 3) && <div className="address-con">
                        <form >
                            <input
                                name="country"
                                type="text"
                                value={country}
                                onChange={handleAddressChange}
                                placeholder="Enter your county"
                                autoComplete="off"
                            />
                            <input
                                name="city"
                                value={city}
                                type="text"
                                onChange={handleAddressChange}
                                placeholder="Enter your city"
                                autoComplete="off"

                            />
                            <input
                                type="text"
                                value={street}
                                name="street"
                                onChange={handleAddressChange}
                                placeholder="Enter your street"
                                autoComplete="off"
                            />
                        </form>
                    </div>}

                    {(tabIdx === 4) && <div className="amenities-con">
                        {amenities.map((item) => {
                            return <div key={item} className={stay.amenities.includes(item) ? 'active' : ''} onClick={() => onSelectAmenity(item)}>{item}</div>
                        })}
                    </div>}

                    {(tabIdx === 5) && <Dropzone onDrop={onUploadImg}>
                        {({ getRootProps, getInputProps }) => (
                            <section className="drop-warapper">
                                <div className="drop-con"{...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {!stay.imgUrls.length && <div className="do-it">
                                        <h2>Drag your photos here</h2>
                                        <p>Add at least 5 photos</p>
                                    </div>}
                                    {!!stay.imgUrls.length && < div className="drop-gallery-wrapper">

                                        {[0, 1, 2, 3, 4].map((idx) => {
                                            const imgUrl = stay.imgUrls[idx]
                                            return <div key={idx} className={`img-con ${!idx && 'cover'} ${imgUrl ? 'full' : ''}`}>
                                                {imgUrl && <>
                                                    <span className="img-menu-icon"><ToolTip cb={onRemoveImg} imgUrl={imgUrl} /></span>
                                                    <img src={imgUrl} alt="property" />
                                                </>}
                                            </div>
                                        })}
                                    </div>}
                                </div>
                            </section>
                        )}
                    </Dropzone>}

                    {(tabIdx === 6) && <div className="listing-title-con">
                        <div className="listing-title">Create your title</div>
                        <div className="listing-subtitle">Your listing title should highlight what makes your place special.</div>
                        <textarea
                            name="name"
                            value={stay.name}
                            onChange={handleChange}
                            placeholder={`Lovely ${stay.bedrooms}-bedroom ${stay.propertyType} in Tel-Aviv`}
                            maxlength='50'
                        ></textarea>
                        <div>{stay.name.length} / 50</div>
                    </div>}

                    {(tabIdx === 7) && <div className="description-con">
                        <div className="description-title">Create your description</div>
                        <textarea
                            name="description"
                            value={stay.description}
                            onChange={handleChange}
                            maxlength='500'
                        >{stay.description}</textarea>
                        <div>{stay.description.length} / 500</div>
                    </div>}

                    {(tabIdx === 8) && <div className="pricing-con">
                        <div className="setting-price">
                            <button className="btn btn-dec" disabled={stay.price <= 35} onClick={() => onSelectValue('price', stay.price - 10)}>-</button>
                            <div className="input-con">
                                <input
                                    type="number"
                                    name="price"
                                    value={stay.price}
                                    onChange={handleChange}
                                />
                                <div>per night</div>
                            </div>
                            <button className="btn btn-inc" onClick={() => onSelectValue('price', stay.price + 10)}>+</button>
                        </div>
                        <div className="info">Keep in mind, places like yours usually range from ₪161 to ₪269.</div>

                        <div className="tips-con">
                            <span>Offer a 20% discount for your first 3 guests to help you get booked faster</span>
                        </div>
                    </div>}

                    {(tabIdx === 9) && <div className="categories-con">
                        {categories.map((item) => {
                            return <div key={item} className={stay.category.includes(item) ? 'active' : ''} onClick={() => onSelectValue('category', item)}>{item}</div>
                        })}
                    </div>}
                    {(tabIdx === 10) && <div className="preview-listing-wrapper">
                        <div className="preview-img-con">
                            <img src={stay.imgUrls[0]} alt="cover-img" />
                        </div>
                        <div className="preview-header">
                            <h2>{stay.name}</h2>
                        </div>
                        <div className="preview-property">
                            <span>{stay.roomType} {stay.propertyType} hosted by {user.fullname}</span>
                            <div className="avatar-con">
                                <img src={user.userImg} alt="avater" />
                            </div>
                        </div>
                        <div className="preview-capacity">
                            <div className="proprietary-info-con">
                                <span>{stay.capacity} guests </span>  •
                                <span>{stay.bedrooms} bedrooms </span> •
                                <span>{stay.beds} {stay.beds > 1 ? ' beds' : ' bed'}</span> •
                                <span>{stay.bathrooms} bath </span>
                            </div>
                        </div>
                        <div className="preview-desc">
                            <p><LongText text={stay.description} limit={40} /></p>
                        </div>
                        <div className="preview-location">
                            <h4>Location</h4>
                            <div>{stay.address.street}, {stay.address.city}, {stay.address.country}</div>
                        </div>
                    </div>}

                    <div className="paging-wrapper" >
                        <div className="progressbar-con">
                            <progress value={tabIdx + 1} max={11} className="progressbar" />
                        </div>
                        <div className="paging-btns-con">
                            <button className="btn-back" onClick={() => changeTabIdx(-1)}>Back</button>{(tabIdx !== 10) && <button className="btn-next" onClick={() => changeTabIdx(1)} disabled={tabIdx === 11}>Next</button>}
                            {(tabIdx === 10) && <button className="btn-save-listing" onClick={onAddListing}>Save your listing</button>}
                        </div>
                    </div>
                </section>
            </>}

            {isOn && <><section className="side-con">
                {prevButton.prevBtnIcn}
                <div>Open your door to hosting</div>
                <BrandBtn text={'Try hosting'} cb={toggleIsOn} />
            </section>
                <section className="video-wrapper">
                    <video id="hostVideo" autoPlay controls >
                        <source src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4?imformat=h265" type="" />
                    </video>
                </section>
            </>}
        </section >
    )

}