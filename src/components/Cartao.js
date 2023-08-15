import React from 'react';
import './Jumbotron.scss';
import './Cartao.scss';
import { Row, Col, Image } from 'react-bootstrap';
import CartaoDesktop from '../assets/cartao-roxo--Desktop.png'
import CartaoMobile from '../assets/cartao-roxo--Mobile.png'

const Cartao = () => (
    <div class='jumbotron text-dark cartao'>
        <Row className='my-lg-5'>
            <Col lg className='text-lg-center pt-lg-5'>
                <p lg classname='pr-lg-1'>Cartão de crédito</p>
                <Row>
                    <Col>
                        <p>Crédito pessoal</p>
                    </Col>
                    <Col>
                        <p>Pagamentos Online</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>APP</p>
                    </Col>
                    <Col>
                        <p>Carteira Digital</p>
                    </Col>
                </Row>
            </Col>
            <Col lg className='text-lg-center'>
                <Image className="d-lg-none " src={CartaoMobile} />
                <Image className="d-none d-lg-inline-block" src={CartaoDesktop} />
            </Col>
        </Row>
    </div>
);

export default Cartao;
