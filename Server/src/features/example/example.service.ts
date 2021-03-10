//Helpers
//Models
import { RequestExampleModel } from "./models";
import { BaseResponseModel } from "../shared/models";
//Repositories
import * as exampleRepository from "./example.repository";
import { ExampleSchema } from "./schemas/exampleRequest.schema";
//Schemas

export async function exampleCreate(request: RequestExampleModel) {
    const validation: boolean = await ExampleSchema.isValid(request);

    if (!validation) {
        //Error
    }
    const response: BaseResponseModel = await exampleRepository.create(request.test)

    return response;
}

