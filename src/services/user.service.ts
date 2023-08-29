import { UserDto } from "../dto/user.dto";
import { User } from "../entities/User";



export const getAllUsersService = () => {
    return User.find({
        select: {
            fullname: true,
            email: true
        },
        relations: {
          role:true
        }
    });
}

export const getOneUserByIdService = () => {

    const user: UserDto = {
        fullname: "Jesus",
        email: "albertchalare@gmail.com",
        role: 1
    }

    return user;
}

export const updateOneUserService = () => {

    const user: UserDto = {
        fullname: "Jesus",
        email: "albertchalare@gmail.com",
        role: 1
    }

    return user;
}

export const createNewUserService = () => {

    const user: UserDto = {
        fullname: "Jesus",
        email: "albertchalare@gmail.com",
        role: 1
    }

    return user;
}