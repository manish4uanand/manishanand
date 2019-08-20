import React, { Component } from 'react';


class Home extends Component {

  state = {
    bgImage: [
      {
        title: "",
        url: "https://ik.imagekit.io/n6yhgitvy/background2_EA0WIa5iZu.jpg"
      }
    ]
  }

  render(){
    var { bgImage } = this.state;
    let styles = {
      body: {
        backgroundImage: `linear-gradient(rgba(20,20,20, .5), rgba(20,20,20, .5)),url(${bgImage[0].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      },

      text_centered: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        fontSize: `2.6rem`
      }

    }
    return(
      <React.Fragment>
        <div id="home">
          <div style={styles.body}>            
            <p className="text-white" style={styles.text_centered}>
              <span>Hello, I'm <b className="text-danger">Manish Anand.</b></span><br/>
              <span>I'm a full-stack web developer.</span>
            </p>            
          </div>          
        </div>        
      </React.Fragment>
    )
  }
}

export default Home