// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Funciones {
    /*@Modificadores de visibilidad
    private: similar a internal pero estas no pueden ser accedidas
    por contratos heredados.
    */

   /*@Modificadores de comportamiento
    pure: Se ejecuta sin escribir datos en la blockhain por lo tanto
    no incurre en costos de GAS.

    view: No modifica el estado del contrato, pero puede leer los datos del estado
    es util para consultar informacion del contrato y no incurre en costos de GAS.

    payable: Permite que la funcion reciba fondos y realizar cambios en el estado del contrato.

    virtual: Indica que la funcion puede ser sobreescrita en una clase derivada,
    es útil cuando se quiere permitir que las subclases cambien el comportamiento de la función.

    override: Indica que la función está sobrescribiendo una función virtual en una clase base,
    es útil para la herencia y la implementación de interfaces.

    abstract: Indica que la función no tiene una implementación y debe ser sobrescrita por las subclases.
    se utiliza en interfaces y en clases abstractas.
    */

    uint public numero;

   // Modificadores de visibilidad

   /*public: pueden ser llamadas desde dentro y fuera
    del contrato sin ningun tipo de restriccion.*/
    function setPublico(uint _numero) public {
        numero = _numero;
    }

    /*external: solo pueden ser llamadas desde fuera del contrato,
    son utiles para interfaces con otros contratos.*/

    function setExternal(uint _numero) external {
        numero = _numero;
    }

    function sumarPublico(uint _sumar) public {
        /* Funcionara porque estamos usando 'this.'
        para hacer la llamada a una funcion externa*/
        this.setExternal(numero + _sumar);
    }

    function multiplicar() public {
        /* No funcinara porque estamos intentando hacer una llamada interna
        a una funcion externa*/

        /* Descomentar la siguiente linea causara un error de compilacion*/
        //setExternal(numero * 2);
    }

    /*internal: solo pueden ser llamadas desde dentro del mismo contrato
    o por contratos heredados.*/
}
