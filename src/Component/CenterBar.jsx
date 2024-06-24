import { Row, Col, Container } from "reactstrap";

export default function CenterBar() {
    return (
        <Row className="centerBar">
            <Container>
                <Row className="pt-5 text-center">
                    <Col xs={12} md={4} className="pb-5">
                        <h4 className="head_4 text-blue"> VEGAN & CRUELTY-FREE</h4>
                        <p className="head_p"> Peta & Leaping Bunny Certified</p>
                    </Col>
                    <Col xs={12} md={4} className="pb-5">
                        <h4 className="head_4 text-blue"> NATURAL </h4>
                        <p className="head_p">  Plant-Derived Ingredients </p>
                    </Col>
                    <Col xs={12} md={4} className="pb-5">
                        <h4 className="head_4 text-blue">  ANTI-INFLAMMATORY</h4>
                        <p className="head_p">  Slows Down Skin Aging </p>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}
