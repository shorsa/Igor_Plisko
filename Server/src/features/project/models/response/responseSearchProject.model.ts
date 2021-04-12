export interface ResponseSearchProjectsModel {
   items: ResponseSearchProjectsItemModel[];
}

export interface ResponseSearchProjectsItemModel {
   _id: string;
   ownerId: string;
   title: string;
   description: string;
   creationDate: Date;
   editDate?: Date;
   isOpen: boolean;
   estimateMin: number;
   estimateMax: number;
}