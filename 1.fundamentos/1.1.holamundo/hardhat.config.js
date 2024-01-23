require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.SEPOLIA_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    },
    localhost: {
      url: "http://localhost:8545"
    },
    hardhat: {
      chainId: 1337
    }
  },
  sourcify: {
    enabled: true
  }
};
