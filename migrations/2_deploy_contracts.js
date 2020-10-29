const BankingApp = artifacts.require("BankingApp");

module.exports = function (deployer) {
    deployer.deploy(BankingApp);
};
