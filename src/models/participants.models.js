const {DataTypes}= require('sequelize')
const users= require('../models/users.models')
const conversations= require('../models/conversation.models')
const db= require('../utils/database')

const participants= db.define('participants',{
    id:{
        type:DataTypes.UUID,
        unique:true,
        primaryKey:true
        
    },
    userId:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:users,
            key:'id'
        }
    },
    conversationid:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:conversations,
            key:'id'
        },
    },
    isAdmin:{
        type:DataTypes.BOOLEAN,
    }
})

module.exports=participants;