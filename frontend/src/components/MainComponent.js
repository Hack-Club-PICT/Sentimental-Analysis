import React, { Component } from 'react';
import Header from './NavBar';
import Bgparticle from './BgParticle' 
import Title from './Title';
import SearchComponent from './SearchComponent';
import Footer from "./Footer";
class Main extends Component {

    render() {

    return (
        <div>
            <Bgparticle />
            <Header />
            <Title />
            <SearchComponent />
            <Footer />
      </div>
    );
    }
}
export default Main;
