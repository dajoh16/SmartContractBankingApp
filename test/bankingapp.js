const BankingApp = artifacts.require("BankingApp");

contract('BankingApp', (accounts) => {
    it('Should put 20000 in the origin account', async () => {
        const instance = await BankingApp.deployed();
        const balance = await instance.getBalance();
        assert.equal(balance.valueOf(), 20000, "20000 Wasn't in the first account")
    });
    it('Can deposit into account', async () => {
        const instance = await BankingApp.deployed();
        const balanceBefore = await instance.getBalance.call();
        const amount = 200
        const result = await instance.deposit(amount);
        const balanceAfter = await instance.getBalance.call();
        const difference = balanceAfter - balanceBefore
        assert.equal(difference.valueOf(), amount, "Deposit did not result in correctly depositing the amount");
    });
    it('Can withdraw from account', async () => {
        const instance = await BankingApp.deployed();
        const balanceBefore = await instance.getBalance.call();
        const amount = 200
        const result = await instance.withdraw(amount);
        const balanceAfter = await instance.getBalance.call();
        assert.equal((balanceAfter.toNumber() + amount), balanceBefore.toNumber(), "Withdraw did not result in correctly depositing the amount");
    });
})