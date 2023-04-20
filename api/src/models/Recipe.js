const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true,
      allowNull:false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.TEXT,
      isUrl:true,
      allowNull: false,
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore:{
      type: DataTypes.DECIMAL,
      validate:{min:0,max:100},
      allowNull: false,
    },
    steps:{
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    // readyInMinutes,servings,pricePerServing
    readyInMinutes:{
      type: DataTypes.INTEGER,
      allowNull:true,
    },
    servings:{
      type: DataTypes.INTEGER,
      allowNull:true,
    },
    pricePerServing:{
      type: DataTypes.DECIMAL,
      allowNull:true,
    },
    created:{
      type: DataTypes.BOOLEAN,
      defaultValue:true
    }
  },{timestamps: false});
};
