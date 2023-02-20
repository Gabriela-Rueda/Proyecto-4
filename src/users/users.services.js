const usersControllers= require('../users/users.controllers')
const responses= require('../utils/handleResponses')

const getAllUsers = (req, res)=>{
    usersControllers.findAllUsers()

    .then(data =>{
        responses.success({
            res,
            data,
            status:200,
            message:'All Users profile'
        })
    })
    .catch(error =>{
        responses.error({
            res,
            status:400,
            data:error,
            message:'Error ocurred while trying to get the users'
        })
    })
}

const getUserById = (req,res)=>{
    const id= req.params.id

    usersControllers.findUserById(id)

    .then(data =>{
        if(data){
            responses.success({
                res,
                data,
                status:200,
                message: `Profile user with id ${id}`
            })
        }else{
            responses.error({
                res,
                status:404,
                message:'Incorrect id or user doesnt exist, try again'
            })
        }
    })

    .catch(error =>{
        responses.error({
            res,
            status:400,
            data:error,
            message:'Error ocurred while trying to get the user'
        })
    })
}

const postNewUser =(req,res)=>{
    const userObj= req.body

    usersControllers.createNewUser(userObj)

    .then(data =>{
        responses.success({
            res,
            data,
            status:201,
            message:'User Created Successfully'
        })
    })
    .catch(error =>{
        responses.error({
            res,
            status:400,
            data:error,
            message:'Something bad happen trying to create a new user'
        })
    })
    
}

const patchUser = (req,res)=>{
    const userObj= req.body
    const id= req.params.id

    usersControllers.updateUser(id,userObj)

    .then(data =>{
        if(data){
            responses.success({
                res,
                data,
                status:200,
                message: `user with id ${id} updated successfully `
            })
        }else{
            responses.error({
                res,
                status:404,
                message:'Incorrect id or user doesnt exist, try again',
                fields:{
                    firstName: 'String',
                    lastName: 'string',
                    email: 'example123@gmail.com',
                    password: 'string',
                    profileImage: 'url/image.png',
                    phone:'+1 7677 6543 7653'
                }

            })
        }
    })

    .catch(error =>{
        responses.error({
            res,
            status:400,
            data:error,
            message:'Error ocurred while trying to update the user'
        })
    })
    
}


const deleteUser= (req,res)=>{
    const id= req.params.id

    usersControllers.deleteUser(id)
    
    .then(data =>{
        if(data){
            responses.success({
                res,
                data,
                status:200,
                message: `user with id ${id} deleted successfully`
            })
        }else{
            responses.error({
                res,
                status:404,
                message:'Incorrect id or user doesnt exist, try again'
            })
        }
    })

    .catch(error =>{
        responses.error({
            res,
            status:400,
            data:error,
            message:'Error ocurred while trying to delete the user'
        })
    })
}

module.exports={
    getAllUsers,
    getUserById,
    postNewUser,
    patchUser,
    deleteUser   
}