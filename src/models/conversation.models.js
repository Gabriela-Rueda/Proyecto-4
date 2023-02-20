const {DataTypes}= require('sequelize')

const db= require('../utils/database')

const conversations= db.define('conversations',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        unique:true
    },
    profileImage:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    createdBy:{
        type:DataTypes.UUID,
        allowNull:false,
    },
    isGroup:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
})

module.exports= conversations;