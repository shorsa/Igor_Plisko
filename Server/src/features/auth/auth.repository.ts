import UserSchemaEntityModel from "./entities/user.entity";
import { Role } from "./enums";
import { RequestCreateUserModel, UserEntityModel, UserModel } from "./models";


export async function findByEmailCount(requestEmail: string): Promise<number> {
    const testCount: number = await UserSchemaEntityModel.countDocuments({ email: requestEmail });
    return testCount;
}
//!Create User
export async function create(user: RequestCreateUserModel): Promise<UserEntityModel> {
    try {
        const model: UserEntityModel = {
            ...user,
            role: Role.User,
            createdAt: new Date()
        }

        const testCreated: UserModel = await UserSchemaEntityModel.create(model);
        return testCreated;
    } catch (error) {
        console.log("Error", error)
        throw (error)
    }
}


//!Login user 
export async function findUser(email: string) {
    const getUser = await UserSchemaEntityModel.findOne({ email: email });
    return getUser

}

