import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';

const Banner = () => {
    return (
            <Carousel autoPlay={true} showThumbs={false}  autoFocus={true} axis='vertical' infiniteLoop={true}>
                <div>
                    <img src={bannerImg1} />
                    {/* <p className="legend">Slide 1</p> */}
                </div>
                <div>
                    <img src={bannerImg2} />
                    {/* <p className="legend">Slide 2</p> */}
                </div>
                <div>
                    <img src={bannerImg3} />
                    {/* <p className="legend">Slide 3</p> */}
                </div>
            </Carousel>
    );
};

export default Banner;