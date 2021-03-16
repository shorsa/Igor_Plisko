import { object, string } from "yup";
import { RequestUserModel } from "../models";

export const userRequestSchema = object().shape<RequestUserModel>(
   {
      test: string().required(),
  }
);
     
        
    



