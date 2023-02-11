import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
//JS
import { loadUserStays } from "../store/stay.action";
//CMPS
import { BrandBtn } from "./brand-btn";
//ASSETS
import AddIcon from '@mui/icons-material/Add';


export const Listings = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(state => state.userModule.user)
    const listings = useSelector(state => state.stayModule.stays)

    useEffect(() => {
        dispatch(loadUserStays(user._id))
    }, [])

    if (!listings) return <div>Loading...</div>
    return (
        <section className="listing-main-wrapper">
            {!!listings.length && <div className="header-container">
                <h1>{listings.length} Listings</h1>

                <Link to='/host' className="add-listing-link">
                    <AddIcon />
                    <span>Create listing</span>
                </Link>
            </div>}
            {!!listings.length && <table>
                <thead>
                    <tr>
                        <th>Listing</th>
                        <th>Bedrooms</th>
                        <th>Beds</th>
                        <th>Baths</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {listings.map(listing => <tr key={listing._id}>
                        <td className="name-img-cell"><div className="img-container"><img src={listing.imgUrls[0]} alt="img" /></div><span>{listing.name}</span></td>
                        <td>{listing.bedrooms}</td>
                        <td>{listing.beds}</td>
                        <td>{listing.bathrooms}</td>
                        <td>{listing.address.city}, {listing.address.country}</td>
                    </tr>
                    )}
                </tbody>
            </table>}

            {!listings.length && <div className="hosting-banner-wrapper">
                <div className="side">
                    <div>Try hosting on Windbnb</div>
                    <p>Join us. We`ll help you every step of the way.</p>
                    <BrandBtn text={'Let`s go!'} cb={() => navigate('/host')} />
                </div>
                <div className="img-container">
                    <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664650429/banner2.jpg" alt="banner" />
                </div>
            </div>}
        </section>
    )

}