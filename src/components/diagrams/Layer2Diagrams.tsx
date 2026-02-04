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

export function VerticalScalingDiagram() {
  return (
    <DiagramContainer title="Vertical Scaling" color="amber">
      <div className="flex flex-col gap-3">
        <div className="text-center text-gray-400 text-sm mb-2">Trade-offs</div>
        <div className="space-y-2">
          <Tooltip content={<div><strong>Bigger blocks</strong><p className="mt-1">Больше транзакций per block, но дольше propagation</p></div>}>
            <div className="bg-amber-500/20 border border-amber-500/50 rounded px-4 py-2 cursor-help text-center">
              <span className="text-amber-300">↑ Bigger blocks</span>
            </div>
          </Tooltip>
          <Tooltip content={<div><strong>Faster blocks</strong><p className="mt-1">Меньше latency, но больше orphan blocks</p></div>}>
            <div className="bg-amber-500/20 border border-amber-500/50 rounded px-4 py-2 cursor-help text-center">
              <span className="text-amber-300">↑ Faster blocks</span>
            </div>
          </Tooltip>
          <Tooltip content={<div><strong>Powerful nodes</strong><p className="mt-1">Больше throughput, но меньше decentralization</p></div>}>
            <div className="bg-amber-500/20 border border-amber-500/50 rounded px-4 py-2 cursor-help text-center">
              <span className="text-amber-300">↑ More powerful nodes</span>
            </div>
          </Tooltip>
        </div>
        <div className="border-t border-gray-700 mt-2 pt-2 space-y-1 text-sm">
          <div className="text-rose-400">❌ Reduces decentralization</div>
          <div className="text-rose-400">❌ State grows faster</div>
          <div className="text-rose-400">❌ Higher node requirements</div>
        </div>
      </div>
    </DiagramContainer>
  );
}

export function ShardingDiagram() {
  return (
    <DiagramContainer title="Sharding (Danksharding)" color="blue">
      <div className="flex flex-col gap-3">
        <div className="space-y-2">
          <Tooltip content={<div><strong>State splitting</strong><p className="mt-1">Разделение данных на независимые части</p></div>}>
            <div className="bg-blue-500/20 border border-blue-500/50 rounded px-4 py-2 cursor-help text-center">
              Split state into multiple "shards"
            </div>
          </Tooltip>
          <Tooltip content={<div><strong>Parallel processing</strong><p className="mt-1">Каждый shard обрабатывается независимо</p></div>}>
            <div className="bg-blue-500/20 border border-blue-500/50 rounded px-4 py-2 cursor-help text-center">
              Each shard processed in parallel
            </div>
          </Tooltip>
          <Tooltip content={<div><strong>Beacon chain</strong><p className="mt-1">Координация через consensus layer</p></div>}>
            <div className="bg-blue-500/20 border border-blue-500/50 rounded px-4 py-2 cursor-help text-center">
              Cross-shard via beacon chain
            </div>
          </Tooltip>
        </div>
        <div className="border-t border-gray-700 mt-2 pt-2 space-y-1 text-sm">
          <div className="text-green-400">✅ Scales with number of shards</div>
          <div className="text-rose-400">❌ Cross-shard txs complex</div>
          <div className="text-rose-400">❌ Implementation challenging</div>
        </div>
      </div>
    </DiagramContainer>
  );
}

export function L2SolutionsDiagram() {
  return (
    <DiagramContainer title="Layer 2 Solutions" color="green">
      <div className="flex flex-col gap-3">
        <div className="space-y-2">
          <Tooltip content={<div><strong>Off-chain execution</strong><p className="mt-1">Транзакции выполняются вне L1, результаты публикуются</p></div>}>
            <div className="bg-green-500/20 border border-green-500/50 rounded px-4 py-2 cursor-help text-center">
              Execute transactions off-chain
            </div>
          </Tooltip>
          <Tooltip content={<div><strong>Proofs on L1</strong><p className="mt-1">Fraud proofs (Optimistic) или validity proofs (ZK)</p></div>}>
            <div className="bg-green-500/20 border border-green-500/50 rounded px-4 py-2 cursor-help text-center">
              Post proofs/data to L1
            </div>
          </Tooltip>
          <Tooltip content={<div><strong>Security inheritance</strong><p className="mt-1">L2 наследует security от Ethereum</p></div>}>
            <div className="bg-green-500/20 border border-green-500/50 rounded px-4 py-2 cursor-help text-center">
              Inherit L1 security guarantees
            </div>
          </Tooltip>
        </div>
        <div className="border-t border-gray-700 mt-2 pt-2 space-y-1 text-sm">
          <div className="text-green-400">✅ Doesn't change L1</div>
          <div className="text-green-400">✅ Multiple L2s in parallel</div>
          <div className="text-green-400">✅ Different trade-offs per L2</div>
          <div className="text-amber-400">⚠️ Composability between L2s limited</div>
        </div>
      </div>
    </DiagramContainer>
  );
}

export function InteractiveBisectionDiagram() {
  const rounds = [
    { range: '0-1000', desc: 'Sequencer claims state after instruction 500' },
    { range: '0-500', desc: 'Narrowed to first half' },
    { range: '250-500', desc: 'Narrowed to 250 instructions' },
    { range: '375-500', desc: 'Narrowed to 125 instructions' },
    { range: '...', desc: 'Continue bisection...' },
    { range: '1 instr', desc: 'Execute on L1, determine winner' },
  ];

  return (
    <DiagramContainer title="Interactive Bisection Protocol" color="purple">
      <div className="space-y-2">
        {rounds.map((round, i) => (
          <Tooltip key={i} content={<div><strong>Round {i + 1}</strong><p className="mt-1">{round.desc}</p></div>}>
            <div className={`flex items-center gap-3 cursor-help ${i === rounds.length - 1 ? 'bg-green-500/20 border-green-500/50' : 'bg-purple-500/20 border-purple-500/50'} border rounded px-3 py-1`}>
              <span className="text-gray-400 text-xs w-16">Round {i + 1}</span>
              <span className={`font-mono text-sm ${i === rounds.length - 1 ? 'text-green-300' : 'text-purple-300'}`}>{round.range}</span>
              {i < rounds.length - 1 && <Arrow direction="right" className="ml-auto" />}
            </div>
          </Tooltip>
        ))}
        <div className="text-center text-gray-400 text-xs mt-2">
          Complexity: O(log n) rounds instead of O(n) execution
        </div>
      </div>
    </DiagramContainer>
  );
}

export function WithdrawalFlowDiagram() {
  const steps = [
    { num: 1, label: 'Initiate', desc: 'User initiates withdrawal on L2' },
    { num: 2, label: 'Include', desc: 'Withdrawal tx included in L2 batch' },
    { num: 3, label: 'Post', desc: 'Batch posted to L1' },
    { num: 4, label: 'Challenge', desc: '7 day challenge period starts' },
    { num: 5, label: 'Wait', desc: 'No valid fraud proof submitted' },
    { num: 6, label: 'Claim', desc: 'User can claim on L1' },
  ];

  return (
    <DiagramContainer title="Optimistic Rollup Withdrawal Flow" color="rose">
      <div className="space-y-3">
        <div className="flex flex-wrap justify-center gap-2">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <Tooltip content={<div><strong>Step {step.num}</strong><p className="mt-1">{step.desc}</p></div>}>
                <div className={`rounded-lg px-3 py-2 cursor-help text-center min-w-[70px] ${step.num === 4 ? 'bg-rose-500/30 border-rose-500/50' : 'bg-gray-700/50 border-gray-600'} border`}>
                  <div className="text-xs font-bold text-gray-300">{step.num}</div>
                  <div className="text-xs mt-1">{step.label}</div>
                </div>
              </Tooltip>
              {i < steps.length - 1 && <Arrow direction="right" className="mx-1" />}
            </div>
          ))}
        </div>
        <Tooltip content={<div><strong>Alternative: Bridge</strong><p className="mt-1">Liquidity providers дают instant withdrawal, сами ждут 7 дней</p></div>}>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2 text-center cursor-help">
            <span className="text-green-300 text-sm">Alternative: Use bridge for instant withdrawal</span>
          </div>
        </Tooltip>
      </div>
    </DiagramContainer>
  );
}

export function ZkEVMSpectrumDiagram() {
  const types = [
    { type: 'Type 1', name: 'Ethereum-equivalent', desc: 'Proves actual Ethereum blocks', examples: '(in development)', color: 'blue' },
    { type: 'Type 2', name: 'EVM-equivalent', desc: '100% Solidity compatible', examples: 'Scroll, Polygon zkEVM', color: 'green' },
    { type: 'Type 2.5', name: 'EVM except gas', desc: 'Different gas costs for some opcodes', examples: 'Scroll (current)', color: 'teal' },
    { type: 'Type 3', name: 'Almost EVM', desc: 'Most contracts work, some edge cases differ', examples: '(transitional)', color: 'amber' },
    { type: 'Type 4', name: 'Language-equivalent', desc: 'Compiles to ZK-friendly VM', examples: 'zkSync Era, StarkNet', color: 'purple' },
  ];

  return (
    <DiagramContainer title="zkEVM Type Spectrum" color="purple">
      <div className="space-y-2">
        {types.map((t) => (
          <Tooltip key={t.type} content={<div><strong>{t.type}: {t.name}</strong><p className="mt-1">{t.desc}</p><p className="mt-1 text-gray-400 text-xs">Examples: {t.examples}</p></div>}>
            <div className={`bg-${t.color}-500/20 border border-${t.color}-500/50 rounded px-4 py-2 cursor-help flex justify-between items-center`}>
              <span className={`text-${t.color}-300 font-bold text-sm`}>{t.type}</span>
              <span className="text-gray-300 text-sm">{t.name}</span>
            </div>
          </Tooltip>
        ))}
        <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
          <span>← More compatible</span>
          <span>Faster proofs →</span>
        </div>
      </div>
    </DiagramContainer>
  );
}

export function DataWithholdingDiagram() {
  return (
    <DiagramContainer title="Data Withholding Attack" color="rose">
      <div className="space-y-3">
        <Tooltip content={<div><strong>Malicious Sequencer</strong><p className="mt-1">Публикует state root, но скрывает данные транзакций</p></div>}>
          <div className="bg-rose-500/20 border border-rose-500/50 rounded-lg p-3 cursor-help">
            <div className="text-rose-300 font-bold text-center mb-2">Malicious Sequencer</div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">1.</span>
                <span>Execute: Alice → Bob 100 ETH</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">2.</span>
                <span>Post state root to L1 ✓</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">3.</span>
                <span className="text-rose-400">DON'T post transaction data ✗</span>
              </div>
            </div>
          </div>
        </Tooltip>
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
          <div className="text-gray-400 font-bold text-center mb-2">Result</div>
          <div className="space-y-1 text-sm">
            <div className="text-gray-300">• L1 knows new state root</div>
            <div className="text-rose-400">• Nobody can verify it's correct</div>
            <div className="text-rose-400">• Alice can't prove she still has funds</div>
            <div className="text-rose-400">• Validators can't generate fraud proof</div>
          </div>
        </div>
      </div>
    </DiagramContainer>
  );
}

export function DankshardingDiagram() {
  return (
    <DiagramContainer title="Full Danksharding (Future)" color="blue">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Tooltip content={<div><strong>Current (EIP-4844)</strong><p className="mt-1">All nodes download all blobs</p></div>}>
            <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-3 cursor-help">
              <div className="text-gray-300 font-bold text-center text-sm mb-2">Current</div>
              <div className="text-xs space-y-1">
                <div>• 6 blobs max per block</div>
                <div>• All nodes download all</div>
                <div>• ~768 KB/block</div>
              </div>
            </div>
          </Tooltip>
          <Tooltip content={<div><strong>Full Danksharding</strong><p className="mt-1">Data Availability Sampling - nodes sample random chunks</p></div>}>
            <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-3 cursor-help">
              <div className="text-blue-300 font-bold text-center text-sm mb-2">Danksharding</div>
              <div className="text-xs space-y-1">
                <div>• 64+ blobs per block</div>
                <div>• Data Availability Sampling</div>
                <div>• ~16 MB/block</div>
              </div>
            </div>
          </Tooltip>
        </div>
        <Tooltip content={<div><strong>DAS</strong><p className="mt-1">Nodes sample random blob chunks. Erasure coding allows reconstruction from 50% of data.</p></div>}>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2 text-center cursor-help">
            <span className="text-green-300 text-sm">DAS: No node needs ALL data, probabilistic guarantee</span>
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
