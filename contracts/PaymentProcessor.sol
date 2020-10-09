pragma solidity ^0.6.2;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract PaymentProcessor 
{
    address public admin; //address of merchant
    IERC20 public dai; //variable that's a pointer to the DAI smart contract

    event PaymentDone( //event to notify backend of transaction
    
        address payer,
        uint amount,
        uint paymentId,
        uint date //timestamp, seconds from 1st Jan 1970
    );
    constructor (address adminAddress, address daiAddress) public 
    {
        admin = adminAddress;
        dai = IERC20 (daiAddress);
    }

    function pay(uint amount, uint paymentId) external 
    {
        dai.transferFrom (msg.sender, admin, amount);//transfer dai to SC
        emit PaymentDone (msg.sender, amount, paymentId, block.timestamp);
    }  
}




