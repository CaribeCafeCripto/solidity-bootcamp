const { ethers } = require( "hardhat");
const { getContractAddress } = require("../scripts/networks.js");

async function main() {
  // Creamos una instancia del contrato
  const Contract = await ethers.getContractFactory("Datatipos");

  /* Obtenemos la dirección del contrato 
        previamente desplegado desde las variables de entorno */
  const contractAddress = getContractAddress(network.name);

  /* Conectamos nuestra instancia a la dirección del contrato 
       para poder interactuar con él */
  const contract = Contract.attach(contractAddress);

  // Ejecutamos las funciones del contrato
  const message = await contract.print();
 
  // Imprimimos los mensajes
  console.log('Número random:', message[0].toString());
  console.log('Popularidad:', message[1].toString());
  console.log('Blockchain?:', message[2]);
  console.log('Wallet:', message[3]);
  console.log('Comunidad:', message[4]);
  console.log('Nombre:', message[5]);
  console.log('Edad:', message[6].toString());
  console.log('Tecnologías:', message[7]);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
