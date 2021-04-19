import { Document, model, Schema } from "mongoose";
import { Gender, Role } from "../enums";
import { UserModel } from "../models";
import { UserEntityModel } from "../models/userEntity.model";

const userSchema = new Schema<UserModel>({
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   phoneNumber: {
      type: String,
      required: false
   },
   gender: {
      type: Number,
      enum: [Gender.Female, Gender.Male],
      required: true,
      default: Gender.Male
   },
   country: {
      type: String,
      required: true
   },
   age: {
      type: Date,
      required: false
   },

   role: {
      type: Number,
      enum: [Role.User, Role.Admin],
      required: true,
      default: Role.User
   },
   createdAt: {
      type: Date,
      required: true,
      default: new Date()
   }
})

interface UserSchemaEntityModel extends UserEntityModel, Document { };

export default model<UserSchemaEntityModel>("User", userSchema);