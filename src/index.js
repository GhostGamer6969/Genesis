import Web3 from 'web3';
import contractABI from './contractABI.json';

// const contractAddress = "0x5a5BaD7056eBE341a479FAE80a6f76B960CAD0BB";
const contractAddress = "0x7399905aCa7AFB8aDb7586Cd4cAAd4Cac828CDa8";


let web3;
let contractInstance;

async function init() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();

            // Set default account
            web3.eth.defaultAccount = (await web3.eth.getAccounts())[0];
        } catch (error) {
            console.error("User denied account access");
        }
    } else if (window.web3) {
        web3 = new Web3(web3.currentProvider);

        // Set default account
        web3.eth.defaultAccount = (await web3.eth.getAccounts())[0];
    } else {
        console.error("No Ethereum provider detected");
        return;
    }

    contractInstance = new web3.eth.Contract(contractABI, contractAddress);
}

  async function setEncryptionKey() {
    const masterPassword = document.getElementById("masterPasswordInput").value;

    try {
        const result = await contractInstance.methods.setEncryptionKey(masterPassword).send({
            from: web3.eth.defaultAccount
        });

        document.getElementById("result").innerHTML = "Encryption Key Set Successfully!";
        console.log(result);
    } catch (error) {
        console.error("Error setting encryption key:", error);
    }
}

async function getEncryptionKey() {
    try {
        const result = await contractInstance.methods.getEncryptionKey().call({
            from: web3.eth.defaultAccount
        });

        document.getElementById("result").innerHTML = `Encryption Key: ${result}`;
        console.log(result);
    } catch (error) {
        console.error("Error getting encryption key:", error);
    }
}

async function login() {
    const masterPassword = document.getElementById("masterPasswordInput").value;

    try {
        const result = await contractInstance.methods.login(masterPassword).call({
            from: web3.eth.defaultAccount
        });

        if (result) {
            document.getElementById("result").innerHTML = "Login Successful!";
            // Redirect to the next HTML page (replace 'next_page.html' with your actual HTML file)
            window.location.href = "dashboard";
        } else {
            document.getElementById("result").innerHTML = "Login Failed!";
        }
        
        console.log(result);
    } catch (error) {
        console.error("Error during login:", error);
    }

}

async function addCredentials() {
    try {
        await init();
        const website = document.getElementById("websiteInput").value;
        const username = document.getElementById("usernameInput").value;
        const password = document.getElementById("passwordInput").value;

        await contractInstance.methods.addCredentials(website, username, password).send({
            from: web3.eth.defaultAccount
        });

        document.getElementById("result").innerHTML = "Credentials Submitted Successfully!";
        document.getElementById("getVaultButton").style.display = "block";
    } catch (error) {
        console.error("Error submitting credentials:", error);
    }
}

function redirectToVaultPage() {
    // Redirect to the vault_page.html
    window.location.href = "vault";
}


export {init, setEncryptionKey, getEncryptionKey, login,addCredentials,redirectToVaultPage};
