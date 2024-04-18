import React from 'react'
import '../App.css'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import Input from '../components/Input'
import Sidebar from '../components/Sidebar'
import { init,addCredentials, redirectToVaultPage } from '../index';

function AddCreds(){
  
  const handleAddCredentials = async () => {
    await addCredentials();
  }

  const handleGetVault = async () => {
    await redirectToVaultPage();
  }

  return (
    <>
      <Background />
      
      <div className="section">
        <Logo /> 
        <Sidebar/>
        <div className="centered-text">
          <span>Enter Credentials</span>
          <Input type="text" id = "websiteInput" placeholder="Enter website" />
          <Input type="text" id = "usernameInput" placeholder="Enter username" />
          <Input type="password" id = "passwordInput" placeholder="Enter password" />
          <Button id="submitCredentials" onclick = {handleAddCredentials}  content="Submit Credentials"/>
          <Button id="getVaultButton"  onclick = {handleGetVault} content="Get Vault"/>
          <span id="result" className='text'></span>
        </div>
      </div>
  </>
  )
}


export default AddCreds