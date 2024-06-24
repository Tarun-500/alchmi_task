import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderImgOne from "../assets/images/image_6.png";
import { Container, Row, Col, CardBody, Card } from "reactstrap";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { TiStar } from "react-icons/ti";

export const SliderComponent = () => {
    const settings = {
        focusOnSelect: true,
        dots: true,
        infinite: true, 
        slidesToShow: 3,
        speed: 1000,
        initialSlide: 0,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        swipeToSlide: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const slideLength = Array.from({ length: 3 }, (v, i) => i);

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slideLength.map(index => (
                    <div key={index}>
                        <Card className="slider_card">
                            <CardBody>
                                <div className="img-box">
                                    <img src={SliderImgOne} alt="Slider images" className="img-fluid" />
                                    <div className="badge rounded-pill position-absolute text-bg-light top-0 end-0 m-2">
                                        <TiStar className="icon" /> 5 <BiSolidBadgeCheck className="ms-2 icon" /> 78 reviews
                                    </div>
                                </div>
                                <div className="text-box text-center pt-3">
                                    <h6 className="head_6 text-blue">Anti-Aging & Protecting Facial Day Lotion</h6>
                                    <p>Titanium Oxide I Green Tea I Peptides I Plant Stem Cells</p>
                                    <button className="w-100 btn btn-blue">BUY NOW @200</button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export const ResultCare = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col className="text-center">
                    <h4 className="head_4 text-grey text-uppercase">RESULT-DRIVEN SKINCARE</h4>
                    <h2 className="head_2 text-uppercase">Shop By Skin Concern</h2>
                    <p className="head_p mb-0">
                        {`At Hymed we are all about results. Our products are formulated to deliver outstanding results without any health risks for you`}
                    </p>
                </Col>
            </Row>

            <SliderComponent />
        </Container>
    );
};
