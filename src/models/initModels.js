const participants= require('../models/participants.models')
const users= require('../models/users.models')
const conversations= require('../models/conversation.models')
const messages= require('../models/message.models')

const initModels= () =>{

    users.hasMany(participants);
    participants.belongsTo(users);
    
    conversations.hasMany(participants);
    participants.belongsTo(conversations);

    participants.hasMany(messages);
    messages.belongsTo(participants);  

}

module.exports=initModels;