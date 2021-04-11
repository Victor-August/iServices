import { React, useState } from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} picture-in-picture="off" type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Com iServices você tem rapidez e agilidade!</HeroH1>
                <HeroP>Cadastre se e encontre um prestador de serviços agora mesmo!</HeroP>
                <HeroBtnWrapper>
                    <Button to="cadastrar" onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        Comece agora {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
