import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loadStays, setFilter } from "../store/stay.action"
import CustomizedSlider from "./slider"


export const MainFilter = () => {
    const [filterBy, setFilterBy] = useState({
        minPrice: 40,
        maxPrice: 1000,
        roomTypes: []
    })
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch()

    const handleChange = ({ target }) => {

        console.log('target==', [...target.value]);
        const val = [...target.value]
        console.log("handleChange , val", val[0])
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
        console.log('filterBy from cmp', filterBy);
        await dispatch(setFilter(filterBy))
        dispatch(loadStays())
        toggleModal()
    }

    const toggleModal = () => {
        setIsModalOpen(prevIsModalDisplay => !prevIsModalDisplay)
    }

    return (
        <section className="main-filter">
            <button className="btn btn-filter-modal" onClick={toggleModal}>Filter
            
            </button>
            {/* <CustomizedSlider filterBy={filterBy}  handleChange={handleChange} /> */}
            {isModalOpen && <form className="filter-options-modal-wrapper" onSubmit={onFilter}>
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
                            value={filterBy.roomTypes.includes('Entire place')}
                            onChange={toggleRoomType}
                            color="default"
                        />}
                        label="Entire place" />
                    <FormControlLabel
                        control={<Checkbox
                            name="Shared room"
                            value={filterBy.roomTypes.includes('Shared room')}
                            onChange={toggleRoomType}
                            color="default"
                        />} label="Shared room" />
                    <FormControlLabel
                        control={<Checkbox
                            name="Private room"
                            value={filterBy.roomTypes.includes('Private room')}
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



