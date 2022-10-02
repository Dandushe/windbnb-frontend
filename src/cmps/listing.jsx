import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveUserListing } from "../store/user.action"
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from "react-router-dom";
import { BrandBtn } from "./brand-btn";


export const Listing = () => {
    const user = useSelector(state => state.userModule.user)
    const listings = useSelector(state => state.userModule.listings)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        loadListings()
    }, [])

    const loadListings = async () => {
        console.log(user._id);
        // 632c617e1e03fec448f71ace
        dispatch(saveUserListing({ hostId: user._id }))
        console.log('listings', listings);
    }
    // Georgina
    if (!listings) return <div>Loading...</div>
    console.log('listings', listings);
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
                {/* <section className="video-wrapper"> */}
                    {/* <video id="hostVideo" autoPlay controls >
                        <source src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4" type="" />
                    </video> */}
                {/* </section> */}
                <div className="img-container">
                    <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664650429/banner2.jpg" alt="banner" />
                </div>
            </div>}
        </section>
    )

}