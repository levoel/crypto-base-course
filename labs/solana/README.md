# Solana Lab

Локальная среда разработки с Solana Test Validator и Anchor.

## Запуск

```bash
docker compose up -d
```

## Подключение

- RPC URL: `http://localhost:8899`
- WebSocket: `ws://localhost:8900`
- Faucet: `http://localhost:9900`

## Настройка локального окружения

```bash
# Установить Solana CLI (через Agave)
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"

# Настроить на локальный кластер
solana config set --url http://localhost:8899

# Создать кошелёк
solana-keygen new --outfile ~/.config/solana/id.json

# Получить SOL с faucet
solana airdrop 100
```

## Установка Anchor

```bash
# Установить Anchor Version Manager
cargo install --git https://github.com/coral-xyz/anchor avm --locked --force

# Установить Anchor
avm install 0.32.0
avm use 0.32.0

# Проверить
anchor --version
```

## Создание Anchor проекта

```bash
# Создать проект
anchor init my-program
cd my-program

# Сборка
anchor build

# Тесты
anchor test

# Деплой
anchor deploy
```

## Полезные команды

```bash
# Проверить статус кластера
solana cluster-version

# Баланс
solana balance

# Информация об аккаунте
solana account <address>

# Отправить SOL
solana transfer <recipient> <amount>

# Логи программы
solana logs <program-id>
```

## Anchor программа (пример)

```rust
use anchor_lang::prelude::*;

declare_id!("...");

#[program]
pub mod my_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
```
