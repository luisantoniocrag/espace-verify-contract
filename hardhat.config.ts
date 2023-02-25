import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    confluxEspaceTestnet: {
      url: "https://evmtestnet.confluxrpc.com",
      accounts: ["<Your_Private_key>"],
    }
  }
};

export default config;
