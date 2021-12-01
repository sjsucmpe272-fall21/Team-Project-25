var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC =
  "0x510c4aa78a41b3e7295c59c274864a5bc216ab0537731e393dbd0940a8656541";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          MNEMONIC,
          "https://ropsten.infura.io/v3/ebd7954686ad408eab72c329eeacd8ae"
        );
      },
      network_id: 3,
      gas: 4000000, //make sure this gas allocation isn't over 4M, which is the max
    },
  },
};
