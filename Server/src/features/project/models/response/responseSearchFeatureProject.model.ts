import { BaseResponseModel } from "../../../shared/models";
import { FeatureModel } from "../feature.model";
export interface ResponseSearchFeatureProjectModel extends BaseResponseModel {
   _id: string;
   title: string;
   features: FeatureModel[];

}





