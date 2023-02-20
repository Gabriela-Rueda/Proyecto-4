const {DataTypes}= require('sequelize')
const participants= require('../models/participants.models')

const db= require('../utils/database')

const messages= db.define('messages',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        unique:true
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    participantsId:{
        type:DataTypes.UUID,
        references:{
            model:participants,
            key:'id'
        }
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})

module.exports= messages;