import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Project = () => {
  return(
    <Container id="project" className="mb-2">
      <div>
        <br/>
      </div>
      <Row className="justify-content-md-center" style={{'margin-top': '50px'}}>
        <Col className="text-center">
          <div className="animated slideInLeft delay-2s">
            <h2 className="">PROJECTS</h2>
            <div className="m-auto headerBar"></div>
          </div>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-md-center text-center">      
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#" style={{'width':'155px'}}>ALL</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{'width':'155px'}}>RUBY/RAILS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{'width':'155px'}}>REACT</a>
              </li>              
            </ul>
          </div>
        </nav>
      </Row>
    </Container>
  )
}

export default Project;