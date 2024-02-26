// SPDX-License-Identifier: MIT 
pragma solidity >=0.8.19;

contract Holamundo {
    // Definimos atributos privados
    string _mensaje = "Hola Mundo";
    
    // Imprimimos mensaje
    function print() public view returns (string memory) {
        return _mensaje;
    }

    // Actualizamos mensaje
    function update(string memory mensaje) public {
        _mensaje = mensaje;
    }
}
