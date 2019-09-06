import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { OfflineBolt, ImportantDevices, Devices  } from '@material-ui/icons';

const About = () => {

  const styles = {
    img: {
      height: 'auto',
      width: '50%'
    },
    icon: { 
      left: '42%',
      fontSize: '50px',
      color: 'white',
      top: '17%',
      position: 'absolute'
    },

    aboutHeading: {
      // margin: '0 0 0 12%'
    }
  }
  
  return (
    <Container id="about" className="mb-2">
      <div>
        <br/>
      </div>
      <Row className="justify-content-md-center" style={{'marginTop': '50px'}}>
        <Col className="text-center">
          <div className="animated slideInLeft delay-2s">
            <h2 className="font-weight-bold">ABOUT</h2>
            <div className="m-auto headerBar"></div>
          </div>
        </Col>
      </Row>
      
      <Row className="mt-2 justify-content-md-center text-center">      
        <Col md="3" xs="6" className="text-center">
          <img src="https://ik.imagekit.io/n6yhgitvy/Hexagon_-CL4M4TB9d.png" alt="" style={styles.img}/>
          <OfflineBolt style={styles.icon} />
          <h4 style={styles.aboutHeading} >Fast</h4>
          <p className="text-secondary">Fast load times and lag free interaction, my highest priority.</p>
        </Col>
        <Col md="3" xs="6">
          <div>
            <img src="https://ik.imagekit.io/n6yhgitvy/Hexagon_-CL4M4TB9d.png" alt="" style={styles.img}/>
            <ImportantDevices style={styles.icon} />
            <h4 style={styles.aboutHeading}>Intuitive</h4>
            <p className="text-secondary">Strong preference for easy to use, intuitive UX/UI.</p>
          </div>
        </Col>
        <Col md="3" xs="6">
          <div>
            <img src="https://ik.imagekit.io/n6yhgitvy/Hexagon_-CL4M4TB9d.png" alt="" style={styles.img}/>
            <Devices style={styles.icon} />
            <h4 style={styles.aboutHeading}>Responsive</h4>
            <p className="text-secondary">My layouts will work on any device, big or small.</p>
          </div>
        </Col>
        <Col md="3" xs="6">
          <div>
            <img src="https://ik.imagekit.io/n6yhgitvy/Hexagon_-CL4M4TB9d.png" alt="" style={styles.img}/>
            <ImportantDevices style={styles.icon} />
            <h4 style={styles.aboutHeading}>Dynamic</h4>
            <p className="text-secondary">Websites don't have to be static, I love making pages come to life.</p>
          </div>
        </Col>         
      </Row>
      <Row className="mt-4">
        <Col sm={6} className="text-center">
          <img src="https://ik.imagekit.io/n6yhgitvy/imgonline-com-ua-shape-MfF3Zb8gozimMci4_r62xgoJU2.png" alt="Manish" width="50%"/>
          <h4 className="mt-2">Who's this guy?</h4>
          <p>
            I'm the Tech Lead for <a href="https://arrivae.com" target="_blank" rel="noreferrer">Arrivae</a> in Mumbai. 
            I have serious passion for creating intuitive, dynamic user experiences.<br/> 
            Let's make something special.
          </p>
        </Col>
        <Col sm={6}>
          <div className="progress">
            <div style={{'backgroundColor': '#00AAFF', 'padding': '9px', 'width': '75px'}}>
              HTML
            </div>
            <div className="progress-bar animated slideInLeft delay-2s" role="progressbar" style={{width: '80%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}> &nbsp; 80%</div>
          </div>
          <br/>
          <div className="progress">
            <div style={{'backgroundColor': '#00AAFF', 'padding': '9px', 'width': '75px'}}>
              CSS
            </div>
            <div className="progress-bar animated slideInLeft delay-2s" role="progressbar" style={{width: '60%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}> &nbsp; 60%</div>
          </div>
          <br/>
          <div className="progress">
            <div style={{'backgroundColor': '#00AAFF', 'padding': '9px', 'width': '75px'}}>
              JavaScript
            </div>
            <div className="progress-bar  animated slideInLeft delay-3s" role="progressbar" style={{width: '70%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}> &nbsp; 70%</div>
          </div>
          <br/>
          <div className="progress">
            <div style={{'backgroundColor': '#00AAFF', 'padding': '9px', 'width': '75px'}}>
              jQuery
            </div>
            <div className="progress-bar  animated slideInLeft delay-1s" role="progressbar" style={{width: '75%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}> &nbsp; 75%</div>
          </div>
          <br/>          
          <div className="progress">
            <div style={{'backgroundColor': '#00AAFF', 'padding': '9px', 'width': '75px'}}>
              MySQL
            </div>
            <div className="progress-bar  animated slideInLeft delay-3s" role="progressbar" style={{width: '90%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}> &nbsp; 90%</div>
          </div>
          <br/>
          <div className="progress">
            <div style={{'backgroundColor': '#00AAFF', 'padding': '9px', 'width': '75px'}}>
              PostgreSQL
            </div>
            <div className="progress-bar  animated slideInLeft delay-3s" role="progressbar" style={{width: '90%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}> &nbsp; 90%</div>
          </div>
          <br/>
          <div className="progress">
            <div style={{'backgroundColor': '#00AAFF', 'padding': '9px', 'width': '75px'}}>
              ReactJS
            </div>
            <div className="progress-bar  animated slideInLeft delay-2s" role="progressbar" style={{width: '40%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}> &nbsp; 40%</div>
          </div>
          <br/>
          <div className="progress">
            <div style={{'backgroundColor': '#00AAFF', 'padding': '9px', 'width': '75px'}}>
              Ruby
            </div>
            <div className="progress-bar  animated slideInLeft delay-1s" role="progressbar" style={{width: '80%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}> &nbsp; 80%</div>
          </div>
          <br/>
          <div className="progress">
            <div style={{'backgroundColor': '#00AAFF', 'padding': '9px', 'width': '75px'}}>
              Rails
            </div>
            <div className="progress-bar  animated slideInLeft delay-3s" role="progressbar" style={{width: '90%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}> &nbsp; 90%</div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}


export default About;