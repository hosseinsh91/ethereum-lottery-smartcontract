const { ethers } = require('ethers');

try {
  const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID');
  console.log("Provider created successfully:", provider);
} catch (error) {
  console.error("Error creating provider:", error);
}
