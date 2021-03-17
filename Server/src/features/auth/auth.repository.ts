import UserEntityModel from "./entities/user.entity"
import { Gender, Role } from "./enums";
import { RequestUserModel, ResponseUserModel, User } from "./models";


export async function findByEmailCount(requestEmail: string): Promise<number> {
    const testCount: number = await UserEntityModel.countDocuments({ email: requestEmail });
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
//! ищем по гендеру
//? спросить у Влада
export async function findOfGender(gender: Gender) {
    const findOfGender = await UserEntityModel.find({ gender: gender })
    return findOfGender                                                       //?
}

// Delete user
// export async function deleteUser(id: string) {

// }