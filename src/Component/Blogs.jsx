import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderImgOne from "../assets/images/image_9.png";
import { Container, Row, Col, CardBody, Card, CardImg } from "reactstrap"; 

export const SliderComponent = () => {
    const settings = {
        focusOnSelect: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        initialSlide: 2,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        slidesToScroll: 2,
        autoplay: true,
        cssEase: "ease-in-out",
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
                            <CardImg src={SliderImgOne} alt="Slider images" />
                            <CardBody>
                                <div className="text-box pt-3">
                                    <h6 className="head_6 text-blue"> Hymed Skincare: Unveiling The
                                        Secrets To Healthy, Balanced Skincare </h6>
                                    <Row className="text-xs mb-2 text-grey">
                                        <Col>
                                            <small>April 5, 2024 </small>
                                        </Col>
                                        <Col className="text-end">
                                            <small> Reading Time: 4 Minutes </small>
                                        </Col>
                                    </Row>

                                    <p className="para_1">{` In T ne Bustling '.'VorId Skincare, Countess
Brands Vie Fur Our Attention, Pronnisinq A
Fauntain Dt Ycuth In A Bottle. `}</p>
                                    <button className="w-100 btn btn-blue rounded-0"> READ MORE</button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export const Blogs = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col className="text-center">
                    <h2 className="head_2 text-uppercase"> FEATURED BLOGS </h2>
                    <p className="head_p mb-0">
                        {`The Ultimate Guide To Skincare Routines`}
                    </p>
                </Col>
            </Row>

            <SliderComponent />
        </Container>
    );
};
