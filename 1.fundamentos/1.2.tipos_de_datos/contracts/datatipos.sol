// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Datatipos {
  // Enteros -> sin negativos
  uint256 _entero = 23;
  
  // Enteros con signo -> con negativos
  int256 _enteroSigno = -13;

  // Booleanos -> verdadero o falso [true, false]
  bool _booleano = true;

  // Address -> direcciones blockchain: wallets, contratos
  address _wallet;

  // String -> cadenas de texto
  string _texto = "Caribe Cafe Cripto";

  // Struct -> estructura de datos
  struct Perfil {
    string nombre;
    uint256 edad;
  }
  Perfil _perfil = Perfil(
    "criptorockstar", 
    33
  );

  // Enum
  enum Estado { Conectado, Desconectado }
  Estado _estado = Estado.Conectado;

  // Array
  string[] _arreglo = ["Solidity","React","JavaScript"];

  // Getters
  function print() public view returns(
    uint256, // _entero
    int256, // _enteroSigno
    bool, // _booleano 
    address, // _wallet
    string memory, // _texto
    string memory, // _perfil.nombre
    uint256, // _perfil.edad 
    string[] memory // _arreglo
  ) {
    return (
      _entero,
      _enteroSigno,
      _booleano,
      _wallet,
      _texto,
      _perfil.nombre,
      _perfil.edad,
      _arreglo
    );
  }
}
