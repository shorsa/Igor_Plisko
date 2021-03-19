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
    try {
        const findOfGender = await UserEntityModel.find({ gender: gender })
        return findOfGender

    } catch (error) {
        console.log("Error", error)
        throw (error)
    }
    //?
}





// // //!Delete user
export async function deleteUserRepo(id: string) {                                              //?Promise<void>
    try {
        console.log("deleteUserRepo", id);

        const repositoryUserDelete = await UserEntityModel.deleteOne({ _id: id });
        return repositoryUserDelete;

    } catch (error) {
        console.log("Error", error)
        throw (error)
    }
}