import React from 'react';
import './nav.css';



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





import {
    BrowserRouter
} from "react-router-dom";


function Navbarr() {
    return (
        <BrowserRouter>


            <Navbar fixed="top" expand="lg">
                <Container>


                    <div className='logo' href="#home"><img src='https://us.123rf.com/450wm/putracetol/putracetol1805/putracetol180502134/101053262-drop-delivery-logo-icon-design.jpg?ver=6' alt="" /></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='#services' >  الخدمات </Nav.Link>
                            <Nav.Link href='#phone-number' > تواصل معنا </Nav.Link>
                            <Nav.Link href='#about' >  نبذة عنا</Nav.Link>
                            <Nav.Link className='active' href='#header' > الرئيسية</Nav.Link>






                            <div className='nav-btn' ><a aria-label="Contact Us In WhatsUp " href="https://wa.me/+966507395849"> <button > تواصل معنا علي واتس اب</button>  </a> </div>
                            {/* <button className='contactUs' >CONTACT US <FontAwesomeIcon className='arrowIcon' icon={faSquareArrowUpRight} /></button> */}

                        </Nav>
                    </Navbar.Collapse>


                </Container>
            </Navbar>

        </BrowserRouter>
    );
}

export default Navbarr;
