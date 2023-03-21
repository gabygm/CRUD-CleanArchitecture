import { User } from "../models/user"

export const userToModel = (user) =>{
    const {
        avatar, 
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name
    } = user
    return new User({
        avatar, 
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name

    })

}