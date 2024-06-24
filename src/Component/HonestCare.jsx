import { Container, Row, Col } from "reactstrap";
import Image from "../assets/images/image_7.png"
export default function HonestCare() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h4 className="head_4 text-grey text-uppercase"> HONEST SKINCARE </h4>
          <h2 className="head_2 text-uppercase">Face-To-Face With The Truth About Effective Skincare </h2>
          <p className="head_p"> {"Whatever we say is the truth, nothing but the whole truth"} </p>
        </Col>
      </Row>
      <div className="HonestCare py-5">
        <div>
          <div className="img">
            <img src={Image} alt={"Lady Image"} />
          </div>
        </div>

        <div>
          <h3 className="head_3 mb-3"> Skincare Consultation </h3>
          <p className="para_1">
            The Hymed team was led by research scientist Dr. Brian Jegasothy who was a dermatologist and visiting professor at over 50 Universities and clinics and was the Chairman of the Department of Dermatology at the University of Pittsburgh from 1987 to 1999. He discovered that “Continuous inflammation is the root cause of premature aging and chronic diseases.” Thus, the true enemy of the skin is inflammation, and an effective skincare line must be anti-inflammatory.
          </p>
          <h5 className="mb-3">
            A free 15 minutes virtual skin consultation done by one of our expert aestheticians.
          </h5>
          <button className="btn btn-blue"> Book a Consult </button>
        </div>
      </div>
    </Container>
  )
}
