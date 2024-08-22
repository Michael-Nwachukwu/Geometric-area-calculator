import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    'sepolia': {
      url: 'https://eth-sepolia.g.alchemy.com/v2/5O6POr5-pOcMrepBJuGTKocNI4dysw_A',
      accounts: process.env.WALLET_KEY ? [process.env.WALLET_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
  sourcify: {
    enabled: false
  },
};

export default config;