//Helpers
//Models
import { RequestExampleModel } from "./models";
import { BaseResponseModel } from "../shared/models";
//Repositories
import * as exampleRepository from "./example.repository";
import { ExampleSchema } from "./schemas/exampleRequest.schema";
//Schemas
// interface UserMan {
//     name: string;
//     lastName: string;
//     age: number;
//     isMale: boolean
//     wife: UserFemale;
// }

// interface UserFemale {
//     name: string;
//     age: number;
// }
export async function exampleCreate(request: RequestExampleModel) {
    console.log(request);
    
    const validation: boolean = await ExampleSchema.isValid(request);

    if (!validation) {
        //Error
        throw ("errror")
        
    }
    const response: BaseResponseModel = await exampleRepository.create(request.test)

    return response;
}

