require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks:{
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/EtKFrlrmtKavsyt07IuN3ZQfi_tBesc2",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
}