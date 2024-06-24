import { Container, Row, Col } from "reactstrap"; 
import { SliderComponent } from "./ResultCare";
export const BestSeller = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col className="text-center">
                    <h2 className="head_2 text-uppercase"> BESTSELLERS  </h2>
                    <p className="head_p mb-0">
                        {`Proven Strategies for Dominating the Market `}
                    </p>
                </Col>
            </Row>

            <SliderComponent />
        </Container>
    );
};
