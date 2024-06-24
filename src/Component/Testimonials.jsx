import { Container, Row, Col, Card, CardBody } from "reactstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiStar } from "react-icons/ti";

import SliderImgOne from "../assets/images/image_2.png";
export const SliderComponent = () => {
    const settings = {
        centerMode: true,
        focusOnSelect: true,
        dots: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 300,
        initialSlide: 0,
        variableWidth: true,
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
        <div className="slider-container pt-5">
            <Slider {...settings}>
                {slideLength.map(index => (
                    <div key={index}>
                        <Card className="testimonial_slider">
                            <CardBody>
                                <div>
                                    <div className="img-box">
                                        <div>
                                            <img src={SliderImgOne} alt="Slider images" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="title">
                                        <h5 className="head_4 text-blue mb-0"> PAMELA </h5>
                                        <p className="para_1 mb-0"> New York</p>
                                        <p className="icons mb-2"> <TiStar/><TiStar/><TiStar/><TiStar/><TiStar/> </p>
                                    </div>
                                </div>


                                <div className="text-box">
                                    <p className="para_1 mb-0">Having Been Through Radiation Therapy Post-
                                        Cancer Surgery, I Know How Important It Is To Take
                                        Care Of My Skin. Hyaluronic Reconstructive Créme
                                        For Post Radiation & Chemotherapy Care Gave Me
                                        The Perfect Balance Of Moisture, Lightness, And
                                        Protection. I Recommend This Product To Anyone
                                        Who Has Just Gone Through Radiation Therapy Or
                                        Has A History Of Doing So.</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export const Testimonials = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col className="text-center">
                    <h2 className="head_2 text-uppercase"> CUSTOMER TESTIMONIALS </h2>
                    <p className="head_p">
                        {`Whatever We Say Is The Truth, Nothing But The Whole Truth`}
                    </p>
                </Col>
            </Row>

            <SliderComponent />
        </Container>
    );
};
