//CRUD for user
var db=require('../models');
const crypto = require('crypto');

const Trades= db.trades;
const Users= db.users;

//User Create Operation
var addUser= async (req,resp)=>{
    let data = {
        userid: crypto.randomBytes(20).toString('hex'),
        price:  req.params.price,
        shares:  '',
    }

    await Users.create(data)

    let response={
        data:'user saved and ' +req.params['price'].toString()+'$ loaded in the account.'
    }

    resp.status(200).json(response);
}

//User Info Operation
var getUser = async (req, res) => {
    let user = await Users.findOne({ where: { userid: req.params.id }})
    let response={
        data: "User id: "+ user.userid + " Current Price: " + user.price +"$ Current shares: "+ user.shares
    }

    res.status(200).json(response)

}

//Buy Operation
var buy = async (req, res) => {
    let user = await Users.findOne({ where: { userid: req.params.id }})
    let trade = await Trades.findOne({ where: { tradeid: req.params.tradeid }})
    const price= user.price-(req.params.amount*trade.rate);

    if(price>0){
        var obj = JSON.parse(user.shares);
        var found=false

        for (var i = 0; i < obj.length; i++){
            if (obj[i].sharename == trade.tradename ){
                found=true;
                obj[i]={"sharename":trade.tradename,"amount":req.params.amount};
            }
        }
        if(found==false){
            obj.push({"sharename":trade.tradename,"amount":req.params.amount});
        }
        await Users.update({price:price,shares:obj}, { where: { userid: req.params.id }})

        let response={
            data: req.params.amount+" amount "+trade.tradename+' brought'
        }
        res.status(200).send(response)
    }else{
        let response={
            data: "You could not buy this share."
        }
        res.status(200).send(response)
    }
    
}

//Sell Operation
var sell = async (req, res) => {
    let user = await Users.findOne({ where: { userid: req.params.id }})
    let trade = await Trades.findOne({ where: { tradeid: req.params.tradeid }})

    var obj = JSON.parse(user.shares);

    for (var i = 0; i < obj.length; i++){
        if (obj[i].sharename == trade.tradename ){
            //found
            if(obj[i].amount>=req.params.amount){
                obj[i].amount=obj[i].amount-req.params.amount
                const price= user.price+(req.params.amount*trade.rate);
                await Users.update({price:price,shares:obj}, { where: { userid: req.params.id }})
                let response={
                    data: req.params.amount+" amount "+trade.tradename+' sold'
                }
                res.status(200).send(response)
            }else{
                let response={
                    data: 'No enough balance'
                }
                res.status(200).send(response)
            }

        }
    }
    
}

//User Deletion Operation
var deleteUser = async (req, res) => {
    await Users.destroy({ where: { userid: req.params.id }})
    let response={
        data:'User Deleted.'
    }
    res.status(200).send(response)
}

//Update Users
var updateUser = async (req, res) => {

    await Users.update({price:req.params.price}, { where: { userid: req.params.id }})
    let response={
        data: req.params.id +' updated' 
    }
    res.status(200).send(response)
    
}

//Show All Trades
var showallshares = async (req, res) => {

    const trades =  await Trades.findAll()
    res.status(200).send(trades)
    
}

//Create Trades
var createshare = async (req, res) => {

    let data = {
        tradeid: crypto.randomBytes(20).toString('hex'),
        tradename:  req.params.name,
        rate:  req.params.rate,
    }

    await Trades.create(data)

    let response={
        data: req.params.name +' share is added the begining rate is' +req.params['rate'].toString()
    }

    res.status(200).json(response);
    
}

//Update Trades
var updateshare = async (req, res) => {

    await Trades.update({tradename:req.params.name,rate:req.params.rate}, { where: { tradeid: req.params.id }})
    let response={
        data: req.params.name +' updated ' 
    }
    res.status(200).send(response)
    
}


module.exports={
    addUser,
    buy,
    sell,
    getUser,
    deleteUser,
    showallshares,
    updateshare,
    createshare,
    updateUser,
}