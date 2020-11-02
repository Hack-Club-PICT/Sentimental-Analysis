import React, { Component } from 'react';
import Header from './NavBar';
import Bgparticle from './BgParticle' 
import Title from './Title';
import SearchComponent from './SearchComponent';
class Main extends Component {

    render() {

    return (
        <div>
            <Bgparticle />
            <Header />
            <Title />
            <SearchComponent />
      </div>
    );
    }
}
export default Main;
