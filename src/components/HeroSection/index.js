import React from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBg, VideoBg} from './HeroElements'; 

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual </HeroH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection