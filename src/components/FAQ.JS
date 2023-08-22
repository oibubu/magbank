import React from 'react'
import { container, cow, row } from 'react-bootstrap'
import IconText from './IconText'
import {
    faCreditCard,
    faWallet,
    faShieldAlt,
    faUserTie
} from './IconText'

const Faq = () => (
    <container>
        <Row>
            <Col>
                <IconText icon={faCreditCard}>Cartão de crédito e débito</IconText>
                <IconText icon={faWallet}>Conta e abertura </IconText>
                <IconText icon={faShieldAlt}>Tokem digital</IconText>
                <IconText icon={faUserTie}>Produtos e serviços</IconText>
            </Col>
            <Col></Col>
        </Row>
    </container>
);

export default Faq;
