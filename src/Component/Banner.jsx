import { Col, Row } from "reactstrap";
export default function Banner() {
    return (
        <Row className="banner">
            <Col>
                <div>
                    <h1> Unlock Your  <br /> Natural <br /> beauty </h1>
                    <p className="head_p"> Skincare That Delivers Exceptional Results! </p>
                    <button className="btn btn-blue px-4"> BUY NOW </button>
                </div>
            </Col>
        </Row>
    )
}
