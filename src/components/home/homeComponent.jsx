import React from 'react';
import { Footer } from '../common';
import Header from '../common/header';

function HomeComponent(props) {
    return (
        <div>
            <Header/>
            <h1>Home</h1>
            <Footer/>
        </div>
    );
}

HomeComponent.propTypes = {
    
};

export default HomeComponent;