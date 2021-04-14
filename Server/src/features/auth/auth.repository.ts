import UserSchemaEntityModel from "./entities/user.entity";
import { UserModel } from "./models";
import httpStatus from "http-status";
import { ErrorResponse } from "../shared/helper/appError.helper";


export async function findCountByEmailRegister(requestEmail: string): Promise<number> {
    try {
        const userCount: number = await UserSchemaEntityModel.countDocuments({ email: requestEmail });
        return userCount;
    } catch (error) {
        throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify(error))
    }
}

export async function create(user: UserModel): Promise<UserModel> {
    try {
        const userCreated: UserModel = await UserSchemaEntityModel.create(user);
        return userCreated;
    } catch (error) {
        JSON.stringify(error)
        throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify(error))
    }
}

export async function findUserByEmailLogin(email: string): Promise<UserModel | null> {
    try {
        const getUser: UserModel | null = await UserSchemaEntityModel.findOne({ email: email });
        return getUser;
    } catch (error) {
        JSON.stringify(error)
        throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify(error))
    }
}

