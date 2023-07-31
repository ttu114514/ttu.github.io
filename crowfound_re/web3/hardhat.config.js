/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'sepolia',
    networks: {
      sepolia: {
        url: 'https://eth-sepolia.g.alchemy.com/v2/K1uXXRPle_FVW8MYg3ci-yn-3wpFxnRp',
        chainId: 11155111,
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};