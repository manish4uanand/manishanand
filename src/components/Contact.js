import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Contact = () => {
  return(
    <div id="contact" class="mt-5">
      <Container fluid >
        <Row className="pt-md-3 text-white" >
          <Col className="text-center" xs="12" sm="12" md="12">
            <h4 className="p-2 text-white mt-5">
              Write me <br/>
              <a href = "mailto:manish4uanand@gmail.com?subject = Feedback&body = Message" style={{'textDecoration': 'none'}}>
                manish4uanand@gmail.com
              </a>
            </h4>
          </Col>          
        </Row>
      </Container>
    </div>
  )
}

export default Contact;