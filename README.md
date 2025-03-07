# **Decentralized Lottery Smart Contract with React Integration**

## **📌 Project Overview**

This project implements a **decentralized lottery system** using **Solidity** smart contracts with a **React front-end** for interacting with the blockchain. Participants enter the lottery by sending ETH, and a **winner is selected randomly**. The smart contract ensures fairness and transparency, making it a secure way to conduct lotteries on the **Ethereum blockchain**.

### **🚀 Key Features**

✅ **Smart contract for a decentralized lottery**\
✅ **Secure random winner selection**\
✅ **Blockchain-based transaction verification**\
✅ **Integration with Web3.js and Ethers.js**\
✅ **Testing using Mocha and Chai**\
✅ **Deployment via Truffle and Ganache**\
✅ **React Front-End for User Interaction**

---

## **📌 Project Folder Structure**

```
solidity-lottery-dapp/
│── contracts/
│   ├── Lottery.sol       # Solidity Smart Contract
│
│── test/
│   ├── Lottery.test.js   # Test cases for the Lottery contract
│
│── migrations/
│   ├── 1_initial_migration.js  # Migration file for deployment
│
│── build/   # Truffle build artifacts (not included in Git)
│
│── react/  # React Front-End
│   ├── src/
│   │   ├── App.js          # Main React Component
│   │   ├── App.css         # CSS Styles
│   │   ├── index.js        # React App Entry Point
│   │   ├── index.css       # Global Styles
│   │   ├── web3.js         # Web3 Configuration
│   │   ├── lottery.js      # Smart Contract Interaction
│   │   ├── reportWebVitals.js  # Performance Reports
│   │   ├── setupTests.js   # Jest Test Setup
│   ├── package.json       # React Dependencies
│   ├── public/
│   │   ├── index.html      # HTML Template
│   ├── README.md          # React Project ReadMe
│
│── .gitignore
│── package.json
│── truffle-config.js
│── README.md
```

---

## **📌 Updating App.js to Access Lottery Contract**
Ensure `App.js` correctly imports Web3 and the lottery contract:

```javascript
import React, { useEffect, useState } from "react";
import web3 from "./web3";
import lottery from "./lottery";

const App = () => {
    const [manager, setManager] = useState("");
    const [players, setPlayers] = useState([]);
    const [balance, setBalance] = useState("");

    useEffect(() => {
        const fetchContractData = async () => {
            const manager = await lottery.methods.manager().call();
            const players = await lottery.methods.getPlayers().call();
            const balance = await web3.eth.getBalance(lottery.options.address);
            setManager(manager);
            setPlayers(players);
            setBalance(balance);
        };
        fetchContractData();
    }, []);

    return (
        <div>
            <h2>Lottery Contract</h2>
            <p>Manager: {manager}</p>
            <p>Players: {players.length}</p>
            <p>Balance: {web3.utils.fromWei(balance, "ether")} ETH</p>
        </div>
    );
};

export default App;
```

---

## **📌 Setting Up the Project**

### **1️⃣ Install Required Packages**

```bash
npm install
cd react && npm install
```

### **2️⃣ Compile the Smart Contract**

```bash
npx truffle compile
```

### **3️⃣ Deploy the Contract to Local Blockchain**

```bash
npx truffle migrate --network development
```

### **4️⃣ Start Ganache for Local Testing**

```bash
ganache-cli
```

### **5️⃣ Start React Front-End**

```bash
cd react
npm start
```

---

## **📌 Conclusion**

This project demonstrates a **fully decentralized lottery system** using Solidity smart contracts and a React front-end. By leveraging **blockchain technology**, it ensures **fairness, security, and transparency** in lottery operations while providing an interactive UI for users.

---

## **📌 License**

This project is licensed under the **MIT License**.

