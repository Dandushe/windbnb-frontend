
import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { stayService } from "../services/stay.service"

import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { StayReservation } from "../cmps/stay-reservation";


export const StayDetails = () => {
    const [stay, setStay] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        loadStay()
    }, [params.id])

    const loadStay = () => {
        const stayId = params.id
        stayService.getById(stayId)
            .then(stay => {
                setStay(stay)
            })
    }



    // const onBack = () => {
    //     navigate('/')
    // }

    if (!stay) return <div>Loading...</div>
    return (
        <section className="stay-details">

            <div className="top-container">
                <h1>{stay.name}</h1>
                <div className="sub-con">
                    <div className="address-info">
                        <span>{stay.reviews.length} reviews</span>
                        <span>{stay.address.street}</span>
                    </div>
                    <div className="links-con">
                        <span>Share</span>
                        <span>♥ Save</span>
                    </div>
                </div>
            </div>

            <section className="gallery-wrapper">

                {stay.imgUrls.map((url, i) => <div key={i} className={`gallery-img-${i + 1}`}>
                    <img src={url} />
                </div>)}
            </section>
            <section className="generall-info-wrapper">
                <div className="main-info">
                    <div className="info-con-left">

                        <div className="info-header">

                            <div className="sub-info-con">
                                <h2>{stay.propertyType} <span> hosted by</span> {stay.host.fullname}</h2>

                                <div className="proprietary-info-con">
                                    <span>{stay.capacity} guests</span>
                                    <span>{stay.bedrooms} bedrooms</span>
                                    <span>{stay.beds}{stay.beds > 1 ? 'beds' : 'bed'}</span>
                                    <span>{stay.bathrooms} bath</span>
                                </div>
                            </div>

                            <div className="small-img-con">
                                <img src={stay.imgUrls[0]} alt="" />
                            </div>
                        </div>

                        <div className="highlights">
                            {<div className="highlight super-host-bage">
                                <WorkspacePremiumOutlinedIcon />
                                <div>
                                    {/* <h4>{stay.host.fullname} <span>is a Superhost</span></h4> */}
                                    <h4>{stay.host.fullname} is a Superhost</h4>
                                    <span>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</span>
                                </div>
                            </div>}

                            <div className="highlight pets">
                                <PetsOutlinedIcon />
                                <div>
                                    <h4>Furry friends welcome</h4>
                                    <span>Bring your pets along for the stay.</span>
                                </div>
                            </div>

                        </div>

                        <div className="info-cover">
                            <h1><span>wind</span>cover</h1>
                            <span>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</span>
                            <a href="">Learn more</a>
                        </div>

                        <div className="info-place-desc">
                            <p>The luxurious spacious suite is furnished with a cozy seating area, flat-screen TV, minibar, double box spring, double sink, jacuzzi, hairdryer, bathroom with spacious rain shower and toilet.
                                A luxury breakfast is served every morning.
                                From the suite you have a unique view of the largest tidal area in the world: the Unesco</p>
                        </div>

                        <div className="amenities">
                            <h3>What this place offers</h3>
                            <div className="amenities-wrapper">
                                {stay.amenities.splice(0, 10).map((item, i) => <span key={i}>{item}</span>)}
                            </div>
                        </div>

                    </div>
                    <StayReservation stay={stay} />
                </div>
                <section className="reviwes">
                    <div className="reviews-header">
                        <StarIcon />
                        <span>•</span>
                        <h2>{stay.reviews.length} reviews</h2>
                    </div>
                    <div className="reviews-score-board">
                        {/* <div> */}
                        <div className="rate-prm"><span>Cleanliness</span> <span>{stay.reviewScores.cleanliness}</span></div>
                        <div className="rate-prm"><span>Communication</span> <span>{stay.reviewScores.communication}</span></div>
                        <div className="rate-prm"><span>Check-in</span> <span>{stay.reviewScores.checkin}</span></div>
                        {/* </div> */}
                        {/* <div> */}
                        <div className="rate-prm"><span>Accuracy</span> <span>{stay.reviewScores.accuracy}</span></div>
                        <div className="rate-prm"><span>Location</span> <span>{stay.reviewScores.location}</span></div>
                        <div className="rate-prm"><span>Value</span> <span>{stay.reviewScores.value}</span></div>
                        {/* </div> */}
                    </div>
                    <div className="reviwes-list-wrapper">
                        {/* <div className="reviews-list"> */}
                        {stay.reviews.map((review, i) =>

                            <div className="reviews-list" key={i}>
                                <div className="user-img-con"><img src={review.by.imgUrl} alt="" />
                                    <span>{review.by.fullname}</span>
                                    {/* <span>{review.at}</span> */}

                                </div>
                                <div>{review.txt}</div>
                            </div>)}
                        {/* </div> */}
                    </div>
                </section>

                <section className="about-host">
                    <div>
                        <div className="about-host-header">
                            <img src={stay.imgUrls[0]} alt="" />
                            <div className="host-title-con">
                                <h2> Hosted by {stay.host.fullname}</h2>
                                <span>Joined in March 2019</span>
                            </div>
                        </div>
                        <div className="quick-host-info">
                            <StarIcon />
                            <span>{stay.reviews.length} Reviews</span>
                            <VerifiedUserIcon />
                            <span>Identity verified</span>
                        </div>
                        <p>{stay.interaction}</p>
                    </div>
                    <div>
                        <p>Languages: English, Deutsch</p>
                        <p>Response rate: 88%</p>
                        <p>Response time:{stay.host.responseTime}</p>
                        <button>Contact Host</button>
                    </div>
                </section>

                {/* <section className="policy-info">
                        <h2>Things to know</h2>
                        <div className="house-rules">
                            <h4>House rules</h4>
                        </div>
                        <div className="Health & safety">
                            <h4>Health & safety</h4>
                        </div>
                        <div className="Cancellation policy">
                            <h4>Cancellation policy</h4>
                        </div>
                    </section> */}

            </section>
            {/* <button onClick={onBack}>Back</button> */}
        </section>
    )

}