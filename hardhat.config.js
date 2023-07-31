require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  paths: {
    artifacts: "./src/artifacts",
    sources: "./src/contracts",
    cache: "./src/cache"
  },
  defaultNetwork: "localhost",
  networks: {
    localhost: {},
    forkingMainnet: {
      url: 'http://127.0.0.1:8545',
      forking: {
        url: process.env.FORKED_MAINNET_RPC,
        blockNumber: 15227236
      }
    }
  }
};
