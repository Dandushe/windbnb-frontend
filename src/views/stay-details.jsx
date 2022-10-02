
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { stayService } from "../services/stay.service"
import { LongText } from "../cmps/long-text"
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { StayReservation } from "../cmps/stay-reservation";
import { utilService } from "../services/util.service";


export const StayDetails = () => {
    const [stay, setStay] = useState(null)
    const params = useParams()


    useEffect(() => {
        //Page layout
        const elRoot = document.querySelector(':root')
        const prevValue = getComputedStyle(elRoot).getPropertyValue('--from-narrow-gtc')
        elRoot.style.setProperty('--from-narrow-gtc', '1fr 1120px 1fr')

        return () => {
            elRoot.style.setProperty('--from-narrow-gtc', prevValue)
        }
    }, [])

    useEffect(() => {
        loadStay()
    }, [params.id])

    const loadStay = async () => {
        const stayId = params.id
        const stay = await stayService.getById(stayId)
        setStay(stay)
    }

    if (!stay) return <div>Loading...</div>
    const sumRate = (stay.reviewScores.rating) * (stay.reviews.length) / (6 * stay.reviews.length)
    const { cleanliness, communication, checkin, accuracy, location, value } = stay.reviewScores
    return (
        <section className="stay-details">

            <div className="top-container">
                <h1>{stay.name}</h1>
                <div className="sub-con">
                    <div className="address-info">
                        <div className="rate-con">
                            <StarIcon />
                            <span>{utilService.financial(sumRate)} •</span>
                        </div>
                        <span>{stay.reviews.length} reviews •</span>
                        <span>{stay.address.street}</span>
                    </div>
                    <div className="links-con">
                        <div>
                            <IosShareIcon />
                            <span> Share</span>
                        </div>
                        <div>
                            <FavoriteBorderIcon />
                            <span> Save</span>
                        </div>
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
                                    <span>{stay.capacity} guests</span> •
                                    <span>{stay.bedrooms} bedrooms</span> •
                                    <span>{stay.beds}{stay.beds > 1 ? ' beds' : ' bed'}</span> •
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
                            <span className="test">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</span>
                            <div>
                                <a href="">Learn more</a>
                            </div>
                        </div>

                        <div className="info-place-desc">
                            <LongText text={stay.description ? stay.description : 'hahahahahhaha'} limit={180} />
                        </div>

                        <div className="amenities">
                            <h3>What this place offers</h3>
                            <div className="amenities-wrapper">
                                {stay.amenities.splice(0, 10).map((item, i) => <span key={i}>{item}</span>)}
                            </div>
                        </div>
                        {/* <div className="dates">
                        <BasicDatePicker />
                        <BasicDatePicker />
                        </div> */}
                    </div>
                    <StayReservation stay={stay} />
                </div>
                <section className="reviwes">
                    <div className="reviews-header">
                        <StarIcon />
                        <h2>{utilService.financial(sumRate)} •</h2>
                        <h2>{stay.reviews.length} reviews</h2>
                    </div>
                    <div className="reviews-score-board">
                        <div className="rate-prm">
                            <span>Cleanliness</span>
                            <div>
                                <progress value={utilService.financial(cleanliness)} max={5} className="progressbar" />
                                <span>{utilService.financial(cleanliness)}</span>
                            </div>
                        </div>
                        <div className="rate-prm">
                            <span>Communication</span>
                            <div>
                                <progress value={utilService.financial(communication)} max={5} className="progressbar" />
                                <span>{utilService.financial(communication)}</span>
                            </div>
                        </div>
                        <div className="rate-prm">
                            <span>Check-in</span>
                            <div>
                                <progress value={utilService.financial(checkin)} max={5} className="progressbar" />
                                <span>{utilService.financial(checkin)}</span>
                            </div>
                        </div>
                        <div className="rate-prm">
                            <span>Accuracy</span>
                            <div>
                                <progress value={utilService.financial(accuracy)} max={5} className="progressbar" />
                                <span>{utilService.financial(accuracy)}</span>
                            </div>
                        </div>
                        <div className="rate-prm">
                            <span>Location</span>
                            <div>
                                <progress value={utilService.financial(location)} max={5} className="progressbar" />
                                <span>{utilService.financial(location)}</span>
                            </div>
                        </div>
                        <div className="rate-prm">
                            <span>Value</span>
                            <div>
                                <progress value={utilService.financial(value)} max={5} className="progressbar" />
                                <span>{utilService.financial(value)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="reviwes-list">
                        {stay.reviews.splice(0, 6).map((review, i) =>
                            <div className="review-preview" key={i}>
                                <div className="user-img-con"><img src={review.by.imgUrl} alt="user" />
                                    <div className="user-header">
                                        <span>{review.by.fullname}</span>
                                        <span className="date">September 2022</span>
                                    </div>

                                </div>
                                <div><LongText text={review.txt} limit={180} /></div>
                            </div>)}
                    </div>
                </section>

                <section className="about-host">

                    <div className="about-host-header">
                        <img src={stay.imgUrls[0]} alt="" />
                        <div className="host-title-con">
                            <h2> Hosted by {stay.host.fullname}</h2>
                            <span>Joined in March 2019</span>
                        </div>
                    </div>

                    <div className="content">
                        <div>
                            <div className="quick-host-info">
                                <StarIcon />
                                <span>{stay.reviews.length} Reviews</span>
                                <VerifiedUserIcon />
                                <span>Identity verified</span>
                            </div>
                            <p>{stay.interaction}</p>
                        </div>
                        <div className="host-stats">
                            <p>Languages: English, Deutsch</p>
                            <p>Response rate: 88%</p>
                            <p>Response time:{stay.host.responseTime}</p>
                            <button>Contact Host</button>
                        </div>
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
        </section>
    )

}