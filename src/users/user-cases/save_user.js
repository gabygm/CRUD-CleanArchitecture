import { userToModel } from "../mappers/localhost-user.mapper"
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper"
import { User } from "../models/user"


export const saveUser = async(userLike)=> {
    
    const user =  new User(userLike)
    const userToSave = userModelToLocalhost(user)
    if(!user.firstName || !user.lastName)
        throw 'First & last name are required'


    if(user.id) {
        return
    }
    
    const updateUser = await createUser(userToSave)
    return updateUser
    
}

const createUser = async(user) => {
    const url = `${ import.meta.env.VITE_BASE_URL}/users`
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const newUser = await res.json()
    return newUser
}