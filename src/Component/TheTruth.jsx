import { Container, Row, Col } from "reactstrap";
import CreamImage from "../assets/images/image_33.png";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { TbBrandDenodo } from "react-icons/tb";
import { GiChemicalDrop, GiDroplets } from "react-icons/gi";

export default function TheTruth() {
    return (
        <Container className="py-5 TheTruth">
            <Row>
                <Col className="text-center">
                    <h2 className="head_2 text-uppercase"> DECONSTRUCTING THE TRUTH </h2>
                    <p className="head_p"> {`sWe Believe In The "Cause No Harm" Philosophy - Our Products Only Give You Healthy Results And Nothing Else!`} </p>
                </Col>
            </Row>

            <div className="grid">
                <div className="col1">
                    <MdOutlineHealthAndSafety className="icon" />
                    <h2 className="head_4 text-blue"> Multiple Ingredients, Multiple Actions </h2>
                    <p className="head_p"> {`Our products deliver results because of the synergistic action of many different anti-inflammatory complementary, ingredients.`} </p>
                </div>
                <div className="col2 text-center">
                    <div>
                        <img src={CreamImage} alt="Main creme" className="img-fluid" />
                    </div>
                </div>
                <div className="col3">
                    <TbBrandDenodo className="icon" />
                    <h2 className="head_4 text-blue"> Formulation </h2>
                    <p className="head_p"> {`Our formulation is our core strength - we
know how to combine various types of
ingredients to produce anti-inflammatory
products that do not harm your skin or
health.`} </p>
                </div>
                <div className="col1">
                    <GiChemicalDrop className="icon" />
                    <h2 className="head_4 text-blue"> No Preservatives </h2>
                    <p className="head_p"> {`We prevent any type of toxicity or harm to
your health by avoiding the use of
preservatives completely. Instead, we
manufacture in small batches and use
only natural ingredients.`} </p>
                </div>
                <div className="col3">
                    <GiDroplets className="icon" />
                    <h2 className="head_4 text-blue"> Higher Concentrations </h2>
                    <p className="head_p"> {`We use higher concentrations of the most
potent ingredients including plant-derived
hyaluronic acid that help heal the skin
damage and restore your skin's natural
balance and beauty.`} </p>
                </div>
            </div>
        </Container>
    )
}
