import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Bgparticle extends Component {
  

  render() {


    return (
      <div>
        <ParticlesBg color="#08218c" num={40} type="cobweb" bg={true} />
      </div>
    );
  }
}

export default Bgparticle;