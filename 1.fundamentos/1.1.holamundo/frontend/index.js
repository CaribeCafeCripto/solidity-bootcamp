require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
    const Contract = await ethers.getContractFactory("HolaMundo");

    const contractAddress = process.env.CONTRACT_ADDRESS;
    const contract = await Contract.attach(contractAddress);

    const message = await contract.print();
    console.log("El contenido del contrato HolaMundo es: ", message);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});