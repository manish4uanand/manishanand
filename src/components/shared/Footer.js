import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {  
  render() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return (
      <Container fluid style={{ backgroundColor: "#36444F" }}>
        <Row className="pt-md-3 text-white">
          <Col className="text-center" xs="12" sm="12" md="12">
            <p className="p-2 text-muted" style={{ fontSize: '12px' }}>MANISH ANAND &copy; {currentYear}</p>
          </Col>
          {/* <Col className="text-center" xs="12" sm="12" md="6">
            <img className="p-2" alt="Manish Anand" width="100"/>
          </Col> */}
        </Row>
      </Container>
    )
  }
}
