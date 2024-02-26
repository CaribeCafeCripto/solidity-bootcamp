const { expect } = require("chai");

describe("Contrato Datatipos", function() {
    it("Test de deploy", async function() {
        // Deploy del contrato en red de prueba
        const contract = await ethers.deployContract("Datatipos");
 
        // Test de datos
        expect(await contract.print()).to.deep.equal([
          23,
          -13,
          true,
          "0x0000000000000000000000000000000000000000",
          "Caribe Cafe Cripto",
          "criptorockstar",
          33,
          ["Solidity", "React", "JavaScript"]
        ]);
    });
});
