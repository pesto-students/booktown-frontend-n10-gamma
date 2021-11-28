import React from 'react';
import { Footer } from '../common';
import Header from '../common/header';
import { HomeContainer, HomeBannerOverlapper } from './styledComponents';
import bookTownImg from '../../assets/book-img-1.png';
import {Button} from '../common';
function HomeComponent(props) {
    return (
        <>
            <Header/>
                <HomeContainer>
                    {/* <img src={bookTownImg}/> */}
                    <HomeBannerOverlapper>
                       <div className='banner-overlapper-title'>
                            <span>BookTown</span>
                       </div>
                       <p className='banner-overlapper-slogan'>
                           Read more, Gain more, Win more
                       </p>
                       <p className='banner-overlapper-text'>
                           Sell & Buy old and new books here
                       </p>
                       <div className='overlapper-btn-container'>
                          <Button className='overlapper-btn overlapper-btn-black' text='Sell Now'/> 
                          <Button className='overlapper-btn' text='Buy Now'/> 
                       </div>
                    </HomeBannerOverlapper>
                </HomeContainer>
            <Footer/>
        </>
    );  
}

HomeComponent.propTypes = {
    
};

export default HomeComponent;