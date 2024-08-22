import { ethers } from 'hardhat';

async function main() {

    const calculator = await ethers.deployContract('Calculator');

    await calculator.waitForDeployment();

    console.log('Calculator Contract Deployed at ' + calculator.target);
}

// this pattern is recommended to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});