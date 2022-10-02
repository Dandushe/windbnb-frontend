import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadStays, modalType, setFilter } from "../store/stay.action"
import { Carousel } from "./carousel"
import CustomizedSlider from "./slider"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ExploreFilter = () => {
    const [filterBy, setFilterBy] = useState({
        minPrice: 40,
        maxPrice: 1000,
        roomTypes: [],
        category: ''
    })
    const currModalType = useSelector(state => state.stayModule.currModalType)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setFilter(filterBy))
        dispatch(loadStays())

    }, [filterBy.category])


    const handleRangeChange = ({ target }) => {
        const val = [...target.value]
        const MIN = val[0]
        const MAX = val[1]
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, minPrice: MIN, maxPrice: MAX }))
    }

    const handlePriceChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    const toggleRoomType = ({ target }) => {
        const toggledRoomType = target.name
        let newRoomTypes = [...filterBy.roomTypes]
        if (newRoomTypes.includes(toggledRoomType)) {
            newRoomTypes = newRoomTypes.filter(type => type !== toggledRoomType)
        } else {
            newRoomTypes.push(toggledRoomType)
        }
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, roomTypes: newRoomTypes }))
    }

    const onFilter = async (ev) => {
        ev.preventDefault()

        dispatch(setFilter(filterBy))
        dispatch(loadStays())
    }

    const onSelectModalType = (type) => {
        dispatch(modalType(type))
    }

    const onSelectValue = (field, value) => {
        if (value === filterBy.category) value = ''
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, category: value }))
    }

    return (
        <section className="explore-filter-main-wrapper ">
            <div className="filter-content-wrapper">


                <div className="category-filterbar-wrapper">
                    {/* <Slider {...settings}> */}
                    <div className={(filterBy.category === 'Amazing views') ? 'active' : ''} onClick={() => onSelectValue('category', 'Amazing views')}>
                        <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664568190/windbnb/views.png" alt="view" />
                        Amazing views</div>
                    <div className={(filterBy.category === 'Lake') ? 'active' : ''} onClick={() => onSelectValue('category', 'Lake')}>
                        <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664568378/windbnb/lake.png" alt="lake" />
                        Lakes</div>
                    <div className={(filterBy.category === 'Amazing pools') ? 'active' : ''} onClick={() => onSelectValue('category', 'Amazing pools')}>
                        <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664568136/windbnb/pool.png" alt="pool" />
                        Amazing pools</div>
                    <div className={(filterBy.category === 'Islands') ? 'active' : ''} onClick={() => onSelectValue('category', 'Islands')}>
                        <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664568088/windbnb/island.png" alt="island" />
                        Islands</div>
                    <div className={(filterBy.category === 'Mansions') ? 'active' : ''} onClick={() => onSelectValue('category', 'Mansions')}>
                        <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664568017/windbnb/mansions.png" alt="mansions" />
                        Mansions</div>
                    <div className={(filterBy.category === 'Arctic') ? 'active' : ''} onClick={() => onSelectValue('category', 'Arctic')}>
                        <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664566778/windbnb/arctic.png" alt="arctic" />
                        Arctic</div>
                    <div className={(filterBy.category === 'OMG!') ? 'active' : ''} onClick={() => onSelectValue('category', 'OMG!')}>
                        <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664566733/windbnb/omg.png" alt="omg" />
                        OMG!</div>
                    <div className={(filterBy.category === 'Beach') ? 'active' : ''} onClick={() => onSelectValue('category', 'Beach')}>
                        <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664567712/windbnb/beach.png" alt="beach" />
                        Beach</div>
                    <div className={(filterBy.category === 'Cabins') ? 'active' : ''} onClick={() => onSelectValue('category', 'Cabins')}>
                        <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664566509/windbnb/cabin.png" alt="cabin" />
                        Cabins
                    </div>
                    <div className={(filterBy.category === 'Bed & breakfast') ? 'active' : ''} onClick={() => onSelectValue('category', 'Bed & breakfast')}>
                        <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664568592/windbnb/bnb.png" alt="bnb" />
                        Bed & breakfast
                    </div>
                    <div className={(filterBy.category === 'Campers') ? 'active' : ''} onClick={() => onSelectValue('category', 'Campers')}>
                        <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664568772/windbnb/camp.png" alt="capm" />
                        Campers
                    </div>
                    <div className={(filterBy.category === 'Desert') ? 'active' : ''} onClick={() => onSelectValue('category', 'Desert')}>
                        <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664568883/windbnb/desert.png" alt="Desert" />
                        Desert
                    </div>
                    <div className={(filterBy.category === 'Creative spaces') ? 'active' : ''} onClick={() => onSelectValue('category', 'Creative spaces')}>
                        <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664569019/windbnb/creative.png" alt="creative" />
                        Creative spaces
                    </div>
                    {/* </Slider> */}
                </div>

                <button className="btn btn-filter-modal" onClick={() => onSelectModalType('filter-options')}>Filter</button>

                {(currModalType === 'filter-options') && <form className="filter-options-modal-wrapper" onSubmit={onFilter}>
                    <div className="modal-header">
                        <h3>Filters</h3>
                    </div>
                    <div className="price-range-wrapper">
                        <div className="price-range-title">
                            <h2>Price range</h2>
                            <span>The average nightly price is $84</span>
                        </div>
                        <CustomizedSlider minPrice={filterBy.minPrice} maxPrice={filterBy.maxPrice} handleChange={handleRangeChange} />

                        <div className="price-inputs-con">
                            <div className="min-con">
                                <span className="lable">min price</span>
                                <input type="number" name="minPrice" value={filterBy.minPrice} onChange={handlePriceChange} min="0" max="1000" />
                            </div>

                            <div className="max-con">
                                <span className="lable">max price</span>
                                <input type="number" name="maxPrice" value={filterBy.maxPrice} onChange={handlePriceChange} min="0" max="1000" />
                            </div>
                        </div>
                    </div>
                    {/* <FormGroup> */}
                    <div className="check-boxs-wrappeer">
                        <h1>Type of place</h1>
                        {/* <FormControlLabel */}
                        <label className="label-con">
                            <Checkbox
                                name="Entire place"
                                checked={filterBy.roomTypes.includes('Entire place')}
                                onChange={toggleRoomType}
                                color="default"
                            />
                            <div className="text-con">
                                <p>Entire place</p>
                                <p>A place all to yourself</p>
                            </div>
                        </label>
                        {/* // label="Entire place" /> */}
                        {/* <FormControlLabel */}
                        <label className="label-con">
                            <Checkbox
                                name="Shared room"
                                checked={filterBy.roomTypes.includes('Shared room')}
                                onChange={toggleRoomType}
                                color="default"
                            />
                            <div className="text-con">
                                <p>Shared room</p>
                                <p>A sleeping space and common areas that may be shared with others</p>
                            </div>
                        </label>
                        {/* label="Shared room" /> */}
                        {/* <FormControlLabel */}
                        <label className="label-con">
                            <Checkbox
                                name="Private room"
                                checked={filterBy.roomTypes.includes('Private room')}
                                onChange={toggleRoomType}
                                color="default"
                            // sx={{ '& .MuiSvgIcon-root': { width: 30} }}
                            />
                            <div className="text-con">
                                <p>Private room</p>
                                <p>Your own room in a home or a hotel, plus some shared common spaces</p>
                            </div>
                        </label>
                    </div>
                    <div className="submit-search-con">
                        <button className="btn btn-submit-filter">Filter</button>
                    </div>
                </form>}
                {/* </FormGroup> */}
            </div>
        </section>
    )
}



