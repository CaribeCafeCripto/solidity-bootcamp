const { ethers } = require("hardhat");
const { getContractAddress } = require("../scripts/networks.js");

async function main() {
    const Contract = await ethers.getContractFactory("Holamundo");

    /* Obtenemos la dirección del contrato 
        previamente desplegado desde las variables de entorno */    
    const contractAddress = getContractAddress(network.name);
    
    /* Conectamos nuestra instancia a la dirección del contrato 
       para poder interactuar con él */
    const contract = await Contract.attach(contractAddress);

    // Ejecutamos las funciones del contrato
    await contract.update("Adios Mundo");
    
    console.log("El mensaje fue actualizado!");
}   

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});
