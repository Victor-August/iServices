import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    HeroBg,
    VideoBg
} from './SiginElements'

import Video from '../../videos/video.mp4';

const SignIn = () => {
    return (
        <>
            <Container>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video}
                        picture-in-picture="off" type='video/mp4' />
                </HeroBg>
                <FormWrap>
                    <Icon to='/'>iServices</Icon>
                    <FormContent>
                        <Form action="/homePage">
                            <FormH1>Acesse com sua conta</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Senha</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit' to='/homePage'>Acesse</FormButton>
                            <Text>Esqueci minha senha.</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default SignIn;
