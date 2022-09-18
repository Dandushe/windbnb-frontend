
import { useState } from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import StarIcon from '@mui/icons-material/Star';

export function StayPreview({ stay }) {
    const [imgIdx, setImgIdx] = useState(0)
    // const [preview, setPreview] = useState({
    //     imgIdx:0
    // })

    const increment = (ev) => {
        ev.stopPropagation();
        if (imgIdx === 4) {
            setImgIdx(0)
        }
        setImgIdx(prevCount => prevCount + 1)

    }
    const decrement = (ev) => {
        ev.stopPropagation();
        if (imgIdx === 0) {
            setImgIdx(4)
        }
        setImgIdx(prevCount => prevCount - 1)

    }
    // const changeImgIdx = (ev,diff) => {
    //     ev.stopPropagation();
    //     console.log('diff#',diff,'imgIdx#',imgIdx);
    //     if (imgIdx === 0) {
    //         setImgIdx(4)
    //     }
    //     if (imgIdx === 4) {
    //         setImgIdx(0)
    //     }

    //     setImgIdx(prevCount => prevCount += diff)

    // }


    if (!stay) return <div>Loading...</div>
    return (
        <section className="stay-preview">
            {/* <button className="btn prev" onClick={(ev)=>changeImgIdx(ev,+1)}>
                <NavigateBeforeIcon />
            </button>
            <button className="btn next" onClick={(ev)=>changeImgIdx(ev,-1)}>
                <NavigateNextIcon />
            </button> */}
            <button className="btn prev" onClick={decrement}>
                <NavigateBeforeIcon />
            </button>
            <button className="btn next" onClick={increment}>
                <NavigateNextIcon />
            </button>

            <Link to={`/stay/${stay._id}`} >
                <div className="img-container ratio-square">
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