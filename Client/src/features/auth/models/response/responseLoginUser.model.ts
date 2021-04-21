import { BaseResponseModel } from "../../../../shared/models";


export interface ResponseLoginUserModel extends BaseResponseModel {
   token: string;
}
