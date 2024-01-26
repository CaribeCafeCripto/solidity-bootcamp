require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
    // Creamos una instancia del contrato HolaMundo
    const Contract = await ethers.getContractFactory("HolaMundo");

    /* Obtenemos la dirección del contrato 
        previamente desplegado desde las variables de entorno*/
    const contractAddress = process.env.CONTRACT_ADDRESS;

    /* Conectamos nuestra instancia a la dirección del contrato 
       para poder interactuar con él */
    const contract = await Contract.attach(contractAddress);

    // Ejecutamos las funciones del contrato
    const message = await contract.print();
    console.log("El contenido del contrato HolaMundo es: ", message);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});