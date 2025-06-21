import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import ClientCarousel from './ClientCarousel/ClientCarousel';
import Benefits from './BenifitsSection/Benifits';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientCarousel></ClientCarousel>
            <Benefits></Benefits>
        </div>
    );
};

export default Home;