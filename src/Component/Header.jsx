import { useState } from "react";
import { Row, Col, Input, Collapse, ListGroup, ListGroupItem } from "reactstrap";
import Logo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiListLight } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <header>
            <Row className="container mx-auto px-0">
                <Col xs={12} className="logo_bar px-0 py-1">
                    <img src={Logo} alt="Logo" width="120px" />

                    <div className="position-relative d-none d-md-block">
                        <Input type="search" placeholder="Search For Products..." />
                        <CiSearch className="icon" onClick={toggleSearch} />
                    </div>

                    <div>
                        <CiSearch className="d-block d-md-none" onClick={toggleSearch} />
                        <GoHeart />
                        <IoBagHandleOutline onClick={toggleSidebar} />
                        <FaCircleUser />
                        <PiListLight className="d-block d-md-none" onClick={toggleSidebar} />
                    </div>
                </Col>
                <Collapse isOpen={isSearchOpen} className="px-0 pb-3">
                    <div className="search-bar">
                        <div className="position-relative d-block d-md-none">
                            <Input type="text" placeholder="Search For Products..." />
                            <CiSearch className="icon" onClick={toggleSearch} />
                            <LiaTimesSolid className="icon me-3" onClick={toggleSearch} />

                        </div>
                    </div>
                </Collapse>
            </Row>
            <Row>
                <Col xs={12} className="menu_bar d-none d-md-block">
                    <Link to="#"> By Category</Link>
                    <Link to="#"> Skin Type</Link>
                    <Link to="#"> Skin Concerns </Link>
                    <Link to="#"> Kits </Link>
                    <Link to="#"> Shop All </Link>
                </Col>
            </Row>

            <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <LiaTimesSolid className="position-absolute top-0 end-0 z-index-99 me-3 text-white fs-3 icon" onClick={closeSidebar} />
                <ListGroup flush className="mt-5 pt-5">
                    <ListGroupItem className="text-white bg-transparent p-4 mt-3">
                        <Link to="#"> By Category</Link>
                    </ListGroupItem>
                    <ListGroupItem className="text-white bg-transparent p-4 mt-3">
                        <Link to="#"> Skin Type</Link>
                    </ListGroupItem>
                    <ListGroupItem className="text-white bg-transparent p-4 mt-3">
                        <Link to="#"> Skin Concerns </Link>
                    </ListGroupItem>
                    <ListGroupItem className="text-white bg-transparent p-4 mt-3">
                        <Link to="#"> Kits </Link>
                    </ListGroupItem>
                    <ListGroupItem className="text-white bg-transparent p-4 mt-3">
                        <Link to="#"> Shop All </Link>
                    </ListGroupItem>
                </ListGroup>

            </div>
            <div className={`overlay ${isSidebarOpen ? 'active' : ''}`} ></div>
        </header>
    );
}
