require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
    const Contract = await ethers.getContractFactory("Datatipos");

    
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});