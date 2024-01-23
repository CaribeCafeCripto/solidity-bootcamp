require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
    const Contract = await ethers.getContractFactory("HolaMundo");

    const contractAddress = process.env.CONTRACT_ADDRESS;
    const contract = await Contract.attach(contractAddress);

    await contract.actualizar("Adios Mundo");
    console.log("El mensaje fue actualizado!");
}   

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});