
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useRef } from 'react';
import { loadStays, setFilter } from '../store/stay.action';
// import { addReservation } from '../store/reservation.action';
// import { useClickOutside } from "../hooks/useClickOutside";
export const StayFilter = () => {

    const [activeTab, setActiveTab] = useState('')
    const [isExpended, setIsExpended] = useState(false)
    // const [reservation, setReservation] = useState({
    // })
    const [filterBy, setFilterBy] = useState({
        txt: '',
        checkIn: '',
        checkOut: '',
        guestsNum: 1
    })
    // const filterBy = useSelector(state => state.stayModule.filterBy)
    const dispatch = useDispatch()
    // const ref = useRef()

    // useClickOutside(ref, () => {
        // setIsExpended(previsExpended => !previsExpended)
        // setIsExpended(false)
    // })

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }
    // const handleChangeResev = ({ target }) => {
    //     const field = target.name
    //     const value = target.type === 'number' ? +target.value : target.value
    //     setReservation(prevReservation => ({ ...prevReservation, [field]: value }))
    // }

    const onSubmitSearch = (ev) => {
        ev.preventDefault()
        dispatch(setFilter(filterBy))
        dispatch(loadStays())
        // dispatch(addReservation(reservation))

    }

    const toggleIsExpended = () => {
        setIsExpended(previsExpended => !previsExpended)
    }

    const expendedTab = (currTab) => {
        console.log("setActive , currTab", currTab)
        setActiveTab(currTab)
        // setIsExpended(isExpended => !isExpended)
        // toggleIsExpended()
        // setIsExpended(previsExpended => !previsExpended)
        setIsExpended(true)
    }

    return (
        <section className="stay-filter-main-warapper">
            {!isExpended && <section className="filter-preview-pill-wrapper" >
                <div className="anywhere" onClick={() => expendedTab('where')} >Anywhere</div>
                {/* <div className="anywhere" onClick={()=>setActiveTab('where')}>Anywhere</div> */}
                <div className="anyweek" onClick={() => expendedTab('checkIn')}>Any Week</div>
                <div className="addguests" onClick={() => expendedTab('guests')}>
                    <span>Add guests</span>
                    <div className="search-icon-con">
                        <SearchIcon />
                    </div>
                </div>
            </section>}

            {isExpended && <section className="filter-expended-pill-wrapper">

                {/* <section className={`location-wrapper ${activeTab === 'where' ? 'active' : ''}`} onClick={setActiveTab('where')}> */}
                <section className={`location-wrapper ${(activeTab === 'where') ? 'active' : ''}`} onClick={() => setActiveTab('where')}>
                    {/* <section className="location-wrapper active"> */}
                    <div className='location-con'>
                        <span>Where</span>
                        <form onSubmit={onSubmitSearch}>
                            <input
                                id="destinationform"
                                type="text"
                                name="txt"
                                value={filterBy.txt}
                                onChange={handleChange}
                                placeholder='Search destination' />
                            {/* <button>test</button> */}
                        </form>
                    </div>
                </section>

                <section className="dates-wrapper">
                    <div className={`checkIn-dates-con ${(activeTab === 'checkIn') ? 'active' : ''}`} onClick={() => setActiveTab('checkIn')}>
                        {/* <div className="checkIn-dates-con"> */}
                        <span className='title'>Check in</span>
                        <span className='sub-title'>Add dates</span>
                        <div className='checkin-datepicker-con'>
                            {/* <fieldset form="FUCK"> */}
                            {/* <form method="get" id="FUCK"> */}
                            <input
                                type="date"
                                name="checkIn"
                                value={filterBy.checkIn}
                                onChange={handleChange} />
                            {/* </fieldset> */}
                            {/* </form> */}
                        </div>
                    </div>
                    <div className={`checkOut-dates-con ${(activeTab === 'checkOut') ? 'active' : ''}`} onClick={() => setActiveTab('checkOut')}>
                        <span className='title'>Check out</span>
                        <span className='sub-title'>Add dates</span>
                        <div className='checkOut-datepicker-con'>
                            {/* <fieldset form="FUCK"> */}
                            <input
                                type="date"
                                name="checkOut"
                                value={filterBy.checkOut}
                                onChange={handleChange} />
                            {/* </fieldset> */}
                        </div>
                    </div>
                </section>

                <section className={`guests-wrapper ${(activeTab === 'guests') ? 'active' : ''}`} onClick={() => setActiveTab('guests')}>
                    {/* <section className="guests-wrapper"> */}
                    <div className='guests-con'>
                        <span className='title'>Who</span>
                        <span className='sub-title'>Add guests</span>
                        <div className='num-of-guests-con'>
                            {/* <fieldset form="FUCK"> */}
                            <input
                                type="number"
                                name="guestsNum"
                                value={filterBy.guestsNum}
                                onChange={handleChange} />
                            {/* </fieldset> */}
                        </div>
                    </div>
                    <div className="search-con">
                        <button className='btn search-btn' type='submit' form="destinationform"><SearchIcon /> Search</button>
                    </div>
                </section>

            </section>}

        </section>
    )
}