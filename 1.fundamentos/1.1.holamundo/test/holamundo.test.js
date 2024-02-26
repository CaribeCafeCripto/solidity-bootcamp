const { expect } = require("chai");

describe("Contrato Datatipos", function() {
    it("Test de deploy", async function() {
        // Deploy del contrato en red de prueba
        const contract = await ethers.deployContract("Holamundo");
 
        // Test de datos
        expect(await contract.print()).to.equal("Hola Mundo");
    });
});
