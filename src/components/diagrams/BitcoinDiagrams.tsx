/**
 * Bitcoin Diagrams - UTXO model, block structure, mining
 */

import { FlowNode } from '@primitives/FlowNode';
import { Arrow } from '@primitives/Arrow';
import { DiagramContainer } from '@primitives/DiagramContainer';
import { DiagramTooltip as Tooltip } from '@primitives/Tooltip';

export function UTXODiagram() {
  return (
    <DiagramContainer title="UTXO Transaction Model">
      <div className="flex flex-col gap-8">
        {/* Input side */}
        <div className="flex items-center gap-4">
          <div className="text-gray-400 text-sm w-20">Inputs</div>
          <div className="flex flex-col gap-2">
            <Tooltip content={
              <div>
                <strong className="text-blue-300">UTXO (Unspent Transaction Output)</strong>
                <p className="mt-2">Неизрасходованный выход предыдущей транзакции. Каждый UTXO может быть потрачен только один раз целиком.</p>
                <p className="mt-1 text-gray-400 text-xs">Аналогия: купюра в кошельке — нельзя потратить "половину купюры"</p>
              </div>
            }>
              <FlowNode type="input" className="cursor-help">
                <div className="text-center">
                  <div className="text-blue-300 font-mono text-xs">UTXO #1</div>
                  <div className="text-white font-bold">0.5 BTC</div>
                </div>
              </FlowNode>
            </Tooltip>
            <Tooltip content={
              <div>
                <strong className="text-blue-300">Второй Input</strong>
                <p className="mt-2">Транзакция может иметь несколько inputs — это объединение нескольких UTXO для формирования нужной суммы.</p>
              </div>
            }>
              <FlowNode type="input" className="cursor-help">
                <div className="text-center">
                  <div className="text-blue-300 font-mono text-xs">UTXO #2</div>
                  <div className="text-white font-bold">0.3 BTC</div>
                </div>
              </FlowNode>
            </Tooltip>
          </div>

          <Arrow direction="right" className="mx-4" />

          {/* Transaction */}
          <Tooltip content={
            <div>
              <strong className="text-amber-300">Transaction</strong>
              <p className="mt-2">Транзакция потребляет inputs (уничтожает UTXO) и создаёт outputs (новые UTXO).</p>
              <p className="mt-1 text-gray-400 text-xs">Sum(inputs) = Sum(outputs) + fee</p>
            </div>
          }>
            <FlowNode type="process" className="cursor-help">
              <div className="text-center">
                <div className="text-amber-300 font-bold">TX</div>
                <div className="text-xs text-gray-400">Transfer</div>
              </div>
            </FlowNode>
          </Tooltip>

          <Arrow direction="right" className="mx-4" />

          {/* Output side */}
          <div className="flex flex-col gap-2">
            <Tooltip content={
              <div>
                <strong className="text-green-300">Payment Output</strong>
                <p className="mt-2">Новый UTXO для получателя. Locked скриптом, который требует подпись получателя для траты.</p>
              </div>
            }>
              <FlowNode type="output" className="cursor-help">
                <div className="text-center">
                  <div className="text-green-300 font-mono text-xs">To: Recipient</div>
                  <div className="text-white font-bold">0.7 BTC</div>
                </div>
              </FlowNode>
            </Tooltip>
            <Tooltip content={
              <div>
                <strong className="text-purple-300">Change Output</strong>
                <p className="mt-2">Сдача — новый UTXO, возвращаемый отправителю. 0.8 - 0.7 - 0.001 (fee) = 0.099 BTC</p>
              </div>
            }>
              <FlowNode type="output" className="cursor-help">
                <div className="text-center">
                  <div className="text-purple-300 font-mono text-xs">Change</div>
                  <div className="text-white font-bold">0.099 BTC</div>
                </div>
              </FlowNode>
            </Tooltip>
          </div>
          <div className="text-gray-400 text-sm w-20 text-right">Outputs</div>
        </div>

        {/* Fee indicator */}
        <div className="flex justify-center">
          <Tooltip content={
            <div>
              <strong className="text-rose-300">Transaction Fee</strong>
              <p className="mt-2">Fee = Sum(inputs) - Sum(outputs)</p>
              <p className="mt-1">Майнер получает fee за включение транзакции в блок.</p>
            </div>
          }>
            <div className="bg-rose-500/20 border border-rose-500/50 rounded-lg px-4 py-2 cursor-help">
              <div className="text-rose-300 text-sm">Fee: 0.001 BTC</div>
            </div>
          </Tooltip>
        </div>
      </div>
    </DiagramContainer>
  );
}

export function BlockStructureDiagram() {
  return (
    <DiagramContainer title="Bitcoin Block Structure">
      <div className="flex flex-col gap-4">
        {/* Block Header */}
        <Tooltip content={
          <div>
            <strong className="text-blue-300">Block Header (80 bytes)</strong>
            <p className="mt-2">Фиксированный размер заголовка. Содержит всю метаинформацию блока.</p>
            <ul className="mt-2 text-xs space-y-1">
              <li>• Version: версия протокола</li>
              <li>• Previous Hash: связь с предыдущим блоком</li>
              <li>• Merkle Root: корень дерева транзакций</li>
              <li>• Timestamp: время создания</li>
              <li>• Bits: текущая сложность</li>
              <li>• Nonce: для Proof of Work</li>
            </ul>
          </div>
        }>
          <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4 cursor-help">
            <div className="text-blue-300 font-bold mb-2">Block Header</div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-blue-900/50 rounded p-2">Version</div>
              <div className="bg-blue-900/50 rounded p-2 col-span-2">Prev Block Hash</div>
              <div className="bg-blue-900/50 rounded p-2 col-span-3">Merkle Root</div>
              <div className="bg-blue-900/50 rounded p-2">Timestamp</div>
              <div className="bg-blue-900/50 rounded p-2">Bits</div>
              <div className="bg-blue-900/50 rounded p-2">Nonce</div>
            </div>
          </div>
        </Tooltip>

        <Arrow direction="down" className="self-center" />

        {/* Merkle Tree */}
        <Tooltip content={
          <div>
            <strong className="text-green-300">Merkle Tree</strong>
            <p className="mt-2">Бинарное дерево хешей транзакций. Позволяет проверить включение транзакции без загрузки всего блока.</p>
            <p className="mt-1 text-gray-400 text-xs">Merkle Proof: O(log n) вместо O(n)</p>
          </div>
        }>
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 cursor-help">
            <div className="text-green-300 font-bold mb-2 text-center">Merkle Tree</div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-green-900/50 rounded px-4 py-1 text-xs">Root Hash</div>
              <div className="flex gap-4">
                <div className="bg-green-900/50 rounded px-3 py-1 text-xs">H12</div>
                <div className="bg-green-900/50 rounded px-3 py-1 text-xs">H34</div>
              </div>
              <div className="flex gap-2">
                <div className="bg-green-900/50 rounded px-2 py-1 text-xs">Tx1</div>
                <div className="bg-green-900/50 rounded px-2 py-1 text-xs">Tx2</div>
                <div className="bg-green-900/50 rounded px-2 py-1 text-xs">Tx3</div>
                <div className="bg-green-900/50 rounded px-2 py-1 text-xs">Tx4</div>
              </div>
            </div>
          </div>
        </Tooltip>
      </div>
    </DiagramContainer>
  );
}

export function MiningDiagram() {
  return (
    <DiagramContainer title="Proof of Work Mining">
      <div className="flex items-center gap-6">
        {/* Mempool */}
        <Tooltip content={
          <div>
            <strong className="text-purple-300">Mempool</strong>
            <p className="mt-2">Пул неподтверждённых транзакций. Майнеры выбирают транзакции с высоким fee/byte.</p>
          </div>
        }>
          <FlowNode type="database" className="cursor-help">
            <div className="text-center">
              <div className="text-purple-300 font-bold">Mempool</div>
              <div className="text-xs text-gray-400">Pending TXs</div>
            </div>
          </FlowNode>
        </Tooltip>

        <Arrow direction="right" />

        {/* Mining Process */}
        <Tooltip content={
          <div>
            <strong className="text-amber-300">Mining (PoW)</strong>
            <p className="mt-2">Майнер перебирает nonce пока:</p>
            <code className="block mt-1 bg-black/50 p-2 rounded text-xs">
              SHA256(SHA256(header)) &lt; target
            </code>
            <p className="mt-2 text-gray-400 text-xs">~10 минут на блок при текущей сложности</p>
          </div>
        }>
          <div className="bg-amber-500/20 border border-amber-500/50 rounded-lg p-4 cursor-help">
            <div className="text-amber-300 font-bold text-center">Mining</div>
            <div className="text-xs text-gray-400 mt-2 text-center">
              <div>nonce++</div>
              <div className="font-mono mt-1">hash &lt; target?</div>
            </div>
          </div>
        </Tooltip>

        <Arrow direction="right" />

        {/* New Block */}
        <Tooltip content={
          <div>
            <strong className="text-green-300">Valid Block</strong>
            <p className="mt-2">Когда найден валидный nonce, блок broadcast'ится в сеть.</p>
            <p className="mt-1">Награда: block subsidy + transaction fees</p>
          </div>
        }>
          <FlowNode type="output" className="cursor-help">
            <div className="text-center">
              <div className="text-green-300 font-bold">Block</div>
              <div className="text-xs text-gray-400">Reward:</div>
              <div className="text-xs text-green-400">3.125 BTC</div>
            </div>
          </FlowNode>
        </Tooltip>
      </div>
    </DiagramContainer>
  );
}
