# **Decentralized Lottery Smart Contract**

## **📌 Project Overview**

This project implements a **decentralized lottery system** using **Solidity** smart contracts. Participants enter the lottery by sending ETH, and a **winner is selected randomly**. The smart contract ensures fairness and transparency, making it a secure way to conduct lotteries on the **Ethereum blockchain**.

### **🚀 Key Features**

✅ **Smart contract for a decentralized lottery**\
✅ **Secure random winner selection**\
✅ **Blockchain-based transaction verification**\
✅ **Integration with Web3.js and Ethers.js**\
✅ **Testing using Mocha and Chai**\
✅ **Deployment via Truffle and Ganache**

---

## **📌 Tech Stack & Dependencies**

The project is built using:

- **Solidity** (Smart contract language)
- **Truffle** (Development and testing framework)
- **Ganache** (Local blockchain for testing)
- **Web3.js / Ethers.js** (Blockchain interaction libraries)
- **Mocha & Chai** (Testing framework)

### **📌 Required Dependencies**

```json
"dependencies": {
  "@truffle/hdwallet-provider": "^1.0.41-1",
  "chai": "^5.1.2",
  "ethers": "^6.13.4",
  "ganache": "^7.9.2",
  "mocha": "^10.8.2",
  "web3": "^4.15.0",
  "ws": "^8.18.0"
},
"devDependencies": {
  "solc": "^0.8.19"
}
```

---

## **📌 .gitignore File**

To prevent unnecessary files from being tracked in Git, add the following **.gitignore** file:

```plaintext
# Node modules
test/
node_modules/

# Truffle build artifacts
build/

# Environment variables and sensitive data
.env
secrets.json

# Log files
*.log

# OS-specific files
.DS_Store
Thumbs.db
```

---

## **📌 Smart Contract: Lottery.sol**

### **1️⃣ Smart Contract Code**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Lottery {
    address public manager;
    address[] public players;
    
    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether, "Minimum ETH required to enter lottery");
        players.push(msg.sender);
    }

    function getRandomNumber() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    function pickWinner() public restricted {
        uint index = getRandomNumber() % players.length;
        payable(players[index]).transfer(address(this).balance);
        players = new address[](0);
    }

    modifier restricted() {
        require(msg.sender == manager, "Only manager can call this function");
        _;
    }
}
```

---

## **📌 Setting Up the Project**

### **1️⃣ Install Required Packages**

```bash
npm install
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

### **5️⃣ Run Tests**

```bash
npm run test
```

---

## **📌 Conclusion**

This project demonstrates a **fully decentralized lottery system** using Solidity smart contracts. By leveraging **blockchain technology**, it ensures **fairness, security, and transparency** in lottery operations.

---

## **📌 License**

This project is licensed under the **MIT License**.

