import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Slider from "react-slick"
import { loadStays, modalType, setFilter } from "../store/stay.action"
import { Carousel } from "./carousel"
import CustomizedSlider from "./slider"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const MainFilter = () => {
    const [filterBy, setFilterBy] = useState({
        minPrice: 40,
        maxPrice: 1000,
        roomTypes: [],
        category: ''
    })
    const currModalType = useSelector(state => state.stayModule.currModalType)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(loadStays())

    //   return () => {
    //     dispatch(loadStays())
    //   }
    // }, [filterBy.category])


    const handleChange = ({ target }) => {
        const val = [...target.value]
        const MIN = val[0]
        const MAX = val[1]
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, minPrice: MIN, maxPrice: MAX }))
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
        console.log("onFilter , onFilter")

        dispatch(setFilter(filterBy))
        dispatch(loadStays())
        toggleModal()
    }

    const toggleModal = () => {
        setIsModalOpen(prevIsModalDisplay => !prevIsModalDisplay)
    }

    const onSelectModalType = (type) => {
        dispatch(modalType(type))
    }

    const onSelectValue = (field, value) => {
        console.log(field, value);
        // const field = fiel
        // const value = val 
        // setFilterBy(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, category: value }))
        console.log('FFFFFF', filterBy);
        dispatch(setFilter(filterBy))
        console.log('TTTTTT', filterBy);
        dispatch(loadStays())

    }

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <section className="main-filter">
            {/* <button className="btn btn-filter-modal" onClick={() => onSelectModalType('filter-options')}>Filter</button> */}



            <div className="category-filterbar-wrapper">
                {/* <Slider className="test" {...settings}>
                </Slider> */}
                <div className={(filterBy.category === 'Amazing views') ? 'active' : ''} onClick={() => onSelectValue('category', 'Amazing views')}>Amazing views</div>
                <div className={(filterBy.category === 'Amazing pools') ? 'active' : ''} onClick={() => onSelectValue('category', 'Amazing pools')}>Amazing pools</div>
                <div className={(filterBy.category === 'Islands') ? 'active' : ''} onClick={() => onSelectValue('category', 'Islands')}>Islands</div>
                <div className={(filterBy.category === 'Mansions') ? 'active' : ''} onClick={() => onSelectValue('category', 'Mansions')}>Mansions</div>
                <div className={(filterBy.category === 'Arctic') ? 'active' : ''} onClick={() => onSelectValue('category', 'Arctic')}>Arctic</div>
                <div className={(filterBy.category === 'OMG!') ? 'active' : ''} onClick={() => onSelectValue('category', 'OMG!')}>OMG!</div>
                <div className={(filterBy.category === 'Beach') ? 'active' : ''} onClick={() => onSelectValue('category', 'Beach')}>Beach</div>
                <div className={(filterBy.category === 'Cabins') ? 'active' : ''} onClick={() => onSelectValue('category', 'Cabins')}>Cabins</div>
            </div>

            <button className="btn btn-filter-modal" onClick={() => onSelectModalType('filter-options')}>Filter</button>

            {(currModalType === 'filter-options') && <form className="filter-options-modal-wrapper" onSubmit={onFilter}>
                <div className="modal-header">
                    <h3>Filters</h3>
                </div>
                <div className="price-range-wrapper">
                    <h2>Price range</h2>
                    <CustomizedSlider minPrice={filterBy.minPrice} maxPrice={filterBy.maxPrice} handleChange={handleChange} />
                </div>
                {/* <FormGroup> */}
                <div className="check-boxs-wrappeer">

                    <FormControlLabel
                        control={<Checkbox
                            name="Entire place"
                            checked={filterBy.roomTypes.includes('Entire place')}
                            onChange={toggleRoomType}
                            color="default"
                        />}
                        label="Entire place" />
                    <FormControlLabel
                        control={<Checkbox
                            name="Shared room"
                            checked={filterBy.roomTypes.includes('Shared room')}
                            onChange={toggleRoomType}
                            color="default"
                        />} label="Shared room" />
                    <FormControlLabel
                        control={<Checkbox
                            name="Private room"
                            checked={filterBy.roomTypes.includes('Private room')}
                            onChange={toggleRoomType}
                            color="default"
                        />} label="Private room" />
                </div>
                <div className="submit-search-con">
                    <button className="btn btn-submit-filter">Filterrr</button>
                </div>
            </form>}
            {/* </FormGroup> */}
        </section>
    )
}



