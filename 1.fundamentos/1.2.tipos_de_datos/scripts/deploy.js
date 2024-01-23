const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("deploy desde la cuenta: ", deployer.address);

    const contract = await ethers.deployContract("Datatipos");
    console.log("Direccion del contrato: ", await contract.getAddess());
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});