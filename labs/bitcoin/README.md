# Bitcoin Lab

Bitcoin Core в режиме regtest для локальной разработки.

## Запуск

```bash
docker compose up -d
```

## Подключение

```bash
# Bitcoin CLI
docker exec -it bitcoin-regtest bitcoin-cli -regtest -rpcuser=crypto -rpcpassword=crypto123 getblockchaininfo

# Создать кошелёк
docker exec -it bitcoin-regtest bitcoin-cli -regtest -rpcuser=crypto -rpcpassword=crypto123 createwallet "test"

# Сгенерировать блоки (для получения BTC)
docker exec -it bitcoin-regtest bitcoin-cli -regtest -rpcuser=crypto -rpcpassword=crypto123 -generate 101

# Получить баланс
docker exec -it bitcoin-regtest bitcoin-cli -regtest -rpcuser=crypto -rpcpassword=crypto123 getbalance
```

## RPC Credentials

- URL: `http://localhost:18443`
- User: `crypto`
- Password: `crypto123`
- Network: `regtest`

## Полезные команды

```bash
# Информация о блокчейне
getblockchaininfo

# Создать адрес
getnewaddress

# Отправить транзакцию
sendtoaddress <address> <amount>

# Получить транзакцию
getrawtransaction <txid> true

# Декодировать скрипт
decodescript <hex>
```
