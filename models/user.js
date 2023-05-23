module.exports = (sequelize, DataTypes) => {

    const trade = sequelize.define("user", {
        userid: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.FLOAT
        },
        shares: {
            type: DataTypes.JSON
        }
    
    })

    return trade

}