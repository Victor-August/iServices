import React from 'react';
import MenuAppBar from '../../components/Navbar/navbar';

export default function Servicos(){
    return(
        <div>
            <MenuAppBar/>
            <div style={{textAlign: 'center', paddingTop: '15vh'}}>
                
                <h1>iServices</h1>
                <h4>Servicos screen</h4>
                <p><a href="/splash">Voltar para Splash</a></p>
            </div>
        </div>
    );
};