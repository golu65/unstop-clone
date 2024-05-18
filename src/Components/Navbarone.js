import React from 'react';
import { Box, styled } from '@mui/material';
import { Navbar, Nav, Container,  Form, Button } from 'react-bootstrap';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import WorkIcon from '@mui/icons-material/Work';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LoginIcon from '@mui/icons-material/Login';
import AppsIcon from '@mui/icons-material/Apps';


const MainLibarry = styled(Box)`
    margin-left: 15rem;
    margin-top: 5px
`

const MainLibarrySecond = styled(Box)`
    margin-left: 1rem;
    margin-top: 5px
`

const ButtomBox = styled(Box)`
    margin-left: 4rem;
    margin-top: 13px;
`

const ButtomBoxSec = styled(Box)`
    margin-left: 2rem;
    margin-top: 13px;
`

const Navbarone = () => {



    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <img style={{ marginLeft: '4rem', width: '82px', height: '32px',  }} src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg" alt="" />
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll" style={{ marginLeft: '3rem', }}>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <MainLibarry>
                                <Nav.Link href="#action1" style={{fontWeight:'bold', letterSpacing:'1px', color: '#3e6493', fontSize:'15px'}}>Learn</Nav.Link>
                                <LocalLibraryIcon style={{marginLeft:'1rem', marginTop:'-1rem',  color: '#3e6493'}}/>
                            </MainLibarry>

                            <MainLibarrySecond>
                                <Nav.Link href="#action1" style={{fontWeight:'bold', letterSpacing:'1px', color: '#3e6493', fontSize:'15px'}}>Practice</Nav.Link>
                                <AllInclusiveIcon style={{marginLeft:'1.5rem', marginTop:'-1rem',  color: '#3e6493'}}/>
                            </MainLibarrySecond>

                            <MainLibarrySecond>
                                <Nav.Link href="#action1" style={{fontWeight:'bold', letterSpacing:'1px', color: '#3e6493', fontSize:'15px'}}>Mentorship</Nav.Link>
                                <LightbulbIcon style={{marginLeft:'2.5rem', marginTop:'-1rem',  color: '#3e6493'}}/>
                            </MainLibarrySecond>

                            <MainLibarrySecond>
                                <Nav.Link href="#action1" style={{fontWeight:'bold', letterSpacing:'1px', color: '#3e6493', fontSize:'15px'}}>Compete</Nav.Link>
                                <CallToActionIcon style={{marginLeft:'2.2rem', marginTop:'-1rem',  color: '#3e6493'}}/>
                            </MainLibarrySecond>

                            <MainLibarrySecond>
                                <Nav.Link href="#action1" style={{fontWeight:'bold', letterSpacing:'1px', color: '#3e6493', fontSize:'15px'}}>Jobs</Nav.Link>
                                <WorkIcon style={{marginLeft:'15px', marginTop:'-1rem',  color: '#3e6493'}}/>
                            </MainLibarrySecond>

                            <ButtomBox>
                                <Button variant="outline-success" style={{fontWeight:'600',}}>
                                    <VolumeUpIcon style={{marginRight:'4px'}}/>
                                    Host
                                </Button>
                            </ButtomBox>
                            <ButtomBoxSec>
                                <Button variant="outline-success" style={{fontWeight:'600'}}>
                                   
                                    Login
                                    <LoginIcon style={{marginLeft:'4px'}}/>
                                </Button>
                            </ButtomBoxSec>
                            <ButtomBoxSec>
                                <AppsIcon style={{fontSize:'36px', marginTop:'2px', color: '#3e6493',}}/>
                            </ButtomBoxSec>
                            
                            
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navbarone
