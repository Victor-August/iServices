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
    Label,
    CheckBoxContainer,
    FormCheckBox,
    HeroBg,
    VideoBg
} from './FormElements'

import Video from '../../videos/video.mp4';

const CadForm = () => {
    return (
        <>
            <Container>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video}
                        picture-in-picture="off" type='video/mp4' />
                </HeroBg>

                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Faça seu cadastro!</FormH1>

                            <FormLabel htmlFor='for'>Nome</FormLabel>
                            <FormInput type='text' required />

                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />

                            <FormLabel htmlFor='for'>Celular</FormLabel>
                            <FormInput type='fone' required />

                            <FormLabel htmlFor='for'>Senha</FormLabel>
                            <FormInput type='password' required />

                            <Text>Tipo de usuário</Text>

                            <CheckBoxContainer>

                                <FormCheckBox type='checkbox' required />
                                <Label>Procuro Serviço</Label>
                            </CheckBoxContainer>

                            <CheckBoxContainer>
                                <FormCheckBox type='checkbox' required />
                                <Label>Forneço Serviço</Label>
                            </CheckBoxContainer>

                            <FormButton type='submit' to='/search'>Cadastrar</FormButton>

                        </Form>
                    </FormContent>
                </FormWrap>

            </Container >
        </>
    )
}

export default CadForm;
