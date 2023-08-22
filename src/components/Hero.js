import React from 'react';
import './Jumbotron.scss';
import './Hero.scss';
import { Row, Col, Button, Image } from 'react-bootstrap';
import Logo from '../assets/paycopy--Mobile.png';
import LogoDesktop from '../assets/paycopy--Desktop.png';

const Hero = () => (
    <div class='jumbotron text-center text-light hero'>
        <Row className='my-lg-5'>
        <Col lg className='text-lg-right my-lg-5'>
            <Image className='d-lg-none' src={Logo} />
            <Image className='d-none d-lg-inline-block' src={LogoDesktop} />
        </Col>
        <Col lg className='text-lg-left my-lg-5'>
            <p>Pague suas contas pelo nosso APP</p>
            <Button variant='outline-light'>Abra sua conta</Button>
        </Col>
        </Row>
    </div>
);

export default Hero;
