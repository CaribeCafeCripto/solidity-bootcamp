const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploy desde la cuenta: ", deployer.address);

  const contract = await ethers.deployContract("HolaMundo");
  console.log("Direccion del contrato: ", await contract.getAddress());
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
})