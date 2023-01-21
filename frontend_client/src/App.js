import React, { useEffect, useState } from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container/index';
import { Navbar, SocialMedia } from './components/index';
import { images } from './constants';


import './App.scss'



const App = () => {

    const [loading, setLoading] = useState(true);

    const rand = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, rand);
    }, [])


    return (
        <>
            <div className={loading ? 'app__loading-progress' : 'app__loading-done'}>
                <img src={images.logo} alt='logo_spining'/>
            </div>
            <div className="app">
                <Navbar />
                <SocialMedia />
                <Header />
                <About />
                <Work />
                <Skills />
                <Testimonial />
                <Footer />
            </div>
        </>
    )
};

export default App;


