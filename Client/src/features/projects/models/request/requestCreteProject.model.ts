import { FeatureModel } from "../feature.model";
export interface RequestCreateProjectModel {

   ownerId?: string;
   title: string;
   description: string;
   isOpen: boolean;
   estimateMin: number;
   estimateMax: number;
   features?: FeatureModel[];
};



