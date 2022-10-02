
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ExploreFilter } from "../cmps/explore-filter"
import { StayList } from "../cmps/stay-list"
import { loadStays } from "../store/stay.action"

export const ExplorePage = () => {

    const stays = useSelector(state => state.stayModule.stays)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadStays())
    }, [])

    return (
        <section className="explore-page">
            <ExploreFilter />
            <StayList stays={stays} />
        </section>
    )
}