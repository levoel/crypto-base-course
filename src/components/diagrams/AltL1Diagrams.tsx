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

export function NPoSElectionDiagram() {
  return (
    <DiagramContainer title="NPoS Election Process" color="purple">
      <div className="flex flex-col gap-3">
        <Tooltip content={
          <div>
            <strong className="text-blue-300">Nominators</strong>
            <p className="mt-2">DOT holders who select up to 16 validators they trust with their stake</p>
          </div>
        }>
          <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-3 cursor-help">
            <div className="text-blue-300 font-bold text-center">Nominators</div>
            <div className="text-xs text-gray-400 text-center">Select up to 16 validators</div>
          </div>
        </Tooltip>

        <Arrow direction="down" className="self-center" />

        <Tooltip content={
          <div>
            <strong className="text-amber-300">Phragmén Election</strong>
            <p className="mt-2">Algorithm selects active validator set to maximize decentralization:</p>
            <ul className="mt-1 text-xs space-y-1">
              <li>• Proportional stake distribution</li>
              <li>• Minimizes largest validator advantage</li>
              <li>• Currently 297 active validators</li>
            </ul>
          </div>
        }>
          <div className="bg-amber-500/20 border border-amber-500/50 rounded-lg p-3 cursor-help">
            <div className="text-amber-300 font-bold text-center">Phragmén Algorithm</div>
            <div className="text-xs text-gray-400 text-center">Optimal validator selection</div>
          </div>
        </Tooltip>

        <Arrow direction="down" className="self-center" />

        <Tooltip content={
          <div>
            <strong className="text-green-300">Active Validators</strong>
            <p className="mt-2">Selected set produces blocks and earns rewards</p>
            <p className="mt-1 text-xs text-gray-400">⚠️ Both validators AND nominators can be slashed</p>
          </div>
        }>
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 cursor-help">
            <div className="text-green-300 font-bold text-center">Active Validator Set</div>
            <div className="text-xs text-gray-400 text-center">~297 validators on Polkadot</div>
          </div>
        </Tooltip>

        <div className="bg-rose-500/10 border border-rose-500/30 rounded px-3 py-2 text-center">
          <span className="text-rose-300 text-xs">Slashing: Both validators AND nominators lose stake</span>
        </div>
      </div>
    </DiagramContainer>
  );
}

export function SlotAuctionDiagram() {
  return (
    <DiagramContainer title="Parachain Slot Auction" color="amber">
      <div className="space-y-3">
        <Tooltip content={
          <div>
            <strong className="text-amber-300">Candle Auction</strong>
            <p className="mt-2">Modified candle auction prevents sniping (last-second bids)</p>
            <p className="mt-1 text-xs text-gray-400">Random end time revealed after auction closes</p>
          </div>
        }>
          <div className="bg-amber-500/20 border border-amber-500/50 rounded-lg p-3 cursor-help">
            <div className="text-amber-300 font-bold">Candle Auction Mechanism</div>
            <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
              <div className="bg-amber-900/30 rounded p-2">
                <div className="text-gray-400">Duration</div>
                <div className="text-white">~7 days</div>
              </div>
              <div className="bg-amber-900/30 rounded p-2">
                <div className="text-gray-400">End time</div>
                <div className="text-white">Random (anti-snipe)</div>
              </div>
            </div>
          </div>
        </Tooltip>

        <Tooltip content={
          <div>
            <strong className="text-purple-300">Crowdloan</strong>
            <p className="mt-2">Projects crowdsource DOT from community for bidding</p>
            <ul className="mt-1 text-xs space-y-1">
              <li>• Contributors loan DOT (not give)</li>
              <li>• Receive parachain tokens in return</li>
              <li>• DOT returned after lease ends</li>
            </ul>
          </div>
        }>
          <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-3 cursor-help">
            <div className="text-purple-300 font-bold">Crowdloan Model</div>
            <div className="flex items-center gap-2 mt-2">
              <div className="bg-purple-900/30 rounded px-2 py-1 text-xs">Community DOT</div>
              <Arrow direction="right" />
              <div className="bg-purple-900/30 rounded px-2 py-1 text-xs">Bid</div>
              <Arrow direction="right" />
              <div className="bg-purple-900/30 rounded px-2 py-1 text-xs">Tokens</div>
            </div>
          </div>
        </Tooltip>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-700/50 border border-gray-600 rounded p-2 text-center">
            <div className="text-xs text-gray-400">Lease Period</div>
            <div className="text-sm text-white">6 weeks — 2 years</div>
          </div>
          <div className="bg-gray-700/50 border border-gray-600 rounded p-2 text-center">
            <div className="text-xs text-gray-400">Typical Cost</div>
            <div className="text-sm text-white">$1M — $50M+</div>
          </div>
        </div>
      </div>
    </DiagramContainer>
  );
}

export function XCMPFlowDiagram() {
  return (
    <DiagramContainer title="XCMP Message Flow" color="green">
      <div className="flex items-start gap-4">
        <Tooltip content={
          <div>
            <strong className="text-blue-300">Parachain A</strong>
            <p className="mt-2">Source chain initiates XCM message</p>
          </div>
        }>
          <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-3 cursor-help text-center">
            <div className="text-blue-300 font-bold text-sm">Parachain A</div>
            <div className="text-xs text-gray-400 mt-1">Source</div>
          </div>
        </Tooltip>

        <div className="flex flex-col items-center gap-1 pt-3">
          <Arrow direction="right" />
          <span className="text-xs text-gray-500">XCM</span>
        </div>

        <Tooltip content={
          <div>
            <strong className="text-rose-300">Relay Chain</strong>
            <p className="mt-2">Routes message between parachains (HRMP)</p>
            <p className="mt-1 text-xs text-gray-400">Future XCMP: direct communication</p>
          </div>
        }>
          <div className="bg-rose-500/20 border border-rose-500/50 rounded-lg p-3 cursor-help text-center">
            <div className="text-rose-300 font-bold text-sm">Relay Chain</div>
            <div className="text-xs text-gray-400 mt-1">Route message</div>
            <div className="text-xs text-rose-400 mt-1">(HRMP)</div>
          </div>
        </Tooltip>

        <div className="flex flex-col items-center gap-1 pt-3">
          <Arrow direction="right" />
          <span className="text-xs text-gray-500">Route</span>
        </div>

        <Tooltip content={
          <div>
            <strong className="text-green-300">Parachain B</strong>
            <p className="mt-2">Receives and executes XCM instruction</p>
          </div>
        }>
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 cursor-help text-center">
            <div className="text-green-300 font-bold text-sm">Parachain B</div>
            <div className="text-xs text-gray-400 mt-1">Execute</div>
          </div>
        </Tooltip>
      </div>

      <div className="mt-3 text-xs text-gray-400 border-t border-gray-700 pt-2 space-y-1">
        <div><span className="text-amber-300">Current (HRMP):</span> All messages routed via Relay Chain</div>
        <div><span className="text-green-300">Future (XCMP):</span> Direct parachain-to-parachain messaging</div>
      </div>
    </DiagramContainer>
  );
}

export function SubstrateFrameworkDiagram() {
  return (
    <DiagramContainer title="Substrate Framework" color="purple">
      <div className="flex flex-col gap-2">
        <Tooltip content={
          <div>
            <strong className="text-purple-300">Pre-built Pallets (Modules)</strong>
            <p className="mt-2">Ready-to-use blockchain functionality</p>
          </div>
        }>
          <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-3 cursor-help">
            <div className="text-purple-300 font-bold text-sm mb-2">Pallets (Modules)</div>
            <div className="grid grid-cols-3 gap-1 text-xs">
              {['pallet-balances', 'pallet-staking', 'pallet-contracts', 'pallet-evm', 'pallet-xcm', 'pallet-gov'].map((p) => (
                <div key={p} className="bg-purple-900/30 rounded px-2 py-1 text-center">{p}</div>
              ))}
            </div>
          </div>
        </Tooltip>

        <Tooltip content={
          <div>
            <strong className="text-amber-300">WASM Runtime</strong>
            <p className="mt-2">Upgradeable without hard forks — just update WASM code via governance</p>
          </div>
        }>
          <div className="bg-amber-500/20 border border-amber-500/50 rounded-lg p-3 cursor-help text-center">
            <div className="text-amber-300 font-bold text-sm">Runtime = WASM blob</div>
            <div className="text-xs text-gray-400">Forkless upgrades via governance</div>
          </div>
        </Tooltip>

        <Tooltip content={
          <div>
            <strong className="text-blue-300">Client Layer</strong>
            <p className="mt-2">Networking (libp2p), Consensus (BABE/GRANDPA), Database (RocksDB)</p>
          </div>
        }>
          <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-3 cursor-help">
            <div className="text-blue-300 font-bold text-sm mb-2">Client</div>
            <div className="grid grid-cols-3 gap-1 text-xs">
              <div className="bg-blue-900/30 rounded px-2 py-1 text-center">libp2p</div>
              <div className="bg-blue-900/30 rounded px-2 py-1 text-center">Consensus</div>
              <div className="bg-blue-900/30 rounded px-2 py-1 text-center">RocksDB</div>
            </div>
          </div>
        </Tooltip>
      </div>
    </DiagramContainer>
  );
}

export function ParachainExamplesDiagram() {
  const parachains = [
    { name: 'Acala', desc: 'DeFi hub (stablecoin, DEX, liquid staking)', color: 'blue' },
    { name: 'Moonbeam', desc: 'EVM-compatible smart contracts', color: 'purple' },
    { name: 'Astar', desc: 'Multi-VM (EVM + WASM) dApp platform', color: 'green' },
    { name: 'Phala', desc: 'Privacy-preserving computation', color: 'amber' },
    { name: 'Centrifuge', desc: 'Real-world asset financing', color: 'rose' },
  ];

  return (
    <DiagramContainer title="Notable Parachains" color="rose">
      <div className="grid grid-cols-1 gap-2">
        {parachains.map((p) => (
          <Tooltip key={p.name} content={
            <div>
              <strong className={`text-${p.color}-300`}>{p.name}</strong>
              <p className="mt-2">{p.desc}</p>
            </div>
          }>
            <div className={`bg-${p.color}-500/20 border border-${p.color}-500/50 rounded px-3 py-2 cursor-help flex justify-between items-center`}>
              <span className={`text-${p.color}-300 font-bold text-sm`}>{p.name}</span>
              <span className="text-gray-400 text-xs">{p.desc}</span>
            </div>
          </Tooltip>
        ))}
      </div>
    </DiagramContainer>
  );
}

export function FinalityComparisonDiagram() {
  return (
    <DiagramContainer title="Finality Comparison" color="blue">
      <div className="space-y-3">
        <Tooltip content={
          <div>
            <strong className="text-blue-300">Ethereum</strong>
            <p className="mt-2">32 slots per epoch, finality after 2 epochs</p>
          </div>
        }>
          <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-2 cursor-help">
            <div className="flex items-center justify-between">
              <span className="text-blue-300 font-bold text-sm">Ethereum</span>
              <span className="text-xs text-gray-400">12s slots → 2 epochs ≈ 13 min finality</span>
            </div>
            <div className="flex gap-1 mt-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-blue-900/50 rounded w-8 h-4 text-xs flex items-center justify-center">S{i+1}</div>
              ))}
              <span className="text-gray-500 text-xs">...</span>
            </div>
          </div>
        </Tooltip>

        <Tooltip content={
          <div>
            <strong className="text-green-300">Solana</strong>
            <p className="mt-2">400ms slots, optimistic finality ~32 slots (12s)</p>
          </div>
        }>
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-2 cursor-help">
            <div className="flex items-center justify-between">
              <span className="text-green-300 font-bold text-sm">Solana</span>
              <span className="text-xs text-gray-400">400ms slots → ~32 slots ≈ 12s finality</span>
            </div>
            <div className="flex gap-0.5 mt-2">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-green-900/50 rounded w-4 h-4"></div>
              ))}
              <span className="text-gray-500 text-xs">...</span>
            </div>
          </div>
        </Tooltip>

        <Tooltip content={
          <div>
            <strong className="text-purple-300">Tendermint (Cosmos)</strong>
            <p className="mt-2">BFT consensus — 2/3+ validators sign = INSTANT finality</p>
          </div>
        }>
          <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-2 cursor-help">
            <div className="flex items-center justify-between">
              <span className="text-purple-300 font-bold text-sm">Tendermint</span>
              <span className="text-xs text-gray-400">~6s blocks → INSTANT finality</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="bg-purple-900/50 rounded px-3 py-1 text-xs">Block</div>
              <span className="text-xs text-purple-400">← 2/3+ sign = final</span>
            </div>
          </div>
        </Tooltip>
      </div>
    </DiagramContainer>
  );
}

export function ExecutionModelsDiagram() {
  return (
    <DiagramContainer title="Sequential vs Parallel Execution" color="amber">
      <div className="grid grid-cols-2 gap-4">
        <Tooltip content={
          <div>
            <strong className="text-blue-300">Sequential (Ethereum)</strong>
            <p className="mt-2">Each transaction sees result of previous one</p>
            <p className="mt-1 text-xs text-gray-400">Simpler but lower throughput</p>
          </div>
        }>
          <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-3 cursor-help">
            <div className="text-blue-300 font-bold text-sm mb-2">Sequential (EVM)</div>
            <div className="flex items-center gap-1 text-xs">
              <div className="bg-blue-900/50 rounded px-2 py-1">Tx1</div>
              <Arrow direction="right" />
              <div className="bg-blue-900/50 rounded px-2 py-1">Tx2</div>
              <Arrow direction="right" />
              <div className="bg-blue-900/50 rounded px-2 py-1">Tx3</div>
            </div>
            <div className="text-xs text-gray-400 mt-2 text-center">One at a time</div>
          </div>
        </Tooltip>

        <Tooltip content={
          <div>
            <strong className="text-green-300">Parallel (Solana)</strong>
            <p className="mt-2">Non-conflicting transactions run simultaneously</p>
            <p className="mt-1 text-xs text-gray-400">Requires declaring accessed accounts upfront</p>
          </div>
        }>
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 cursor-help">
            <div className="text-green-300 font-bold text-sm mb-2">Parallel (Sealevel)</div>
            <div className="flex flex-col gap-1 text-xs">
              <div className="flex gap-2">
                <div className="bg-green-900/50 rounded px-2 py-1">Tx1 (A)</div>
                <div className="bg-green-900/50 rounded px-2 py-1">Tx2 (B)</div>
              </div>
              <div className="flex gap-2">
                <div className="bg-green-900/50 rounded px-2 py-1">Tx3 (C)</div>
                <div className="bg-amber-900/50 rounded px-2 py-1">Tx4 (A) waits</div>
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2 text-center">Concurrent if no conflict</div>
          </div>
        </Tooltip>
      </div>
    </DiagramContainer>
  );
}

export function IBCTransferDiagram() {
  const steps = [
    { from: 'Chain A', action: 'Lock tokens in escrow', color: 'blue' },
    { from: 'Chain A', action: 'SendPacket →', to: 'Relayer', color: 'blue' },
    { from: 'Relayer', action: 'RecvPacket →', to: 'Chain B', color: 'purple' },
    { from: 'Chain B', action: 'Mint vouchers', color: 'green' },
    { from: 'Chain B', action: '← WriteAck', to: 'Relayer', color: 'green' },
    { from: 'Relayer', action: '← AckPacket', to: 'Chain A', color: 'purple' },
    { from: 'Chain A', action: 'Confirm transfer', color: 'blue' },
  ];

  return (
    <DiagramContainer title="IBC Token Transfer Flow" color="green">
      <div className="flex flex-col gap-2">
        {/* Header */}
        <div className="grid grid-cols-3 gap-4 text-center mb-2">
          <div className="text-blue-300 font-bold text-sm">Chain A</div>
          <div className="text-purple-300 font-bold text-sm">Relayer</div>
          <div className="text-green-300 font-bold text-sm">Chain B</div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical lines */}
          <div className="absolute inset-0 grid grid-cols-3 gap-4">
            <div className="flex justify-center">
              <div className="w-0.5 h-full bg-blue-500/30"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-0.5 h-full bg-purple-500/30"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-0.5 h-full bg-green-500/30"></div>
            </div>
          </div>

          {/* Steps */}
          <div className="relative space-y-3 py-2">
            {/* Step 1: Lock tokens */}
            <Tooltip content={<div><strong>Step 1</strong><p className="mt-1">Chain A locks tokens in IBC escrow account</p></div>}>
              <div className="grid grid-cols-3 gap-4 cursor-help">
                <div className="flex justify-center">
                  <div className="bg-blue-500/20 border border-blue-500/50 rounded px-2 py-1 text-xs">
                    Lock in escrow
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </Tooltip>

            {/* Step 2: SendPacket */}
            <Tooltip content={<div><strong>SendPacket</strong><p className="mt-1">Chain A emits IBC packet with transfer data</p></div>}>
              <div className="grid grid-cols-3 gap-4 cursor-help">
                <div className="flex justify-center items-center">
                  <div className="bg-blue-500/30 rounded px-2 py-0.5 text-xs">SendPacket</div>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 border-t-2 border-dashed border-blue-400"></div>
                  <span className="text-blue-400 text-xs">→</span>
                </div>
                <div></div>
              </div>
            </Tooltip>

            {/* Step 3: RecvPacket */}
            <Tooltip content={<div><strong>RecvPacket</strong><p className="mt-1">Relayer submits packet proof to Chain B</p></div>}>
              <div className="grid grid-cols-3 gap-4 cursor-help">
                <div></div>
                <div className="flex items-center">
                  <span className="text-purple-400 text-xs"></span>
                  <div className="flex-1 border-t-2 border-dashed border-purple-400"></div>
                  <span className="text-purple-400 text-xs">→</span>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-purple-500/30 rounded px-2 py-0.5 text-xs">RecvPacket</div>
                </div>
              </div>
            </Tooltip>

            {/* Step 4: Mint vouchers */}
            <Tooltip content={<div><strong>Mint Vouchers</strong><p className="mt-1">Chain B mints IBC voucher tokens (e.g., ibc/ABC...)</p></div>}>
              <div className="grid grid-cols-3 gap-4 cursor-help">
                <div></div>
                <div></div>
                <div className="flex justify-center">
                  <div className="bg-green-500/20 border border-green-500/50 rounded px-2 py-1 text-xs">
                    Mint vouchers
                  </div>
                </div>
              </div>
            </Tooltip>

            {/* Step 5: WriteAck */}
            <Tooltip content={<div><strong>WriteAck</strong><p className="mt-1">Chain B writes acknowledgement</p></div>}>
              <div className="grid grid-cols-3 gap-4 cursor-help">
                <div></div>
                <div className="flex items-center">
                  <span className="text-green-400 text-xs">←</span>
                  <div className="flex-1 border-t-2 border-dashed border-green-400"></div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-green-500/30 rounded px-2 py-0.5 text-xs">WriteAck</div>
                </div>
              </div>
            </Tooltip>

            {/* Step 6: AckPacket */}
            <Tooltip content={<div><strong>AckPacket</strong><p className="mt-1">Relayer submits ack proof to Chain A</p></div>}>
              <div className="grid grid-cols-3 gap-4 cursor-help">
                <div className="flex justify-center items-center">
                  <div className="bg-purple-500/30 rounded px-2 py-0.5 text-xs">AckPacket</div>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 text-xs">←</span>
                  <div className="flex-1 border-t-2 border-dashed border-purple-400"></div>
                </div>
                <div></div>
              </div>
            </Tooltip>

            {/* Step 7: Confirm */}
            <Tooltip content={<div><strong>Confirm</strong><p className="mt-1">Chain A confirms transfer completed</p></div>}>
              <div className="grid grid-cols-3 gap-4 cursor-help">
                <div className="flex justify-center">
                  <div className="bg-blue-500/20 border border-blue-500/50 rounded px-2 py-1 text-xs">
                    Confirm ✓
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </Tooltip>
          </div>
        </div>

        {/* Note */}
        <div className="text-xs text-gray-400 text-center mt-2 border-t border-gray-700 pt-2">
          Relayer = permissionless, anyone can run. Light clients verify proofs.
        </div>
      </div>
    </DiagramContainer>
  );
}

export function TendermintRoundDiagram() {
  const phases = [
    { name: 'PROPOSE', desc: 'Proposer broadcasts block', color: 'blue' },
    { name: 'PREVOTE', desc: 'Validators prevote (or nil). Wait 2/3+', color: 'purple' },
    { name: 'PRECOMMIT', desc: 'Precommit if 2/3+ prevoted same. Wait 2/3+', color: 'amber' },
    { name: 'COMMIT', desc: 'If 2/3+ precommitted → finalize', color: 'green' },
  ];

  return (
    <DiagramContainer title="Tendermint Consensus Round" color="purple">
      <div className="space-y-2">
        {phases.map((phase, i) => (
          <Tooltip key={phase.name} content={
            <div>
              <strong className={`text-${phase.color}-300`}>Phase {i + 1}: {phase.name}</strong>
              <p className="mt-2">{phase.desc}</p>
            </div>
          }>
            <div className={`bg-${phase.color}-500/20 border border-${phase.color}-500/50 rounded-lg p-3 cursor-help`}>
              <div className="flex items-center justify-between">
                <span className={`text-${phase.color}-300 font-bold text-sm`}>{i + 1}. {phase.name}</span>
                {i < phases.length - 1 && <Arrow direction="down" />}
              </div>
              <div className="text-xs text-gray-400 mt-1">{phase.desc}</div>
            </div>
          </Tooltip>
        ))}
        <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-2 text-center">
          <span className="text-gray-400 text-xs">Timeout between phases → ensures liveness</span>
        </div>
      </div>
    </DiagramContainer>
  );
}

export function InterchainSecurityDiagram() {
  return (
    <DiagramContainer title="Interchain Security (ICS)" color="blue">
      <div className="space-y-3">
        <Tooltip content={
          <div>
            <strong className="text-blue-300">Provider Chain</strong>
            <p className="mt-2">Cosmos Hub provides security to consumer chains via staked ATOM</p>
          </div>
        }>
          <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-3 cursor-help">
            <div className="text-blue-300 font-bold text-center">Provider: Cosmos Hub</div>
            <div className="text-xs text-gray-400 text-center mt-1">ATOM stakers validate multiple chains</div>
            <div className="text-xs text-rose-400 text-center mt-1">Slashing applies across chains</div>
          </div>
        </Tooltip>

        <div className="flex justify-center">
          <Arrow direction="down" />
        </div>

        <Tooltip content={
          <div>
            <strong className="text-green-300">Consumer Chains</strong>
            <p className="mt-2">New chains inherit security from provider instead of bootstrapping their own</p>
          </div>
        }>
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 cursor-help">
            <div className="text-green-300 font-bold text-center">Consumer Chains</div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="bg-green-900/30 rounded px-2 py-1 text-xs text-center">Neutron</div>
              <div className="bg-green-900/30 rounded px-2 py-1 text-xs text-center">Stride</div>
              <div className="bg-green-900/30 rounded px-2 py-1 text-xs text-center">...</div>
            </div>
            <div className="text-xs text-gray-400 text-center mt-2">
              Inherit security • Share validators • Pay fees to provider
            </div>
          </div>
        </Tooltip>
      </div>
    </DiagramContainer>
  );
}

export function ABCIDiagram() {
  const calls = [
    { name: 'BeginBlock', desc: 'Start of block processing' },
    { name: 'DeliverTx', desc: 'For each transaction in block' },
    { name: 'EndBlock', desc: 'End of block, validator updates' },
    { name: 'Commit', desc: 'Persist state, return app hash' },
  ];

  return (
    <DiagramContainer title="ABCI Interface" color="amber">
      <div className="flex items-start gap-6 justify-center">
        {/* Tendermint */}
        <Tooltip content={
          <div>
            <strong className="text-blue-300">Tendermint Core</strong>
            <p className="mt-2">Handles consensus, networking, block production</p>
            <p className="mt-1 text-xs text-gray-400">Written in Go, language-agnostic interface</p>
          </div>
        }>
          <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-3 cursor-help w-32 text-center">
            <div className="text-blue-300 font-bold text-sm">Tendermint</div>
            <div className="text-xs text-gray-400 mt-1">(Consensus)</div>
          </div>
        </Tooltip>

        {/* Bidirectional arrows */}
        <div className="flex flex-col gap-1 pt-2">
          {calls.map((call) => (
            <Tooltip key={call.name} content={<div><strong>{call.name}</strong><p className="mt-1">{call.desc}</p></div>}>
              <div className="flex items-center gap-1 cursor-help">
                <span className="text-amber-400 text-xs">◄</span>
                <div className="w-20 border-t border-dashed border-amber-400"></div>
                <span className="text-amber-400 text-xs">►</span>
                <span className="text-xs text-amber-300 ml-1">{call.name}</span>
              </div>
            </Tooltip>
          ))}
        </div>

        {/* Application */}
        <Tooltip content={
          <div>
            <strong className="text-green-300">Application</strong>
            <p className="mt-2">Your business logic (Go, Rust via CosmWasm, etc.)</p>
            <p className="mt-1 text-xs text-gray-400">ABCI allows any language</p>
          </div>
        }>
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 cursor-help w-32 text-center">
            <div className="text-green-300 font-bold text-sm">Application</div>
            <div className="text-xs text-gray-400 mt-1">(Business Logic)</div>
          </div>
        </Tooltip>
      </div>
    </DiagramContainer>
  );
}

export function LeaderScheduleDiagram() {
  const leaders = ['A', 'B', 'C', 'A'];

  return (
    <DiagramContainer title="PoH + Tower BFT" color="green">
      <div className="space-y-3">
        {/* Leader Schedule */}
        <Tooltip content={
          <div>
            <strong className="text-green-300">Leader Schedule</strong>
            <p className="mt-2">Deterministic rotation of block producers. Each leader gets 4 slots (~1.6 sec).</p>
          </div>
        }>
          <div className="cursor-help">
            <div className="text-xs text-gray-400 text-center mb-1">Leader Schedule</div>
            <div className="flex justify-center gap-1">
              {leaders.map((leader, i) => (
                <div key={i} className={`bg-green-500/20 border border-green-500/50 rounded px-4 py-2 text-center ${i === 0 ? 'bg-green-500/40' : ''}`}>
                  <div className="text-green-300 font-bold text-sm">Leader {leader}</div>
                  <div className="text-xs text-gray-400">4 slots</div>
                </div>
              ))}
            </div>
          </div>
        </Tooltip>

        <Arrow direction="down" className="mx-auto block" />

        {/* PoH Timestamps */}
        <Tooltip content={<div><strong>PoH Timestamps</strong><p className="mt-1">Leader produces blocks with cryptographic time proof</p></div>}>
          <div className="bg-amber-500/20 border border-amber-500/50 rounded-lg p-2 text-center cursor-help">
            <div className="text-amber-300 text-sm">Leader produces blocks with PoH timestamps</div>
          </div>
        </Tooltip>

        <Arrow direction="down" className="mx-auto block" />

        {/* Verification */}
        <Tooltip content={<div><strong>Verification</strong><p className="mt-1">Other validators verify PoH sequence and vote</p></div>}>
          <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-2 text-center cursor-help">
            <div className="text-blue-300 text-sm">Other validators verify PoH + vote</div>
          </div>
        </Tooltip>

        <Arrow direction="down" className="mx-auto block" />

        {/* Tower BFT */}
        <Tooltip content={
          <div>
            <strong className="text-purple-300">Tower BFT</strong>
            <p className="mt-2">Votes have increasing lockout times - exponential penalty for switching forks</p>
          </div>
        }>
          <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-2 cursor-help">
            <div className="text-purple-300 font-bold text-sm text-center">Tower BFT</div>
            <div className="text-xs text-gray-400 text-center">Votes have increasing lockout times</div>
            <div className="text-xs text-rose-400 text-center">(exponential penalty for switching)</div>
          </div>
        </Tooltip>
      </div>
    </DiagramContainer>
  );
}

export function SealevelParallelDiagram() {
  const transactions = [
    { id: 'Tx1', accounts: 'A, B', access: 'write A, read B', thread: 1, depends: 'Tx3' },
    { id: 'Tx2', accounts: 'C, D', access: 'write C, write D', thread: 2, depends: null },
    { id: 'Tx3', accounts: 'A, E', access: 'read A, write E', thread: 1, depends: null },
    { id: 'Tx4', accounts: 'F, G', access: 'write F, read G', thread: 3, depends: null },
  ];

  return (
    <DiagramContainer title="Sealevel Parallel Execution" color="purple">
      <div className="grid grid-cols-2 gap-4">
        {/* Transactions */}
        <div className="space-y-2">
          <div className="text-xs text-gray-400 text-center mb-1">Transactions in block</div>
          {transactions.map((tx) => (
            <Tooltip key={tx.id} content={
              <div>
                <strong>{tx.id}</strong>
                <p className="mt-1">Accounts: [{tx.accounts}]</p>
                <p>Access: {tx.access}</p>
              </div>
            }>
              <div className="bg-gray-700/50 border border-gray-600 rounded px-3 py-1 cursor-help flex justify-between">
                <span className="text-purple-300 font-bold text-xs">{tx.id}</span>
                <span className="text-xs text-gray-400">[{tx.accounts}]</span>
              </div>
            </Tooltip>
          ))}
        </div>

        {/* Parallel Execution */}
        <div className="space-y-2">
          <div className="text-xs text-gray-400 text-center mb-1">Parallel Execution</div>
          <Tooltip content={<div><strong>Thread 1</strong><p className="mt-1">Tx1 → Tx3 (both access A, must serialize)</p></div>}>
            <div className="bg-blue-500/20 border border-blue-500/50 rounded px-3 py-2 cursor-help">
              <div className="text-blue-300 text-xs font-bold">Thread 1</div>
              <div className="flex items-center gap-1 text-xs mt-1">
                <span className="bg-blue-900/50 px-2 py-0.5 rounded">Tx1</span>
                <Arrow direction="right" />
                <span className="bg-blue-900/50 px-2 py-0.5 rounded">Tx3</span>
              </div>
            </div>
          </Tooltip>
          <Tooltip content={<div><strong>Thread 2</strong><p className="mt-1">Tx2 runs independently (different accounts)</p></div>}>
            <div className="bg-green-500/20 border border-green-500/50 rounded px-3 py-2 cursor-help">
              <div className="text-green-300 text-xs font-bold">Thread 2</div>
              <div className="text-xs mt-1">
                <span className="bg-green-900/50 px-2 py-0.5 rounded">Tx2</span>
              </div>
            </div>
          </Tooltip>
          <Tooltip content={<div><strong>Thread 3</strong><p className="mt-1">Tx4 runs independently (different accounts)</p></div>}>
            <div className="bg-amber-500/20 border border-amber-500/50 rounded px-3 py-2 cursor-help">
              <div className="text-amber-300 text-xs font-bold">Thread 3</div>
              <div className="text-xs mt-1">
                <span className="bg-amber-900/50 px-2 py-0.5 rounded">Tx4</span>
              </div>
            </div>
          </Tooltip>
          <div className="text-xs text-gray-400 text-center mt-2">
            Total time ≈ max(Tx1+Tx3, Tx2, Tx4)
          </div>
        </div>
      </div>
    </DiagramContainer>
  );
}
