// SPDX-License-Identifier: MIT 
pragma solidity >=0.8.19;

contract HolaMundo {

    // Definimos atributo
    string mensaje;

    function print() public view returns (string memory) {
        return mensaje;
    }

    // Actualizamos mensaje
    function actualizar(string memory _mensaje) public {
        mensaje = _mensaje;
    }
}