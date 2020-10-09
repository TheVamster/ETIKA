const mongoose = require('mongoose');

mongoose.connect
(
    'your connection string',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

//collections are containers for objects that are similar

const paymentSchema = new mongoose.Schema
(
    {
        id: String,
        itemId: String,
        pain: Boolean
    }
);

const Payment = mongoose.model
(
    'Payment', paymentSchema
);

module.exports = 
{
    Payment
};