const users = require("../models/users.models");
const uuid= require('uuid')

const findAllUsers= async ()=>{
 const data = await users.findAll()
 return data
}

const findUserById = async (id)=>{
const data = await users.findOne({
    where:{
        id:id
    }
})
return data
}

const createNewUser = async (userObj)=>{
    
    const newUser={
        id:uuid.v4(),
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: userObj.password,
        profileImage: userObj.profileImage,
        isActive:userObj.isActive,
        phone:userObj.phone
    }

    const data= await users.create(newUser)
    return data
}

const updateUser = async (id, userObj) => {
    const data = await users.update(userObj,{
        where: {
            id: id
        }
    })
    return data[0]
}

const deleteUser = async (id) => {
    const data = await users.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports={
    findAllUsers,
    findUserById,
    createNewUser,
    updateUser,
    deleteUser
}