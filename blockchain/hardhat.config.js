require("@nomicfoundation/hardhat-toolbox");

// Will be deleted from Infura post-hackathon
const apiPublicKeyEthereum = "ea1e0f21469f412995bdaaa76ac1c266"

// Throw-and-use: Will never contain mainnet funds
const privateKey = "a4e5e5862d08f320d659fad945d86d8fc32ac727416d7d3436567fd378723718"

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      forking: {
        url: `https://optimism-mainnet.infura.io/v3/${apiPublicKeyEthereum}`,
      },
      chainId: 10
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/${apiPublicKeyEthereum}`,
      accounts: [privateKey]
    },
    polygon_zkEVM: {
      url: `https://rpc.cardona.zkevm-rpc.com`,
      accounts: [privateKey]
    }
  }
};
