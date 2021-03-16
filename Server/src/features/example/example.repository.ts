//Vendors
import httpStatus from "http-status";
import { BaseResponseModel } from "../shared/models";

//Models

//Entities
import ExampleEntityModel from "./entities/exampleSchema.entity";
import { ResponseExampleModel } from "./models";


export async function findByTestCount(test: string): Promise<number> {
    const testCount: number = await ExampleEntityModel.countDocuments({ test });
    return testCount;
}

export async function create(test: string): Promise<any> {
    try {
        const testCreated = await ExampleEntityModel.create({ test });
        return testCreated;
    } catch (error) {
        console.log("Error", error)
        throw (error)
    }

    // if (!testCreated) {
    //     throw { statusCode: httpStatus.BAD_REQUEST, message: "Test not save" };
    // }

    // const responseModel: ResponseExampleModel = {
    //     ok: true,
    //     test: testCreated.test,
    //     _id: testCreated._id
    // }

    // return responseModel;

}
