# Tipos de variables

Punto de partida escencial del bootcamp

El primer paso es descargar las dependencias con el siguiente comando:

```shell
npm install
```

## Red local

### para correr los archivos en la red local debes tener instalado: 

* NodeJs >= v20.10.0
* hardhat >= ^2.19.4

Ejecuta el siguiente comando para iniciar la red local:

```shell
npx hardhat node
```

## Red Testnet

para correr los archivos en testnet debes introducir los datos correspondientes en el archivo .env

## Ejecución

Habiendo realizado alguno de los pasos anteriores debes compilar los archivos con el siguiente comando:

```shell
npx hardhat compile
```

Para desplegar los archivos debes especificar la red:

#### Para localhost

```shell
npx hardhat run scripts/deploy.js --network localhost
```

#### Para Testnet

```shell
npx hardhat run scripts/deploy.js --network sepholia
```
