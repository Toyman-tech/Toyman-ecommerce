const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); 
const { config } = require('process');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

if(process.env.NODE_ENV== 'production'){
    app.use(express.static(path.join(__dirname, 'toyman-clothing/build')))

    app.get('*', function(req, res){
        req.sendFile(path.join(__dirname, 'toyman-clothing/build', 'index.html'))
    });
}

app.listen(port, error =>  {
   if (error) throw error;
   console.log('Server running on port' + port)
});

app.post('/payment',  (req, res)=>{
 const body ={
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };
    
    Stripe.charges.create(body);
    res.status(200).json('payment sucessful');
})