import React from 'react';
import MenuAppBar from '../../components/Navbar/navbar';
import Listas from '../../components/Lista/lista';

export default function Home(){
    return(
        <div>
            <MenuAppBar/>
            <ul>
                <li><a href="splash">Ir para Splash screen</a></li>
            </ul>
        </div>
    );
};