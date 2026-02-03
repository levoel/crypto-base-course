/**
 * Layer 2 Diagrams - Rollup architecture, scaling comparison
 */

import { FlowNode } from '@primitives/FlowNode';
import { Arrow } from '@primitives/Arrow';
import { DiagramContainer } from '@primitives/DiagramContainer';
import { DiagramTooltip as Tooltip } from '@primitives/Tooltip';

export function RollupArchitectureDiagram() {
  return (
    <DiagramContainer title="Rollup Architecture">
      <div className="flex flex-col gap-6">
        {/* L2 Layer */}
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
          <div className="text-purple-300 font-bold mb-4 text-center">Layer 2</div>
          <div className="flex items-center gap-6 justify-center">
            <Tooltip content={
              <div>
                <strong className="text-blue-300">Users</strong>
                <p className="mt-2">Пользователи отправляют транзакции на L2. Быстрее и дешевле, чем на L1.</p>
              </div>
            }>
              <FlowNode type="input" className="cursor-help">
                <div className="text-center">
                  <div className="text-blue-300">Users</div>
                  <div className="text-xs text-gray-400">TXs</div>
                </div>
              </FlowNode>
            </Tooltip>

            <Arrow direction="right" />

            <Tooltip content={
              <div>
                <strong className="text-amber-300">Sequencer</strong>
                <p className="mt-2">Центральный оператор (пока):</p>
                <ul className="mt-1 text-xs space-y-1">
                  <li>• Принимает транзакции</li>
                  <li>• Упорядочивает (ordering)</li>
                  <li>• Выполняет off-chain</li>
                  <li>• Формирует batches</li>
                </ul>
                <p className="mt-2 text-gray-400 text-xs">⚠️ Централизован, но НЕ может украсть средства</p>
              </div>
            }>
              <div className="bg-amber-500/20 border border-amber-500/50 rounded-lg p-4 cursor-help">
                <div className="text-amber-300 font-bold">Sequencer</div>
                <div className="text-xs text-gray-400 mt-1">order + execute</div>
              </div>
            </Tooltip>

            <Arrow direction="right" />

            <Tooltip content={
              <div>
                <strong className="text-green-300">Batch</strong>
                <p className="mt-2">Сжатый пакет транзакций для публикации на L1.</p>
                <p className="mt-1 text-gray-400 text-xs">Содержит: tx data + state root</p>
              </div>
            }>
              <FlowNode type="process" className="cursor-help">
                <div className="text-center">
                  <div className="text-green-300">Batch</div>
                  <div className="text-xs text-gray-400">compressed</div>
                </div>
              </FlowNode>
            </Tooltip>
          </div>
        </div>

        <Arrow direction="down" className="self-center" />

        {/* L1 Layer */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <div className="text-blue-300 font-bold mb-4 text-center">Layer 1 (Ethereum)</div>
          <div className="flex items-center gap-6 justify-center">
            <Tooltip content={
              <div>
                <strong className="text-blue-300">Rollup Contract</strong>
                <p className="mt-2">Smart contract на L1:</p>
                <ul className="mt-1 text-xs space-y-1">
                  <li>• Принимает batches</li>
                  <li>• Хранит state roots</li>
                  <li>• Обрабатывает withdrawals</li>
                  <li>• Verifies proofs (ZK) или fraud proofs (Optimistic)</li>
                </ul>
              </div>
            }>
              <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4 cursor-help">
                <div className="text-blue-300 font-bold">Rollup Contract</div>
                <div className="text-xs text-gray-400 mt-1">verify + store</div>
              </div>
            </Tooltip>

            <Arrow direction="right" />

            <Tooltip content={
              <div>
                <strong className="text-purple-300">Data Availability</strong>
                <p className="mt-2">Transaction data публикуется на L1:</p>
                <ul className="mt-1 text-xs space-y-1">
                  <li>• Calldata (до EIP-4844)</li>
                  <li>• Blobs (после EIP-4844)</li>
                </ul>
                <p className="mt-2 text-gray-400 text-xs">Позволяет любому восстановить state</p>
              </div>
            }>
              <FlowNode type="database" className="cursor-help">
                <div className="text-center">
                  <div className="text-purple-300">DA</div>
                  <div className="text-xs text-gray-400">blobs</div>
                </div>
              </FlowNode>
            </Tooltip>
          </div>
        </div>
      </div>
    </DiagramContainer>
  );
}

export function OptimisticVsZKDiagram() {
  return (
    <DiagramContainer title="Optimistic vs ZK Rollups">
      <div className="grid grid-cols-2 gap-6">
        {/* Optimistic */}
        <Tooltip content={
          <div>
            <strong className="text-amber-300">Optimistic Rollup</strong>
            <p className="mt-2">Предполагает валидность, проверяет при challenge:</p>
            <ul className="mt-2 text-xs space-y-1">
              <li>✅ Проще реализовать</li>
              <li>✅ EVM-совместимость</li>
              <li>❌ 7-дневный withdrawal</li>
              <li>❌ Зависит от fraud proofs</li>
            </ul>
            <p className="mt-2 text-gray-400 text-xs">Примеры: Arbitrum, Optimism, Base</p>
          </div>
        }>
          <div className="bg-amber-500/20 border border-amber-500/50 rounded-lg p-4 cursor-help">
            <div className="text-amber-300 font-bold text-center mb-3">Optimistic</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Validity</span>
                <span className="text-white">Assumed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Proof</span>
                <span className="text-white">Fraud proof</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Finality</span>
                <span className="text-amber-400">7 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">EVM</span>
                <span className="text-green-400">Native</span>
              </div>
            </div>
          </div>
        </Tooltip>

        {/* ZK */}
        <Tooltip content={
          <div>
            <strong className="text-purple-300">ZK Rollup</strong>
            <p className="mt-2">Доказывает валидность криптографически:</p>
            <ul className="mt-2 text-xs space-y-1">
              <li>✅ Быстрый withdrawal</li>
              <li>✅ Математическая гарантия</li>
              <li>❌ Сложнее реализовать</li>
              <li>❌ Дорогой proof generation</li>
            </ul>
            <p className="mt-2 text-gray-400 text-xs">Примеры: zkSync, Polygon zkEVM, Scroll</p>
          </div>
        }>
          <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-4 cursor-help">
            <div className="text-purple-300 font-bold text-center mb-3">ZK Rollup</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Validity</span>
                <span className="text-white">Proven</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Proof</span>
                <span className="text-white">ZK-SNARK/STARK</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Finality</span>
                <span className="text-green-400">Minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">EVM</span>
                <span className="text-amber-400">zkEVM</span>
              </div>
            </div>
          </div>
        </Tooltip>
      </div>
    </DiagramContainer>
  );
}

export function BlockchainTrilemmaDiagram() {
  return (
    <DiagramContainer title="Blockchain Trilemma">
      <div className="flex justify-center">
        <Tooltip content={
          <div>
            <strong>Blockchain Trilemma</strong>
            <p className="mt-2">Невозможно одновременно максимизировать все три свойства:</p>
            <ul className="mt-2 text-xs space-y-2">
              <li><span className="text-blue-300">Decentralization:</span> много независимых валидаторов</li>
              <li><span className="text-green-300">Security:</span> устойчивость к атакам</li>
              <li><span className="text-amber-300">Scalability:</span> высокий throughput</li>
            </ul>
            <p className="mt-2 text-gray-400 text-xs">Layer 2 — способ обойти trilemma: inherit security от L1</p>
          </div>
        }>
          <svg viewBox="0 0 200 180" className="w-64 h-auto cursor-help">
            {/* Triangle */}
            <polygon
              points="100,10 10,170 190,170"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-600"
            />

            {/* Labels */}
            <text x="100" y="8" textAnchor="middle" className="text-xs fill-blue-300 font-bold">
              Decentralization
            </text>
            <text x="10" y="185" textAnchor="start" className="text-xs fill-green-300 font-bold">
              Security
            </text>
            <text x="190" y="185" textAnchor="end" className="text-xs fill-amber-300 font-bold">
              Scalability
            </text>

            {/* Bitcoin - D+S */}
            <circle cx="55" cy="90" r="8" className="fill-orange-500" />
            <text x="55" y="75" textAnchor="middle" className="text-xs fill-orange-300">BTC</text>

            {/* Ethereum - D+S (with L2 → +Scalability) */}
            <circle cx="75" cy="100" r="8" className="fill-blue-500" />
            <text x="75" y="85" textAnchor="middle" className="text-xs fill-blue-300">ETH</text>

            {/* Solana - S+Sc */}
            <circle cx="145" cy="140" r="8" className="fill-purple-500" />
            <text x="145" y="155" textAnchor="middle" className="text-xs fill-purple-300">SOL</text>

            {/* L2s - closer to center */}
            <circle cx="100" cy="110" r="6" className="fill-green-500" />
            <text x="100" y="125" textAnchor="middle" className="text-xs fill-green-300">L2</text>
          </svg>
        </Tooltip>
      </div>
    </DiagramContainer>
  );
}
