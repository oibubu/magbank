import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Card, useAccordionButton } from 'react-bootstrap';
import IconText from './IconText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faWallet,
  faShieldAlt,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import './Faq.scss';

const Faq = () => {
  const options = [
    { icon: faCreditCard, text: 'Cartão de crédito' },
    { icon: faWallet, text: 'Conta e abertura' },
    { icon: faShieldAlt, text: 'Token digital' },
    { icon: faUserTie, text: 'Produtos e Serviços' },
  ];

  const [index, setIndex] = useState(0);

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      setIndex(eventKey)
    );

    return (
      <button
        type="button"
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }


  const handleClick = key => {
    console.log(key)
    setIndex(key)
  }


  return (
    <section className='faq text-light'>
      <Container className='py-5'>
        <Row className='justify-content-center'>
          <h2 className='faq-title my-5'>Dúvidas frequentes</h2>
        </Row>
        <Row className='d-flex align-items-center justify-items-center'>
          <Col className='d-lg-none mb-5' xs={12}>
            <Row>
              {options.map(({ icon }, key) => (
                <Col className='d-flex justify-content-center' key={key}>
                  <FontAwesomeIcon
                    icon={icon}
                    size='2x'
                    color={'#FFF'}
                    onClick={() => handleClick(key)}
                  />
                </Col>
              ))}
            </Row>
            <Row className='justify-content-center mt-5'>
              <p className='lead'>{options[index].text}</p>
            </Row>
          </Col>

          <Col className='d-none d-lg-block'>
            {options.map(({ icon, text }, key) => (
              <IconText
                icon={icon}
                size={3}
                className='faq-clickable mb-3'
                textClassName='lead'
                color='#FFF'
                onClick={() => handleClick(key)}
                key={key}
              >
                {text}
              </IconText>
            ))}
          </Col>

          <Col>
            <Accordion defaultActiveKey='0' activeKey={`${index}`}>
              <Card>
                <Card.Header>
                  <CustomToggle  eventKey='0'>
                    Lorem ipsum dolor sit amet
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey='1'>
                    Lorem ipsum dolor sit amet
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey='1'>
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey='2'>
                    Lorem ipsum dolor sit amet
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey='2'>
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey='3'>
                    Lorem ipsum dolor sit amet
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey='3'>
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;