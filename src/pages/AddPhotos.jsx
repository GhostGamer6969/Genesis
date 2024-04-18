import React from 'react'
import '../App.css'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import Input from '../components/Input'
import Sidebar from '../components/Sidebar'
import { init,addCredentials, redirectToVaultPage } from '../index';

function AddPhotos(){


    return (
        <>
            <Background />

            <div className="section">
                <Logo />
                <Sidebar/>
                <div className="centered-text">
                    <span>To be Added....</span>
                </div>
            </div>
        </>
    )
}


export default AddPhotos