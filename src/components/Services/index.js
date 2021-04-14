import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src="#"/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>Unlock our special membership and receive cashback</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="#"/>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>Unlock our special membership and receive cashback</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="#"/>
                    <ServicesH2>Premium Benefis</ServicesH2>
                    <ServicesP>Unlock our special membership and receive cashback</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services

