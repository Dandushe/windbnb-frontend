
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppFooter } from "../cmps/app-footer"
import { MainFilter } from "../cmps/main-filter"
import CustomizedSlider from "../cmps/slider"
import { StayList } from "../cmps/stay-list"
import { loadStays } from "../store/stay.action"




export const ExplorePage = () => {

    const stays = useSelector(state => state.stayModule.stays)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadStays())
    }, [])

    // const onRemoveStay = (toyId) => {
    //     dispatch(removeStay(toyId))
    // }

    // const onChangeFilter = (filterBy) => {
    //     dispatch(setFilter(filterBy))
    //     dispatch(loadStays())
    // }

    return (

        <section className="explore-page">
            <MainFilter/>
            {/* <CustomizedSlider/> */}
           <StayList stays={stays}/>
           {/* <AppFooter/> */}
        </section>
    )
}