// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.19;

contract Datatipos {
    // Enteros
    uint256 public entero = 42; // Entero sin signo
    int256 public enteroConSigno = -10; // Entero con signo

    // Booleanos
    bool public booleano = true;

    // Dirección
    address public direccion = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;

    // Cadena de texto
    string public cadena = "Hola, mundo!";

    // Struct
    struct Persona {
        string nombre;
        uint256 edad;
    }
    Persona public persona = Persona("CriptoRockstar", 33);

    // Enum
    enum Estado { Inactivo, Activo, Pendiente }
    Estado public estadoActual = Estado.Activo;

    // Array
    uint256[] public arregloDinamico = [1, 2, 3];

    // Mappings
    mapping(address => uint256) public balances;

    /* Getters */
    function getEntero() public view returns (uint256) {
        return entero;
    }

    function getEnteroConSigno() public view returns (int256) {
        return enteroConSigno;
    }

    function getBooleano() public view returns (bool) {
        return booleano;
    }

    function getDireccion() public view returns (address) {
        return direccion;
    }

    function getCadena() public view returns (string memory) {
        return cadena;
    }

    function getPersona() public view returns (string memory, uint256) {
        return (persona.nombre, persona.edad);
    }

    function getEstadoActual() public view returns (Estado) {
        return estadoActual;
    }

    function getArregloDinamico() public view returns (uint256[] memory) {
        return arregloDinamico;
    }

    function getBalance(address account) public view returns (uint256) {
        return balances[account];
    }

    /* Setters */
    function setEntero(uint256 _nuevoEntero) public {
        entero = _nuevoEntero;
    }

    function setEnteroConSigno(int256 _nuevoEnteroConSigno) public {
        enteroConSigno = _nuevoEnteroConSigno;
    }

    function setBooleano(bool _nuevoBooleano) public {
        booleano = _nuevoBooleano;
    }

    function setDireccion(address _nuevaDireccion) public {
        direccion = _nuevaDireccion;
    }

    function setCadena(string memory _nuevaCadena) public {
        cadena = _nuevaCadena;
    }

    function setPersona(string memory _nuevoNombre, uint256 _nuevaEdad) public {
        persona = Persona(_nuevoNombre, _nuevaEdad);
    }

    function setEstadoActual(Estado _nuevoEstado) public {
        estadoActual = _nuevoEstado;
    }

    function setArregloDinamico(uint256[] memory _nuevoArreglo) public {
        arregloDinamico = _nuevoArreglo;
    }

    function setBalance(address account, uint256 _nuevoBalance) public {
        balances[account] = _nuevoBalance;
    }
}