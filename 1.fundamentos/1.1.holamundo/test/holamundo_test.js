const { expect } = require("chai");

describe("Contrato HolaMundo", function() {
    it("Test de deploy", async function() {
        // Deploy del contrato en red de prueba
        const contract = await ethers.deployContract("HolaMundo");

        // agregamos un mensaje y esperamos que
        // nos devuelva exactamente lo mismo
        await contract.actualizar("Hola Mundo");
        expect(await contract.print()).to.equal("Hola Mundo");
    });
});