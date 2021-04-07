import { boolean, number, object, string, array } from "yup";
import { FeatureModel, RequestCreateProjectModel } from "../models";

export const projectCreateSchema = object<RequestCreateProjectModel>().shape(
   {
      ownerId: string().required(),
      title: string().required('Enter your title'),
      description: string().required('Write your description'),
      isOpen: boolean().required('Write your description'),
      estimateMin: number().required(),
      estimateMax: number().required(),
      features: array().of(
         object().shape<FeatureModel>({
            level: string().required(),
            title: string().required(),
            description: string().required(),
            isRequired: boolean().required(),
            estimateMin: number().required(),
            estimateMax: number().required()
         })).required()

   }
);
//?Array.of() создаёт новый экземпляр массива Array из произвольного числа аргументов, вне зависимости от числа или типа аргумента.