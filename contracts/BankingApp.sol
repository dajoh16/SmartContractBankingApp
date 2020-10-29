// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.1;

contract BankingApp {
    mapping(address => uint256) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() public {
        balances[tx.origin] = 20000;
    }

    function sendCoin(address receiver, uint256 amount)
        public
        returns (bool sufficient)
    {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Transfer(msg.sender, receiver, amount);
        return true;
    }

    function deposit(uint256 amount) public returns (bool success) {
        if (amount < 0) return false;
        uint256 balance = balances[msg.sender];
        uint256 newBalance = balance + amount;
        balances[msg.sender] = newBalance;
        return true;
    }

    function withdraw(uint256 amount) public returns (uint256 withdrawed) {
        if (amount > balances[msg.sender]) return 0;
        balances[msg.sender] -= amount;
        return amount;
    }

    function getBalance(address addr) public view returns (uint256) {
        return balances[addr];
    }

    function getBalance() public view returns (uint256) {
        return getBalance(msg.sender);
    }
}
