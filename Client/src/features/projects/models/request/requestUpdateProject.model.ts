import { FeatureModel } from "../feature.model";
export interface RequestUpdateProjectModel {
   _id: string;
   ownerId?: string;
   title: string;
   description: string;
   isOpen: boolean;
   estimateMin: number;
   estimateMax: number;
   features?: FeatureModel[];
};



