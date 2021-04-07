import { Role } from "./enums";
import UserSchemaEntityModel from "./entities/user.entity";
import { RequestCreateUserModel, UserEntityModel, UserModel } from "./models";


export async function findByEmailCount(requestEmail: string): Promise<number> {
    const testCount: number = await UserSchemaEntityModel.countDocuments({ email: requestEmail });
    return testCount;
}

export async function create(user: UserModel): Promise<UserModel> {
    try {
        const testCreated: UserModel = await UserSchemaEntityModel.create(user);
        return testCreated;
    } catch (error) {
        console.log("Error", error)
        throw (error)
    }
}

export async function findUser(email: string): Promise<UserModel | null> {
    const getUser: UserModel | null = await UserSchemaEntityModel.findOne({ email: email });
    return getUser;
}

