import { defineChain } from 'thirdweb';

export default defineChain({
  id: 31337,
  name: 'Anvil',
  rpc: 'https://rpc.ankr.com/eth',
  testnet: true,
  nativeCurrency: {
    name: 'Anvil Ether',
    symbol: 'ETH',
    decimals: 18,
  },
});
