const { ethers } = require("hardhat");
const { updateAddress } = require("../scripts/networks.js");

async function main() {
  // Obtenemos e imprimimos la dirección del creador del contrato
  const [deployer] = await ethers.getSigners();

  console.log("Deploy desde la cuenta: ", deployer.address);

  // Desplegamos e imprimimos la dirección del contato
  const contract = await ethers.deployContract("Funciones");

  // Obtenenos la direccion del contrato
  const contractAddress = await contract.getAddress();

  console.log("Direccion del contrato: ", contractAddress);

  // Actualizamos las variables de entorno
  updateAddress(contractAddress, network.name);

  console.log(`\nEtherscan: https://sepolia.etherscan.io/address/${contractAddress}`);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});

