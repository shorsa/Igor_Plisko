import { FeatureModel } from "./index";
export interface ProjectEntityModel {
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



