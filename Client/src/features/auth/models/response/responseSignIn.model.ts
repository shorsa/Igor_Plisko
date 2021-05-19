import { BaseResponseModel } from "../../../../shared/models";


export interface ResponseSignInModel extends BaseResponseModel {
   token: string;
}
