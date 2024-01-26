require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
    // Creamos una instancia del contrato
    const Contract = await ethers.getContractFactory("Datatipos");

    /* Obtenemos la dirección del contrato
        previamente desplegado desde las variables de entorno*/
    const contractAddress = process.env.CONTRACT_ADDRESS;

    /* Conectamos nuestra instancia a la dirección del contrato 
       para poder interactuar con él */
    const contract = await Contract.attach(contractAddress);

    /* Ejecutamos las funciones del contrato */
    // Llamadas a los Getters
    console.log("Entero:", await contract.getEntero());
    console.log("Entero con Signo:", await contract.getEnteroConSigno());
    console.log("Booleano:", await contract.getBooleano());
    console.log("Dirección:", await contract.getDireccion());
    console.log("Cadena:", await contract.getCadena());
    console.log("Persona:", await contract.getPersona());
    console.log("Estado Actual:", await contract.getEstadoActual());
    console.log("Arreglo Dinámico:", await contract.getArregloDinamico());
    console.log("Balance:", await contract.getBalance(process.env.ACCOUNT_ADDRESS));
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});