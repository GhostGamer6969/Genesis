import React, { useEffect, useState } from 'react';
import './App.css'
import Background from './components/Background'
import Logo from './components/Logo'
import Button from './components/Button'
import Input from './components/Input'
import {init,setEncryptionKey, getEncryptionKey, login, redirectToVaultPage} from './index.js'


function App() {
  const [web3Initialized, setWeb3Initialized] = useState(false);

  useEffect(() => {
    const initializeWeb3 = async () => {
      await init();
      setWeb3Initialized(true);
    };

    initializeWeb3();
  }, []);

  const handleSetEncryptionKey = async () => {
    const masterPassword = 'my-master-password';
    const result = await setEncryptionKey(masterPassword);
    console.log('Encryption key set result:', result);
  };

  const handleGetEncryptionKey = async () => {
    const result = await getEncryptionKey();
    console.log('Encryption key:', result);
  };

  const handleLogin = async () => {
    const masterPassword = 'my-master-password';
    const result = await login(masterPassword);
    console.log('Login result:', result);
  };


  return (
    <>
      <Background />
      
      <div className="section">
      <Logo /> 

	    <div className="centered-text">
		    <span>WELCOME TO THE WORLD OF GENESIS</span>
		    <span>Secure Your Password & Vault</span>
        
        <Input type="password" id="masterPasswordInput" placeholder="Enter master password"/>

        <Button onclick={handleSetEncryptionKey} content="Set Encryption Key"/>
        <Button onclick={handleGetEncryptionKey} content="Get Encryption Key"/>
        <Button onclick={handleLogin} content="Login"/>
        <span className="text" id="result"></span>
	    </div>
		
	    </div>
    
    </>
  )
}

export default App
