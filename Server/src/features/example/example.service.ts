//Helpers
//Models
import { RequestExampleModel } from "./models";
import { BaseResponseModel } from "../shared/models";
//Repositories
import * as exampleRepository from "./example.repository";
import { ExampleSchema } from "./schemas/exampleRequest.schema";

export async function exampleCreate(request: RequestExampleModel) {
    console.log(request);

    const validation: boolean = await ExampleSchema.isValid(request);

    if (!validation) {
        //Error
        throw ("Error")

    }
    const count = await exampleRepository.findByTestCount(request.test)
    console.log(count);

    const response: BaseResponseModel = await exampleRepository.create(request.test)

    return response;
}

