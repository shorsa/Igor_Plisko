import { FeatureModel } from "../feature.model";


export interface RequestCreateProjectEntityModel {
   ownerId: string;
   title: string;
   description: string;
   isOpen: boolean;
   estimateMin: number;
   estimateMax: number;
   features: FeatureModel[];

}

