require("dotenv").config();
const fs = require("fs");

function getContractAddress(network) {
  let contract_address;

  switch (network) {
    case "sepolia":
      contract_address = process.env.SEPOLIA_CONTRACT_ADDRESS;
      break;
    case "localhost":
      contract_address = process.env.LOCALHOST_CONTRACT_ADDRESS;
      break;
    default:
      throw new Error("Se requiere incluir una red");
  }

  return contract_address;
}

async function updateAddress(contractAddress, network) {
  let direccion;

  switch (network) {
    case "sepolia":
      direccion = "SEPOLIA_CONTRACT_ADDRESS";
      break;
    case "localhost":
      direccion = "LOCALHOST_CONTRACT_ADDRESS";
      break;
    default:
      throw new Error("Se requiere incluir una red");
  }

  // Leer el contenido actual del archivo .env
  const env = fs.readFileSync(".env", "utf8");

  // Actualizar direccion de contrato
  const updatedAddress = env.replace(
    new RegExp(`${direccion}=.*`),
    `${direccion}="${contractAddress}"`
  );

  // Escribir el contenido actualizado en el archivo .env
  fs.writeFileSync(".env", updatedAddress);
  console.info(
    '\x1b[36m%s\x1b[0m',
    "\nVariables de entorno actualizadas!"
  );
}

module.exports = { getContractAddress, updateAddress };

