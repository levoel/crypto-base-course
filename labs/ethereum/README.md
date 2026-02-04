# Ethereum Lab

Локальная среда разработки с Anvil (Foundry) и Hardhat.

## Запуск

```bash
# Только Anvil (рекомендуется)
docker compose up -d anvil

# С Hardhat
docker compose --profile hardhat up -d

# С Block Explorer
docker compose --profile explorer up -d
```

## Подключение

### Anvil (Foundry)
- RPC URL: `http://localhost:8545`
- Chain ID: `31337`
- 10 тестовых аккаунтов с 10000 ETH каждый

### Тестовые аккаунты Anvil

```
Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
```

## Hardhat Setup

```bash
cd hardhat
npm install
npx hardhat compile
npx hardhat test
```

## Foundry Setup

```bash
# Установить Foundry
curl -L https://foundry.paradigm.xyz | bash
foundryup

# Создать проект
forge init my-project
cd my-project
forge build
forge test
```

## Полезные команды

```bash
# Cast (Foundry CLI)
cast block-number --rpc-url http://localhost:8545
cast balance 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 --rpc-url http://localhost:8545
cast send --private-key 0xac0974bec... <to> --value 1ether --rpc-url http://localhost:8545

# Деплой контракта
forge create src/MyContract.sol:MyContract --rpc-url http://localhost:8545 --private-key 0xac0974bec...
```
