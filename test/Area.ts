import { expect } from "chai";
import hre from "hardhat";

describe("Object area", function () {
  it("should equal 2", async function () {
    const areaDeploy = await hre.ethers.deployContract("Calculator");
    expect(await areaDeploy.calculateTriangleArea(4, 3)).to.equal(6);
  });
  it("should equal 12", async function () {
    const areaDeploy = await hre.ethers.deployContract("Calculator");
    expect(await areaDeploy.calculateRectangleArea(4, 3)).to.equal(12);
  });
  it("should equal 16", async function () {
    const areaDeploy = await hre.ethers.deployContract("Calculator");
    expect(await areaDeploy.calculateSquareArea(4)).to.equal(16);
  });
});