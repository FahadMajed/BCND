const StartNotary = artifacts.require("./StarNotary.sol");


module.exports = function(deployer) {
  deployer.deploy(StartNotary);
};
