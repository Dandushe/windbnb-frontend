
import { useState } from "react"
import { NavLink } from "react-router-dom"
import Dropzone from 'react-dropzone'
import { utilService } from "../services/util.service"
import { uploadImg } from "../services/upload-service"
import { iconService } from "../services/icon.service"

export const BecomeHost = () => {
    const [tabIdx, setTabIdx] = useState(0)
    const [stay, setStay] = useState({
        name: '',
        propertyType: '',
        roomType: '',
        capacity: 4,
        beds: 1,
        bedrooms: 1,
        bathrooms: 1,
        description: 'You`ll have a great time at this comfortable place to stay.',
        price: 35,
        category: '',
        address: {
            country: 'Israel',
            city: 'TLV',
            street: 'Bugrashov',
            location: {
                lat: -156.68083166296285,
                lan: 20.88321046395682
            },
        },
        amenities: [],
        imgUrls: []
    })

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
        console.log('newAmenities', newAmenities);
        setStay(prevStay => ({ ...prevStay, amenities: newAmenities }))
    }

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setStay(prevReservation => ({ ...prevReservation, [field]: value }))
    }

    const changeTabIdx = (diff) => {
        // ev.preventDefault();
        // const lastTabIdx = tabIdx === 0 ? 0: -1
        // let nextTabIdx = tabIdx + diff
        // console.log(Object.keys(stay).length);

        // const idxMaxLength = (Object.keys(stay).length)
        const idxMaxLength = 9
        const lastTabIdx = tabIdx === 0 ? 0 : +1
        let nextTabIdx = tabIdx + diff
        if (nextTabIdx < 0) {
            return setTabIdx(lastTabIdx)
        } else if (nextTabIdx === idxMaxLength) {
            return setTabIdx(0)
        }
        console.log(diff);
        setTabIdx(prevTabIdx => prevTabIdx += diff)
    }

    // const toggCategory= ({ target }) => {
    //     const toggledRoomType = target.name
    //     let newRoomTypes = [...filterBy.roomTypes]
    //     if (newRoomTypes.includes(toggledRoomType)) {
    //         newRoomTypes = newRoomTypes.filter(type => type !== toggledRoomType)
    //     } else {
    //         newRoomTypes.push(toggledRoomType)
    //     }
    //     setFilterBy(prevFilterBy => ({ ...prevFilterBy, roomTypes: newRoomTypes }))
    // }

    const onUploadImg = async (ev) => {
        const newImgUrls = await uploadImg(ev)
        setStay(prevStay => ({ ...prevStay, imgUrls: [...prevStay.imgUrls, newImgUrls] }))
    }
    
    const onRemoveImg =(imgIdx)=>{
        // let newImgUrls =[ ...stay.imgUrls]
        // console.log('newImgUrls',newImgUrls);
        // newImgUrls = stay.imgUrls.filter(img => img[idx] !== imgIdx)
        // let newImgUrls = stay.imgUrls.splice(idx)
        // setStay(prevStay => ({ ...prevStay, imgUrls: [ newImgUrls] }))
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
        'Cabins'
    ]


    console.log('stay', stay);
    return (
        <section className="become-host-main-wrapper">
            <section className="side-wrapper">
                {/* <button onClick={()=>onRemoveImg(1)}></button> */}
                <div className="questions-con">
                    {tabIdx === 0 && <div>What kind of place will you host?</div>}
                    {tabIdx === 1 && <div>What kind of space will guests have?</div>}
                    {tabIdx === 2 && <div>How many guests would you like to welcome?</div>}
                    {tabIdx === 3 && <div>Let guests know what your place has to offer</div>}
                    {tabIdx === 4 && <div>Watch full video Next, let's add some photos of your place</div>}
                    {tabIdx === 5 && <div>Let's give your place a name</div>}
                    {tabIdx === 6 && <div>Now, let's describe your place</div>}
                    {tabIdx === 7 && <div>Now for the fun part—set your price</div>}
                    {tabIdx === 8 && <div>Select the category that describe your place the best</div>}
                    {iconService.AccessIcn}
                </div>
            </section>
            <section className="details-editor-wrapper">
                <div className="hompage-link"><NavLink to='/'>Back to home pgae</NavLink></div>
                {(tabIdx === 0) && <div className="property-type-con">
                    {/* <h1>What kind of place will you host?</h1> */}
                    <div className={(stay.propertyType === 'Apartment') ? 'active' : ''} onClick={() => onSelectValue('propertyType', 'Apartment')}>Apartment</div>
                    <div className={(stay.propertyType === 'House') ? 'active' : ''} onClick={() => onSelectValue('propertyType', 'House')}>House</div>
                    <div className={(stay.propertyType === 'Secondary unit') ? 'active' : ''} onClick={() => onSelectValue('propertyType', 'Secondary unit')}>Secondary unit</div>
                    <div className={(stay.propertyType === 'Uniqe space') ? 'active' : ''} onClick={() => onSelectValue('propertyType', 'Uniqe space')}>Uniqe space</div>
                    <div className={(stay.propertyType === 'Bed and breakfast') ? 'active' : ''} onClick={() => onSelectValue('propertyType', 'Bed and breakfast')}>Bed and breakfast</div>
                    <div className={(stay.propertyType === 'Boutiqe hotel') ? 'active' : ''} onClick={() => onSelectValue('propertyType', 'Boutiqe hotel')}>Boutiqe hotel</div>
                </div>}
                {(tabIdx === 1) && <div className="room-type-con">
                    {/* <h1>What kind of space will guests have?</h1> */}
                    <div className={(stay.roomType === 'Entire place') ? 'active' : ''} onClick={() => onSelectValue('roomType', 'Entire place')}>An entire place</div>
                    <div className={(stay.roomType === 'Shared room') ? 'active' : ''} onClick={() => onSelectValue('roomType', 'Shared room')}>A shared room</div>
                    <div className={(stay.roomType === 'Privet room') ? 'active' : ''} onClick={() => onSelectValue('roomType', 'Privet room')}>A privet room</div>
                </div>}

                {(tabIdx === 2) && <div className="capacity-con">
                    {/* <h1>How many guests would you like to welcome?</h1> */}
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

                {(tabIdx === 3) && <div className="amenities-con">
                    {/* <div>Do you have any standout amenities?</div> */}
                    {amenities.map((item) => {
                        return <div key={item} className={stay.amenities.includes(item) ? 'active' : ''} onClick={() => onSelectAmenity(item)}>{item}</div>
                    })}
                </div>}

                {(tabIdx === 4) && <Dropzone onDrop={onUploadImg}>
                    {({ getRootProps, getInputProps }) => (
                        <section className="drop-warapper">
                            <div className="drop-con"{...getRootProps()}>
                                <input {...getInputProps()} />
                                {!stay.imgUrls.length && <div className="do-it">
                                    <h2>Drag your photos here</h2>
                                    <p>Add at least 5 photos</p>
                                </div>}
                                {stay.imgUrls.length && < div className="drop-gallery-wrapper">
                                    <div className={`img-con cover ${stay.imgUrls[0] ? 'full' : ''}`}>
                                        {stay.imgUrls[0] && <img src={stay.imgUrls[0]} alt="one" />}
                                    </div>
                                    <div className={`img-con ${stay.imgUrls[1] ? 'full' : ''}`}>
                                        {stay.imgUrls[1] && <img src={stay.imgUrls[1]} alt="one" />}
                                    </div>
                                    <div className={`img-con ${stay.imgUrls[2] ? 'full' : ''}`}>
                                        {stay.imgUrls[2] && <img src={stay.imgUrls[2]} alt="one" />}
                                    </div>
                                    <div className={`img-con ${stay.imgUrls[3] ? 'full' : ''}`}>
                                        {stay.imgUrls[3] && <img src={stay.imgUrls[3]} alt="one" />}
                                    </div>
                                    <div className={`img-con ${stay.imgUrls[4] ? 'full' : ''}`}>
                                        {stay.imgUrls[4] && <img src={stay.imgUrls[4]} alt="one" />}
                                    </div>
                                </div>}
                            </div>
                        </section>
                    )}
                </Dropzone>}

                {(tabIdx === 5) && <div className="listing-title-con">
                    <div className="listing-title">Create your title</div>
                    <div className="listing-subtitle">Your listing title should highlight what makes your place special.</div>
                    <textarea
                        name="name"
                        value={stay.name}
                        onChange={handleChange}
                        placeholder={`Lovely ${stay.bedrooms}-bedroom ${stay.propertyType} in Tel-Aviv`}
                    ></textarea>
                </div>}

                {(tabIdx === 6) && <div className="description-con">
                    <div className="description-title">Create your description</div>
                    <textarea
                        name="description"
                        value={stay.description}
                        onChange={handleChange}
                    >{stay.description}</textarea>
                </div>}

                {(tabIdx === 7) && <div className="pricing-con">
                    <div className="setting-price">
                        <button className="btn btn-dec" disabled={stay.price <= 35} onClick={() => onSelectValue('price', stay.price - 10)}>-</button>
                        {/* <div>{stay.price}</div> */}
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
                    <div>Keep in mind, places like yours usually range from ₪161 to ₪269.</div>
                </div>}

                {(tabIdx === 8) && <div className="categories-con">
                    {categories.map((item) => {
                        return <div key={item} className={stay.category.includes(item) ? 'active' : ''} onClick={() => onSelectValue('category', item)}>{item}</div>
                    })}
                </div>}

                <div className="paging-wrapper" >
                    <div className="progressbar-con">
                        <progress value={tabIdx + 1} max={10} className="progressbar" />
                    </div>
                    <div className="paging-btns-con">
                        <button className="btn-back" onClick={() => changeTabIdx(-1)}>Back</button><button className="btn-next" onClick={() => changeTabIdx(1)}>{tabIdx}Next</button>
                    </div>
                </div>
            </section>
        </section >
    )

}