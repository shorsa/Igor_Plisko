import { BaseResponseModel } from "../../../shared/models";

export interface ResponseExampleModel extends BaseResponseModel {
    _id: string;
    test: string;
}