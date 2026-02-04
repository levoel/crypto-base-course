# Crypto Fundamentals

Комплексный курс по криптографии и blockchain-технологиям для разработчиков.

## О курсе

Курс охватывает:
- **Криптографические основы** — математика, хеш-функции, шифрование, цифровые подписи
- **Bitcoin** — UTXO, Script, mining, Lightning Network
- **Ethereum** — EVM, Solidity, ERC стандарты, Account Abstraction
- **Solana** — Proof of History, Anchor framework
- **DeFi** — AMM, lending, оракулы, stablecoins
- **Безопасность** — уязвимости, MEV, аудит контрактов
- **Scalability** — L2, rollups, bridges
- **Zero-Knowledge** — SNARKs, STARKs, Circom

## Требования

- Базовые знания программирования
- Docker Desktop
- Node.js 20+
- Python 3.11+
- Rust (для Solana)

## Запуск лабораторий

```bash
# Криптография (Python + Jupyter)
cd labs/crypto
docker compose up -d

# Bitcoin
cd labs/bitcoin
docker compose up -d

# Ethereum
cd labs/ethereum
docker compose up -d

# Solana
cd labs/solana
docker compose up -d
```

## Структура курса

```
crypto-fundamentals-course/
├── config.json              # Метаданные курса
├── src/
│   ├── content/course/      # MDX контент
│   │   ├── 01-crypto-foundations/
│   │   ├── 02-bitcoin/
│   │   ├── 03-ethereum/
│   │   ├── 04-solana/
│   │   ├── 05-defi/
│   │   ├── 06-security/
│   │   ├── 07-governance/
│   │   ├── 08-scalability/
│   │   └── 09-zero-knowledge/
│   └── components/diagrams/ # React диаграммы
└── labs/                    # Docker лаборатории
    ├── crypto/
    ├── bitcoin/
    ├── ethereum/
    └── solana/
```

## Лицензия

MIT
