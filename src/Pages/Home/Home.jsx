import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import ClientCarousel from './ClientCarousel/ClientCarousel';
import Benefits from './BenifitsSection/Benifits';
import BeMarchent from './BeMarchent/BeMarchent';
import HowItWorks from './HowItsWork/HowItWorks';
import Faq from './FAQ/Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <ClientCarousel></ClientCarousel>
            <Benefits></Benefits>
            <BeMarchent></BeMarchent>
            <Faq></Faq>
        </div>
    );
};

export default Home;