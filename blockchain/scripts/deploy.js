const hre = require('hardhat')
const USDC_ADDRESS_Sepolia = "0x2f3A40A3db8a7e3D09B0adfEfbCe4f6F81927557";
const USDC_ADDRESS_POLYGON_ZKEVM = "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035";

async function main() {
  const SafeTransact = await hre.ethers.getContractFactory("SafeTransact");
  // const safetransact = await SafeTransact.deploy(USDC_ADDRESS_Sepolia);
  const safetransact = await SafeTransact.deploy(USDC_ADDRESS_POLYGON_ZKEVM);

  await safetransact.deployed();

  console.log(`SafeTransact contract deployed to ${safetransact.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
