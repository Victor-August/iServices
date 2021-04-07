import React from 'react';
import MenuAppBar from '../../components/Navbar/navbar';
import Listas from '../../components/Lista/lista';

export default function Home(){
    return(
        <div>
            <MenuAppBar/>
            <div style={{textAlign: 'center', paddingTop: '15vh'}}>
                <h1>iServices</h1>
                <h4>Home</h4>
                    <p>
                        <a href='/splash'>Voltar para Splash</a>
                    </p>
            </div>
        </div>
    );
};