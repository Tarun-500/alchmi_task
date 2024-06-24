import { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';

export default function TabSection() {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const data = [{
        id: 1,
        title: "Hyaluronic Acid",
        desc: "A powerful topical humectant that nourishes and hydrates your skin"
    },
    {
        id: 2,
        title: "Rosemary",
        desc: "Increases blood circulation, tones, and binds loose & sagging skim"
    }, {
        id: 3,
        title: "Turmeric",
        desc: "Has anti-inflammatory properties that neutralize free radicals and slow premature aging."
    }, {
        id: 4,
        title: "Beta-Glucan",
        desc: "Its anti-inflammatory and antioxidant properties promote healing and reduce scarring"
    }, {
        id: 5,
        title: "Bilberry",
        desc: "Minimizes inflammation and reverses free radical damage."
    }, {
        id: 6,
        title: "Sugar Maple",
        desc: "Minimizes and repairs cell damage caused by free radicals."
    }, {
        id: 7,
        title: "L-Ascorbic Acid",
        desc: "Stimulates collagen production and reduces inflammation."
    },
    {
        id: 8,
        title: "Mangosteen",
        desc: "Is an antioxidant that kills bacteria and fights free radical damage."
    }


    ]
    return (
        <Container>
            <Nav tabs className="justify-content-center">
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        What Is In
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        What Is Not
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className="py-4">
                <TabPane tabId="1">
                    <Row>
                        {data?.map((data) => {
                            return <Col sm="6" key={data.id} className="mb-3">
                                <h4 className="head_4 text-blue"> {data.title} </h4>
                                <p className="head_p">
                                    {data.desc}
                                </p>
                            </Col>
                        })}

                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        {data?.toReversed().map((data) => {
                            return <Col sm="6" key={data.id} className="mb-3">
                                <h4 className="head_4 text-blue"> {data.title} </h4>
                                <p className="head_p">
                                    {data.desc}
                                </p>
                            </Col>
                        })}

                    </Row>
                </TabPane>
            </TabContent>
        </Container>
    );
}
