# NodeJs_Sequelize_TradeApplication

It is the trade application. MySQL Database and NodeJs have been used for this project. ORM tool: Sequelize. And also, Postman outputs are provided.

#Our User model:        
        
        userid: {
            type: DataTypes.TEXT(random cypto)
        },
        price: {
            type: DataTypes.FLOAT
        },
        shares: {
            type: DataTypes.JSON
        }
        
#Our Trade model:
        
        tradeid: {
            type: DataTypes.TEXT(random cypto)
        },
        tradename: {
            type: DataTypes.TEXT
        },
        rate: {
            type: DataTypes.FLOAT
        }
        
#User CRUD Operations(Postman Outputs)

<img src = "https://github.com/eraydura/NodeJs_Sequelize_TradeApplication/blob/main/PostManOutputs/CreateUser.png?raw=true" width ="450" /> <img src = "https://github.com/eraydura/NodeJs_Sequelize_TradeApplication/blob/main/PostManOutputs/GetFirstUser.png?raw=true" width ="450" />

<img src = "https://github.com/eraydura/NodeJs_Sequelize_TradeApplication/blob/main/PostManOutputs/UserUpdate.png?raw=true" width ="450" /> <img src = "https://github.com/eraydura/NodeJs_Sequelize_TradeApplication/blob/main/PostManOutputs/DeleteUser.png?raw=true" width ="450" />

#Trade CRUD Operations(Postman Outputs)

<img src = "https://github.com/eraydura/NodeJs_Sequelize_TradeApplication/blob/main/PostManOutputs/CreateShare.png?raw=true" width ="450" /> <img src = "https://github.com/eraydura/NodeJs_Sequelize_TradeApplication/blob/main/PostManOutputs/ShowAllShare.png?raw=true" width ="450" /><img src = "https://github.com/eraydura/NodeJs_Sequelize_TradeApplication/blob/main/PostManOutputs/UpdateShare.png?raw=true" width ="450" /> 

#Buy CRUD Operations(Postman Outputs)

<img src = "https://github.com/eraydura/NodeJs_Sequelize_TradeApplication/blob/main/PostManOutputs/BuyOperation.png?raw=true" width ="450" /> <img src = "https://github.com/eraydura/NodeJs_Sequelize_TradeApplication/blob/main/PostManOutputs/AfterBuyOperation.png?raw=true" width ="450" />

#Sell CRUD Operations(Postman Outputs)

<img src = "https://github.com/eraydura/NodeJs_Sequelize_TradeApplication/blob/main/PostManOutputs/SellOperation.png?raw=true" width ="450" /> <img src = "https://github.com/eraydura/NodeJs_Sequelize_TradeApplication/blob/main/PostManOutputs/AfterSellingOperation.png?raw=true" width ="450" /> 


