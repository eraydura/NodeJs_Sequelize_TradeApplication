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

app.get('/useradd/:price', Ctrl.addUser);
app.get('/buy/:id/:tradeid/:amount', Ctrl.buy);
app.get('/sell/:id/:tradeid/:amount', Ctrl.sell);
app.get('/getuser/:id', Ctrl.getUser);
app.get('/delete/:id', Ctrl.deleteUser);
app.get('/showalltrades', Ctrl.showalltrades);

//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})