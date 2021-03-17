import UserEntityModel from "./entities/user.entity"
import { Role } from "./enums";
import { RequestUserModel, ResponseUserModel, User } from "./models";


export async function findByEmailCount(email: string): Promise<number> {
    const testCount: number = await UserEntityModel.countDocuments({ email: email });
    return testCount;
}
//!Create User
export async function create(user: RequestUserModel): Promise<ResponseUserModel> {
    try {
        const model: User = {
            ...user,
            role: Role.User,
            createdAt: new Date()
        }

        const testCreated: ResponseUserModel = await UserEntityModel.create(model);
        return testCreated;
    } catch (error) {
        console.log("Error", error)
        throw (error)
    }
}


//! Delete user
// export async function deleteUser(id: string) {

// }