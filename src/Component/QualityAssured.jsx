import { Container, Row, Col } from "reactstrap";
import Image from "../assets/images/image_5.png"
export default function QualityAssured() {
    const data = [
        {
            id: 1,
            title: "Vegan Hyaluronic Acid",
            desc: "Acid Plant-derived,High Molecular Weight Hyaluronic"
        }, {
            id: 2,
            title: "Clean, Vegan, Natural & Plant-Based Ingredients",
            desc: "Free of harmful chemicals, irritants, and toxins"
        }, {
            id: 3,
            title: "Inflammation-Free Formulation",
            desc: "Our products prevent and minimize inflammation"
        }, {
            id: 4,
            title: "Ayurvedic Principles",
            desc: "These 5000-Year old time- tested principles guido us"
        }, {
            id: 5,
            title: "Environmentally Conscious Manufacturing",
            desc: "We consciously minimize wastage and harm to our planet Earth"
        }, {
            id: 6,
            title: "Small Batch, US Based Production",
            desc: "Our products are handmade in USA in small batches"
        }
    ]
    return (
        <Container className="py-5 qualityAssured">
            <Row>
                <Col className="text-center">
                    <h4 className="head_4 text-grey text-uppercase"> QUALITY ASSURED </h4>
                    <h2 className="head_2 text-uppercase"> What It Takes To Make Truthful Skincare </h2>
                    <p className="head_p"> {"More than anything it takes character, principles and core values that emphasise customer well-being from day one!"} </p>
                </Col>
            </Row>

            <Row className="pt-5">
                <Col sm={12} md={7} className="order-2 order-md-1">
                    <Row className="pt-5 pb-md-5">
                        {data?.map((data) => {
                            return (<Col md={6} key={data.id}>
                                <h4 className="head_4 text-blue"> {data.title} </h4>
                                <p className="head_p">{data.desc}</p>
                            </Col>)
                        })}
                    </Row>
                </Col>


                <Col sm={12} md={5}className="order-1 order-md-2">
                    <div className="img">
                        <img src={Image} alt="Quality Assured" className="img-fluid" />
                    </div>
                </Col>


            </Row>


        </Container>
    )
}
