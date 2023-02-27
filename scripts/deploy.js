const hre = require("hardhat");

async function main() {
  const PaappiToken = await hre.ethers.getContractFactory("PaappiToken");
  const paappiToken = await PaappiToken.deploy(100000000, 50);

  await paappiToken.deployed();

  console.log("Paappi Token deployed: ", paappiToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
