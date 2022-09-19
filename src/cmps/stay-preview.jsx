
import { useState } from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import StarIcon from '@mui/icons-material/Star';

export function StayPreview({ stay }) {
    const [imgIdx, setImgIdx] = useState(0)

    const changeImgIdx = (ev, diff) => {
        ev.preventDefault();

        const lastImgIdx = stay.imgUrls.length - 1
        let newImgIdx = imgIdx + diff

        if (newImgIdx < 0) {
            return setImgIdx(lastImgIdx)
        } else if (newImgIdx === stay.imgUrls.length) {
            return setImgIdx(0)
        }

        setImgIdx(newImgIdx)
    }


    if (!stay) return <div>Loading...</div>
    return (
        <section className="stay-preview">
         
            <Link to={`/stay/${stay._id}`} >
                <div className="img-container ratio-square">
                    <button className="btn prev" onClick={(ev) => changeImgIdx(ev, 1)}>
                        <NavigateBeforeIcon />
                    </button>
                    <button className="btn next" onClick={(ev) => changeImgIdx(ev, -1)}>
                        <NavigateNextIcon />
                    </button>
                    <img src={stay.imgUrls[imgIdx]} alt="property" />
                    {/* <img src={stay.imgUrls[0]} alt="property" /> */}
                </div>
                {/* <h2>{stay.name}</h2> */}
                {/* <Link to={`/stay/${stay._id}`} > */}
                <div className="info-container">
                    <div className="info-header-con">
                        <div className="address-info-con">
                            <span>{stay.address.city},</span>
                            <span>{stay.address.country}</span>
                        </div>
                        <div className="rate-con">
                            <StarIcon />
                            <span>4.85</span>
                        </div>
                    </div>
                    <span className="property-type">{stay.propertyType}</span>
                    {/* <h4>${stay.price}</h4> */}
                    <span className="price"><h4>${stay.price}</h4>night</span>
                </div>
            </Link>
        </section>
    )
}