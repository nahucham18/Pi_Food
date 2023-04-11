const {DataTypes} = reuqire ('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Diet',{
        name:{
            type: DataTypes.INTEGER,
            unique: true,
            leng: [1, 50],
            allowNull: false,
        },
    },{
        timestamps: false,
    })
}