const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,//Id unico de 32digitos para diferenciar de la API externa
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height_max:{
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    height_min:{
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    weight_max:{
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    weight_min:{
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    life_span:{
      type: DataTypes.STRING,
    },
    image:{
      type: DataTypes.TEXT, //más caracteres
      allowNull: true,
    },
    createdInDB: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  },{
    timestamps: false
  });
};
