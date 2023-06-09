const express = require('express')
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// routers
const Ctrl=require('./controllers/tradeController.js')

app.get("/",(res,resp)=>{
    resp.send("Home Page");
});

//User Operations
app.get('/useradd/:price', Ctrl.addUser);
app.get('/getuser/:id', Ctrl.getUser);
app.get('/delete/:id', Ctrl.deleteUser);
app.get('/userupdate/:id/:price', Ctrl.updateUser);

//Buy & Sell Operations
app.get('/buy/:id/:tradeid/:amount', Ctrl.buy);
app.get('/sell/:id/:tradeid/:amount', Ctrl.sell);

//Share Operations
app.get('/showallshares', Ctrl.showallshares);
app.get('/createshare/:name/:rate', Ctrl.createshare);
app.get('/updateshare/:id/:name/:rate', Ctrl.updateshare);

//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})