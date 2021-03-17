import { Document, model, Schema } from "mongoose";
import { Gender, Role } from "../enums";
import { User } from "../models/user.model";

const userSchema = new Schema({
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
      default: Gender[Gender.Male]
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
      default: Role[Role.User]
   },
   createdAt: {
      type: Date,
      required: true,
      default: new Date()
   }
})

interface UserSchemaEntityModel extends User, Document { };

export default model<UserSchemaEntityModel>("User", userSchema);