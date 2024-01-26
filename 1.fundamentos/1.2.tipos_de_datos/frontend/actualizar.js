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
    // Llamadas a los Setters
    await contract.setEntero(100);
    await contract.setEnteroConSigno(-20);
    await contract.setBooleano(false);
    await contract.setDireccion(process.env.ACCOUNT_ADDRESS);
    await contract.setCadena("Nuevo Mensaje");
    await contract.setPersona("tandres", 23);
    await contract.setEstadoActual(2);
    await contract.setArregloDinamico([4, 5, 6]);
    await contract.setBalance(process.env.ACCOUNT_ADDRESS, 100);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});