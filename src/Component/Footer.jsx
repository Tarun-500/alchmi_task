import { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap"
import Image from "../assets/images/payment_cards.png"
import Logo from "../assets/images/footer_logo.png"
import { Link } from "react-router-dom"
import { FaAngleUp } from "react-icons/fa";

export default function Footer() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 1.2) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <Container className="links py-5 text-center text-lg-start">

                <Row>
                    <Col xs={12} lg={3} className="mb-4">
                        <h5>Information</h5>
                        <p> <Link to="#"> Faq </Link> </p>
                        <p> <Link to="#"> HYMED Ingredients </Link> </p>
                        <p> <Link to="#"> Book A Consult </Link> </p>
                    </Col>

                    <Col xs={12} lg={3} className="mb-4">
                        <h5>Store</h5>
                        <p> <Link to="#"> Shop All </Link> </p>
                        <p> <Link to="#"> Cart </Link> </p>
                        <p> <Link to="#"> My Account </Link> </p>
                        <p> <Link to="#"> Contact Us </Link> </p>
                    </Col>

                    <Col xs={12} lg={3} className="mb-4">
                        <h5>Legal</h5>
                        <p> <Link to="#"> Privacy Policy </Link> </p>
                        <p> <Link to="#"> Terms & Conditions </Link> </p>
                        <p> <Link to="#"> Disclaimer </Link> </p>
                        <p> <Link to="#"> Copyright Notice </Link> </p>
                    </Col>

                    <Col xs={12} lg={3} className="footer_logo mb-4">
                        <img src={Logo} alt="Footer Logo" className="img-fluid" />
                        <p>Email: <Link to="#">info@hymedskincare.com </Link> </p>
                        <div className="subs_btn">
                            <input type="text" placeholder="Email Address" className="ps-4" />
                            <button className="btn">
                                Subscribe
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Row className="copy_bar">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col sm={12} md={7} className="my-auto text-center text-md-start">
                                <p className="mb-md-0">© 2024 HYMED SKINCARE. All rights reserved. </p>
                            </Col>
                            <Col sm={12} md={5} className="text-center text-md-end">
                                <img src={Image} alt="visa Rupay cards" className="img-fluid" />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            {showButton && (
                <button className="btn btn-top"   onClick={scrollToTop} 
                style={{ display: showButton ? 'flex' : 'none' }}>
                    <FaAngleUp />
                </button>
            )}
        </footer>
    )
}
