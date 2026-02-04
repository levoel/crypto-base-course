/**
 * Alternative L1 Diagrams - Solana, Cosmos, Polkadot architectures
 */

import { FlowNode } from '@primitives/FlowNode';
import { Arrow } from '@primitives/Arrow';
import { DiagramContainer } from '@primitives/DiagramContainer';
import { DiagramTooltip as Tooltip } from '@primitives/Tooltip';

export function PoSVariantsDiagram() {
  const variants = [
    {
      name: 'Ethereum (Gasper)',
      details: ['Casper FFG + LMD-GHOST', '12 sec blocks, 13 min finality', '800K+ validators'],
      color: 'blue',
    },
    {
      name: 'Tendermint (Cosmos)',
      details: ['BFT-based, 2/3 majority', 'Instant finality (1-6 sec)', 'Limited validators (21-180)'],
      color: 'purple',
    },
    {
      name: 'PoH (Solana)',
      details: ['VDF-based timestamping + Tower BFT', '400ms block time', 'Requires specialized hardware'],
      color: 'green',
    },
    {
      name: 'GRANDPA + BABE (Polkadot)',
      details: ['Hybrid: probabilistic + deterministic', 'BABE production, GRANDPA finality', '12 sec target'],
      color: 'rose',
    },
  ];

  return (
    <DiagramContainer title="PoS Consensus Variants">
      <div className="grid grid-cols-2 gap-3">
        {variants.map((v) => (
          <Tooltip key={v.name} content={
            <div>
              <strong>{v.name}</strong>
              <ul className="mt-2 text-xs space-y-1">
                {v.details.map((d, i) => <li key={i}>• {d}</li>)}
              </ul>
            </div>
          }>
            <div className={`bg-${v.color}-500/20 border border-${v.color}-500/50 rounded-lg p-3 cursor-help`}>
              <div className={`text-${v.color}-300 font-bold text-sm mb-2`}>{v.name}</div>
              <div className="text-xs text-gray-400 space-y-1">
                {v.details.map((d, i) => <div key={i}>{d}</div>)}
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    </DiagramContainer>
  );
}

export function ValidatorConcentrationDiagram() {
  const chains = [
    { name: 'Ethereum', validators: '800K', top: ['Lido: 29%', 'Coinbase: 9%', 'Kraken: 3%'], nakamoto: '~3' },
    { name: 'Solana', validators: '~2K', top: ['Helius: 5%', 'Jump: 4%', 'Figment: 3%'], nakamoto: '~20' },
    { name: 'Cosmos Hub', validators: '~180', top: ['Top 10: ~35%'], nakamoto: '~7' },
  ];

  return (
    <DiagramContainer title="Validator Concentration" color="amber">
      <div className="grid grid-cols-3 gap-3">
        {chains.map((c) => (
          <Tooltip key={c.name} content={
            <div>
              <strong>{c.name}</strong>
              <p className="mt-2">Nakamoto coefficient: {c.nakamoto}</p>
              <p className="text-xs text-gray-400">(nodes to halt network)</p>
            </div>
          }>
            <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-3 cursor-help">
              <div className="font-bold text-center mb-2">{c.name}</div>
              <div className="text-xs space-y-1">
                {c.top.map((t, i) => <div key={i} className="text-gray-400">{t}</div>)}
              </div>
              <div className="text-xs text-center mt-2 text-amber-300">{c.validators} validators</div>
            </div>
          </Tooltip>
        ))}
      </div>
    </DiagramContainer>
  );
}

export function SolanaInnovationsDiagram() {
  const innovations = [
    { name: 'Proof of History', desc: 'Verifiable delay function' },
    { name: 'Tower BFT', desc: 'PoH-optimized consensus' },
    { name: 'Turbine', desc: 'Block propagation protocol' },
    { name: 'Gulf Stream', desc: 'Mempool-less tx forwarding' },
    { name: 'Sealevel', desc: 'Parallel smart contracts' },
    { name: 'Pipelining', desc: 'Validation optimization' },
    { name: 'Cloudbreak', desc: 'Horizontal state scaling' },
    { name: 'Archivers', desc: 'Distributed ledger storage' },
  ];

  return (
    <DiagramContainer title="Solana's 8 Innovations" color="green">
      <div className="grid grid-cols-2 gap-2">
        {innovations.map((inn, i) => (
          <Tooltip key={inn.name} content={<div><strong>{i + 1}. {inn.name}</strong><p className="mt-1">{inn.desc}</p></div>}>
            <div className="bg-green-500/20 border border-green-500/50 rounded px-3 py-2 cursor-help flex items-center gap-2">
              <span className="text-green-400 font-bold text-sm">{i + 1}.</span>
              <div>
                <div className="text-green-300 text-sm font-medium">{inn.name}</div>
                <div className="text-xs text-gray-400">{inn.desc}</div>
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    </DiagramContainer>
  );
}

export function AccountOwnershipDiagram() {
  const accounts = [
    { owner: 'System Program', account: 'User Wallet', data: 'lamports: 1B, data: []', color: 'blue' },
    { owner: 'Token Program', account: 'Token Account', data: 'mint, owner, amount...', color: 'purple' },
    { owner: 'Custom Program', account: 'PDA Account', data: 'custom_state', color: 'green' },
  ];

  return (
    <DiagramContainer title="Solana Account Ownership" color="purple">
      <div className="space-y-3">
        {accounts.map((a) => (
          <Tooltip key={a.owner} content={
            <div>
              <strong className={`text-${a.color}-300`}>{a.owner}</strong>
              <p className="mt-2">Owns: {a.account}</p>
              <p className="mt-1 text-xs text-gray-400">Only owner can modify account data</p>
            </div>
          }>
            <div className={`bg-${a.color}-500/20 border border-${a.color}-500/50 rounded-lg p-3 cursor-help`}>
              <div className={`text-${a.color}-300 font-bold text-sm`}>{a.owner}</div>
              <div className="flex items-center gap-2 mt-2 ml-4">
                <Arrow direction="right" />
                <div className="bg-gray-800/50 rounded px-3 py-1">
                  <div className="text-white text-sm">{a.account}</div>
                  <div className="text-xs text-gray-500 font-mono">{a.data}</div>
                </div>
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    </DiagramContainer>
  );
}

export function CosmosVsEthereumDiagram() {
  return (
    <DiagramContainer title="Monolithic vs App-Chains">
      <div className="grid grid-cols-2 gap-4">
        <Tooltip content={
          <div>
            <strong className="text-blue-300">Monolithic (Ethereum)</strong>
            <p className="mt-2">All apps share same execution layer, compete for block space</p>
          </div>
        }>
          <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4 cursor-help">
            <div className="text-blue-300 font-bold text-center mb-3">Ethereum</div>
            <div className="flex flex-wrap gap-1 justify-center">
              {['Uniswap', 'Aave', 'OpenSea', 'Compound'].map((app) => (
                <div key={app} className="bg-blue-900/50 rounded px-2 py-1 text-xs">{app}</div>
              ))}
            </div>
            <div className="text-xs text-gray-400 text-center mt-2">All share same layer</div>
          </div>
        </Tooltip>
        <Tooltip content={
          <div>
            <strong className="text-purple-300">App-Chains (Cosmos)</strong>
            <p className="mt-2">Each app has its own chain, connected via IBC</p>
          </div>
        }>
          <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-4 cursor-help">
            <div className="text-purple-300 font-bold text-center mb-3">Cosmos</div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-1">
                {['Osmosis', 'dYdX', 'Stride'].map((app) => (
                  <div key={app} className="bg-purple-900/50 rounded px-2 py-1 text-xs">{app}</div>
                ))}
              </div>
              <div className="text-xs text-purple-400">↓ IBC ↓</div>
              <div className="bg-purple-900/50 rounded px-3 py-1 text-xs">Cosmos Hub</div>
            </div>
          </div>
        </Tooltip>
      </div>
    </DiagramContainer>
  );
}

export function CosmosSDKArchitectureDiagram() {
  return (
    <DiagramContainer title="Cosmos SDK Architecture" color="purple">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-4 gap-2">
          {['Auth', 'Bank', 'Staking', 'Gov'].map((m) => (
            <Tooltip key={m} content={<div><strong>{m} Module</strong></div>}>
              <div className="bg-purple-500/20 border border-purple-500/50 rounded px-2 py-1 text-xs text-center cursor-help">{m}</div>
            </Tooltip>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['IBC', 'Custom 1', 'Custom 2', '...'].map((m) => (
            <div key={m} className="bg-purple-900/30 border border-purple-500/30 rounded px-2 py-1 text-xs text-center">{m}</div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-2">
          <div className="bg-amber-500/20 border border-amber-500/50 rounded px-3 py-1 text-center text-sm">BaseApp (ABCI)</div>
        </div>
        <div className="bg-blue-500/20 border border-blue-500/50 rounded px-3 py-2 text-center">
          <div className="text-blue-300 font-bold text-sm">Tendermint Core</div>
          <div className="text-xs text-gray-400">Consensus + Networking</div>
        </div>
      </div>
    </DiagramContainer>
  );
}

export function IBCProtocolDiagram() {
  return (
    <DiagramContainer title="IBC Protocol Components" color="green">
      <div className="space-y-2">
        {[
          { name: 'Light Clients', desc: 'Track consensus state of connected chains' },
          { name: 'Connections', desc: 'Authenticated links via handshake' },
          { name: 'Channels', desc: 'Application-level communication paths' },
          { name: 'Packets', desc: 'Actual data with timeout mechanism' },
        ].map((c) => (
          <Tooltip key={c.name} content={<div><strong>{c.name}</strong><p className="mt-1">{c.desc}</p></div>}>
            <div className="bg-green-500/20 border border-green-500/50 rounded px-4 py-2 cursor-help">
              <span className="text-green-300 font-bold">{c.name}:</span>
              <span className="text-gray-300 ml-2 text-sm">{c.desc}</span>
            </div>
          </Tooltip>
        ))}
      </div>
    </DiagramContainer>
  );
}

export function PolkadotNetworkDiagram() {
  return (
    <DiagramContainer title="Polkadot Network" color="rose">
      <div className="flex flex-col items-center gap-3">
        <Tooltip content={
          <div>
            <strong className="text-rose-300">Relay Chain</strong>
            <p className="mt-2">DOT staking, consensus, cross-chain coordination</p>
            <p className="mt-1 text-xs text-gray-400">Does NOT execute smart contracts</p>
          </div>
        }>
          <div className="bg-rose-500/30 border border-rose-500/50 rounded-lg px-6 py-3 cursor-help">
            <div className="text-rose-300 font-bold text-center">Relay Chain</div>
            <div className="text-xs text-gray-400 text-center">(DOT staking, consensus)</div>
          </div>
        </Tooltip>
        <div className="flex gap-3">
          {[
            { name: 'Acala', type: 'DeFi' },
            { name: 'Moonbeam', type: 'EVM' },
            { name: 'Astar', type: 'dApps' },
            { name: 'Phala', type: 'Privacy' },
          ].map((p) => (
            <Tooltip key={p.name} content={<div><strong>{p.name}</strong><p className="mt-1">Parachain: {p.type}</p></div>}>
              <div className="bg-rose-500/20 border border-rose-500/50 rounded-lg px-3 py-2 cursor-help text-center">
                <div className="text-rose-300 text-sm font-medium">{p.name}</div>
                <div className="text-xs text-gray-500">{p.type}</div>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </DiagramContainer>
  );
}

export function HybridConsensusDiagram() {
  return (
    <DiagramContainer title="BABE + GRANDPA Hybrid Consensus" color="blue">
      <div className="grid grid-cols-2 gap-4">
        <Tooltip content={
          <div>
            <strong className="text-amber-300">BABE (Block Production)</strong>
            <ul className="mt-2 text-xs space-y-1">
              <li>• VRF-based slot leader selection</li>
              <li>• Produces blocks every 6 seconds</li>
              <li>• Probabilistic (can have forks)</li>
            </ul>
          </div>
        }>
          <div className="bg-amber-500/20 border border-amber-500/50 rounded-lg p-4 cursor-help">
            <div className="text-amber-300 font-bold text-center mb-2">BABE</div>
            <div className="text-xs text-gray-400 text-center">Block Production</div>
            <div className="text-xs mt-2 space-y-1">
              <div>• VRF slot selection</div>
              <div>• 6 sec blocks</div>
              <div>• Can fork</div>
            </div>
          </div>
        </Tooltip>
        <Tooltip content={
          <div>
            <strong className="text-purple-300">GRANDPA (Finality)</strong>
            <ul className="mt-2 text-xs space-y-1">
              <li>• Finalizes chains of blocks at once</li>
              <li>• Deterministic finality (no reorgs)</li>
              <li>• Works during partitions</li>
            </ul>
          </div>
        }>
          <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-4 cursor-help">
            <div className="text-purple-300 font-bold text-center mb-2">GRANDPA</div>
            <div className="text-xs text-gray-400 text-center">Finality</div>
            <div className="text-xs mt-2 space-y-1">
              <div>• Finalizes chains</div>
              <div>• No reorgs after</div>
              <div>• Partition tolerant</div>
            </div>
          </div>
        </Tooltip>
      </div>
      <div className="text-center text-xs text-gray-400 mt-2">
        Together: Fast production + Strong finality
      </div>
    </DiagramContainer>
  );
}
