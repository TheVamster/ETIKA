const Dai = artifacts.require('Dai.sol');
const PaymentProcessor = artifacts.require('PaymentProcessor.sol');

module.exports = async function (deployer, network, addresses) //async because we use weight keyword of JS
{
    const [admin, payer, _] = addresses;

    if(network === 'develop')
    {
        await deployer.deploy(Dai); //sends the transaction
        const dai = await Dai.deployed(); //waits for the transaction
        await dai.faucet (payer, web3.utils.toWei ('10000'));

        await deployer.deploy (PaymentProcessor, admin, dai.address);
    }
    else
    {
        const ADMIN_ADDRESS = '';
        const DAI_ADDRESS = '';
        await deployer.deploy[PaymentProcessor, ADMIN_ADDRESS, DAI_ADDRESS];
    }
    
};
