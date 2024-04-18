import React from 'react'
import '../App.css'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import Input from '../components/Input'
import Sidebar from '../components/Sidebar'
import { init,addCredentials, redirectToVaultPage } from '../index';

function Dashboard(){

    return (
        <>
            <Background/>

            <div className="section">

                <Sidebar db = "true"/>

                    <Logo/>
                <div className="centered-text">
                    <span>WELCOME TO THE WORLD OF GENESIS</span>
                    <span>Secure Your Password & Vault</span>
                </div>
            </div>
        </>
    );
}


export default Dashboard