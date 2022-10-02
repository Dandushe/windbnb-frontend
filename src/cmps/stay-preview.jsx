
import { useState } from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import StarIcon from '@mui/icons-material/Star';
import { formatNumber, utilService } from "../services/util.service";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function StayPreview({ stay }) {
    const randDate = utilService.getRandDateRange()
    const [availableDates, setAvailableDates] = useState(randDate)

    const PrevArrow = (props) => {
        const { onClick } = props;
        return <button className="btn prev"
            onClick={(ev) => {
                ev.preventDefault()
                onClick()
            }}>
            <NavigateBeforeIcon />
        </button>
    }
    const NextArrow = (props) => {
        const { onClick } = props;
        return <button className="btn next" onClick={(ev) => {
            ev.preventDefault()
            onClick()
        }}>
            <NavigateNextIcon />
        </button>
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    if (!stay) return <div>Loading...</div>

    const sumRate = (stay.reviewScores.rating) * (stay.reviews.length) / (6 * stay.reviews.length)
    return (
        <section className="stay-preview">

            <Link to={`/stay/${stay._id}`} >
                <div className="img-container">
                    <Slider {...settings}>
                        {stay.imgUrls.map(imgUrl => <img key={imgUrl} src={imgUrl} alt="property" />)}
                    </Slider>
                </div>
                <div className="info-container">
                    <div className="info-header-con">
                        <div className="address-info-con">
                            <span>{stay.address.city}, </span>
                            <span>{stay.address.country}</span>
                        </div>
                        <div className="rate-con">
                            <StarIcon />
                            <span>{(isNaN(sumRate)) ? 'New' : utilService.financial(sumRate)}</span>
                        </div>
                    </div>
                    <div className="property-type">
                        <span>{stay.propertyType}</span>
                        <span>{availableDates}</span>
                    </div>
                    <span className="price"><h4>${formatNumber(stay.price)}</h4>night</span>
                </div>
            </Link>
        </section>
    )
}