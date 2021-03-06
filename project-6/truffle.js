const HDWalletProvider = require("truffle-hdwallet-provider")
const infuraKey = "79e60c9ff72949feb3c766a362509234"

const fs = require("fs")
const mnemonic = fs.readFileSync(".secret").toString().trim()

module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4, // rinkeby's id
      gas: 4500000, // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
  },
  compilers: {
    solc: {
      version: "0.4.24", // ^0.4.24 is the version of my Solidity contracts and my local compiler
    },
  },
}
