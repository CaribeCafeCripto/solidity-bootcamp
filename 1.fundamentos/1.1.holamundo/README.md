# Hola Mundo

El proyecto inicial de toda nueva tecnología: abordamos la estructura de carpetas, creamos funciones para manejar múltiples redes al mismo tiempo, hechamos un vistazo rápido a la sintaxis de *Solidity* y aprendemos a manejar *hardhat*.  

## Variables de entorno

Renombramos el archivo `.env.example` a `.env`

Llenamos los datos: `ETHERSCAN_KEY`, `ALCHEMY_KEY` y `SEPOLIA_KEY` dejando las otras variables vacías ya que estas serán actualizadas automaticamente al realizar deploys.

## Instalación

> :information_source: Recomendamos `pnpm` en lugar de `npm`

```shell
pnpm install
```

Una vez instaladas las dependencias del proyecto procedemos a correr la red `localhost`

```shell
npx hardhat node
```

## Testing

Corremos los test junto con un analisis de consumo de GAS
```shell
pnpm test
```

## Deploy

Primero se debe compilar el programa

```shell
npx hardhat compile
```

El deploy puede ser tanto en `localhost` como en la red **testnet**, en este caso usamos `sepolia`

Realizar el deploy en localhost
```shell
npx hardhat run scripts/deploy.js --network localhost
```

Realizar el deploy en sepolia
```shell
npx hardhat run scripts/deploy.js --network sepolia
```

> *Siempre se debe especificar la red con el parametro: `--network` seguido del nombre de la red a utulizar.*

## Interactuar con el contrato

Llamamos a las funciones de los archivos contenidos dentro de la carpeta `interact`

> *El desploy tarda unos segundos*

Para mostrar el contenido de nuestro contrato desplegado:

En localhost
```shell
npx hardhat run interact/display.js --network localhost
```

En Sepolia
```shell
npx hardhat run interact/display.js --network sepolia
```

## actualizar el contrato

En localhost
```shell
npx hardhat run interact/update.js --network localhost
```

En Sepolia
```shell
npx hardhat run interact/update.js --network sepolia
```

Por ultimo para mostrar los datos actualizados se debe <a href="#interactuar-con-el-contrato">Interactuar con el contrato</a> repitiendo el paso anterior.

