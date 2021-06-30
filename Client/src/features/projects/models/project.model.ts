import { FeatureModel } from "./feature.model";
export interface ProjectModel {
   _id: string;
   ownerId: string;
   title: string;
   description: string;
   creationDate: Date;
   editDate?: Date;
   isOpen: boolean;
   estimateMin: number;
   estimateMax: number;
   features: FeatureModel[];

}



