const {DataTypes} = require ('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Diet',{
        name:{
            type: DataTypes.STRING,
            unique: true,
            leng: [1, 50],
            allowNull: false,
        },
    },{
        timestamps: false,
    })
}