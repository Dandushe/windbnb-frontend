import Slider from "react-slick";


export const Carousel = ({ items }) => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <section className="carousel">
            <Slider {...settings}>

            </Slider>
        </section>
    )
}