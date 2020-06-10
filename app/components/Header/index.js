/**
 *
 * Header
 *
 */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled, { css } from 'styled-components';
import Logo from './assets/logo.png';

const ImageWrapper = styled.img`
  width: 150px;
  margin-top: 3rem;
`;

const Line = styled.hr`
  position: relative;
  top: 55%;
  border-top: 1px solid #bd2130;
  box-shadow: 0px 1px 15px 5px #bd2130;

  ${props =>
    props.blue &&
    css`
      border-top: 1px solid blue;
      box-shadow: 0px 1px 15px 5px blue;
    `};
`;
export default function Header() {
  return (
    <Container>
      <Row>
        <Col>
          <Line />
        </Col>
        <Col className="d-flex justify-content-center">
          <ImageWrapper src={Logo} />
        </Col>
        <Col>
          <Line blue />
        </Col>
      </Row>
    </Container>
  );
}
