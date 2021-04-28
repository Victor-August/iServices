import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Categorias</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src="#" />
                    <ServicesH2>Pintura e Decoração </ServicesH2>
                    <ServicesP>Clique e encontre o serviço mais próximo de você.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="#" />
                    <ServicesH2>Reforma / Construção</ServicesH2>
                    <ServicesP>Clique e encontre o serviço mais próximo de você.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="#" />
                    <ServicesH2>Limpeza</ServicesH2>
                    <ServicesP>Clique e encontre o serviço mais próximo de você.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services

