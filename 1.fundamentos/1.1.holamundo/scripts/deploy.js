const { ethers } = require("hardhat");
const { updateAddress } = require("../scripts/networks.js");

async function main() {
  // Obtenemos e imprimimos la dirección del creador del contrato
  const [deployer] = await ethers.getSigners();

  console.log("Deploy desde la cuenta: ", deployer.address);

  // Desplegamos e imprimimos la dirección del contato
  const contract = await ethers.deployContract("Holamundo");

  console.log("Direccion del contrato: ", await contract.getAddress());

  // Actualizamos las variables de entorno
  updateAddress(await contract.getAddress(), network.name);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});

