import { React, useState } from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { ButtonS } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} picture-in-picture="off" type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Com iServices você tem facilidade, rapidez e segurança!</HeroH1>
                <HeroP>Cadastre se e encontre um prestador de serviços agora mesmo!</HeroP>
                <HeroBtnWrapper>
                    <ButtonS to="cadastrar"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Comece agora {hover ? <ArrowForward /> : <ArrowRight />}
                    </ButtonS>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
