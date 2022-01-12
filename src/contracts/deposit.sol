pragma solidity ^0.5.0;

contract deposit {
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

event Deposit( 
    address from,
    uint256 amount,
    string message
);

function newDeposit(string memory note) public payable{
    (bool success,) = owner.call{value: msg.value}("");
    require(success, "Failed to Deposit Assets");
    emit Deposit(
        msg.sender,
        msg.value,
        note
    );

 }

}
