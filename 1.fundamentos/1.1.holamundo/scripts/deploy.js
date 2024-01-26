const { ethers } = require("hardhat");

async function main() {
  // Obtenemos e imprimimos la dirección del creador del contrato
  const [deployer] = await ethers.getSigners();
  console.log("Deploy desde la cuenta: ", deployer.address);

  // Desplegamos e imprimimos la dirección del contato
  const contract = await ethers.deployContract("HolaMundo");
  console.log("Direccion del contrato: ", await contract.getAddress());
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
})