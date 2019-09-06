import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {  
  render() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return (
      <Container fluid style={{ backgroundColor: "#36444F" }}>
        {/* <Row className="pt-md-3 text-white">
          <Col className="text-center" xs="6" sm="6" md="6">
            <p className="p-2 text-muted" style={{ fontSize: '12px' }}>MANISH ANAND &copy; {currentYear}</p>
          </Col>
          <Col className="text-center" xs="6" sm="6" md="6">
            <div className="row pull-right">
              <div><a href="" target="_blank"><i class="fab fa-linkedin"></i></a></div>&nbsp;
              <div><a href="" target="_blank"><i class="fab fa-github"></i></a></div>&nbsp;
              <div><a href="" target="_blank"><i class="fab fa-facebook-square"></i></a></div>&nbsp;
              <div><a href="" target="_blank"><i class="fab fa-instagram"></i></a></div>&nbsp;
            </div>
          </Col>
        </Row> */}
        <Row className="pt-md-3 text-white">
        <Col className="text-center" xs="6" sm="6" md="6">
            <p className="p-2 text-muted" style={{ fontSize: '12px' }}>MANISH ANAND &copy; {currentYear}</p>
          </Col>
          <Col className="text-center" xs="6" sm="6" md="6">
            <p>
              <a className="p-2 text-default" href="https://www.linkedin.com/in/manish4uanand/" target="_blank"><i class="fab fa-linkedin"></i></a>
              <a className="p-2 text-default" href="https://github.com/manish4uanand" target="_blank"><i class="fab fa-github"></i></a>
              <a className="p-2 text-default" href="https://www.facebook.com/manish4uanand" target="_blank"><i class="fab fa-facebook-square"></i></a>
              <a className="p-2 text-default" href="https://www.instagram.com/itzmanishanand/" target="_blank"><i class="fab fa-instagram"></i></a>
            </p> 
          </Col>
        </Row>
      </Container>
    )
  }
}
