import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import '../App.css'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import contractABI from '../contractABI.json';
import Sidebar from "../components/Sidebar.jsx";

const contractAddress = "0x7399905aCa7AFB8aDb7586Cd4cAAd4Cac828CDa8";

let web3;
let contractInstance;

async function init() {
    try {
        // Check if MetaMask is installed
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            web3 = new Web3(window.web3.currentProvider);
        } else {
            console.error("No Ethereum provider detected");
            return;
        }

        const accounts = await web3.eth.getAccounts();
        web3.eth.defaultAccount = accounts[0];

        contractInstance = new web3.eth.Contract(contractABI, contractAddress);
    } catch (error) {
        console.error("Error initializing:", error);
    }
}

function VaultPage() {
    const [vaultContents, setVaultContents] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            await init();
            await getVault();
        }
        fetchData();
    }, []);
    
    async function getVault() {
        try {
            const result = await contractInstance.methods.getVault().call({
                from: web3.eth.defaultAccount
            });
            
            const indices = result[0].map(Number);
            const websites = result[1];
            const usernames = result[2];
            const passwords = result[3];
            
            setVaultContents(indices.map((index, i) => ({
                index,
                website: websites[i],
                username: usernames[i],
                password: passwords[i]
            })));
        } catch (error) {
            console.error("Error getting vault contents:", error);
        }
    }
    
    async function deleteCredentials(index) {
        try {
            await contractInstance.methods.deleteCredentials(index).send({
                from: web3.eth.defaultAccount
            });
            await getVault();
        } catch (error) {
            console.error("Error deleting credentials:", error);
        }
    }

    return (
      <div>
            <Background/>
      <div className='cont'>


          <Logo/>
            <h1 className='head'>Vault Contents</h1>
            <Sidebar/>
            <div className='container2'>
                {vaultContents.length > 0 ? (
                    vaultContents.map(entry => (
                        <div key={entry.index} className='card'>
                            <strong>Index:</strong> {entry.index}<br />
                            <strong>Website:</strong> {entry.website}<br />
                            <strong>Username:</strong> {entry.username}<br />
                            <strong>Password:</strong> {entry.password}<br />
                            <Button onclick={() => deleteCredentials(entry.index)} content="Delete Entry"/>
                        </div>
                    ))
                ) : (
                    <p className='centered-text'>No entries in the vault.</p>
                )}
            </div>
            </div>
        </div>
    );
}

export default VaultPage;
