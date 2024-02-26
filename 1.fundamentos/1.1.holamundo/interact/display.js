const { ethers } = require( "hardhat");
const { getContractAddress } = require("../scripts/networks.js");

async function main() {
  // Creamos una instancia del contrato
  const Contract = await ethers.getContractFactory("Holamundo");

  /* Obtenemos la dirección del contrato 
        previamente desplegado desde las variables de entorno */
  const contractAddress = getContractAddress(network.name);

  /* Conectamos nuestra instancia a la dirección del contrato 
       para poder interactuar con él */
  const contract = Contract.attach(contractAddress);

  // Ejecutamos las funciones del contrato
  const message = await contract.print();
 
  // Imprimimos los mensajes
  console.log("El contenido del contrato es: ", message);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
