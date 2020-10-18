const Koa = require('koa');
const Router = require ('@koa/router');
const cors = require ('@koa/cors');//dependancy that allows you to query from a different URL from the front-end
const ether = require ('ethers');
const PaymentProcessor = require ('../build/contracts/PaymentProcessor.json');
const {Payment} = require ('./db.js');


const app = new Koa();
const router = new Router();
router.get ('/api/getPaymentId/:itemId', async ctx => 
{
    ctx.body = 'hello world';
}); //generates a payment ID when a customer clicks purchase

app
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods());

//start the server

app.listen(4000, () => 
{
    console.log('Server running on port 4000');

});