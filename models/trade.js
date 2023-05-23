module.exports = (sequelize, DataTypes) => {

    const trade = sequelize.define("trade", {
        tradeid: {
            type: DataTypes.INTEGER
        },
        tradename: {
            type: DataTypes.TEXT
        },
        rate: {
            type: DataTypes.FLOAT
        }
    
    })

    return trade

}