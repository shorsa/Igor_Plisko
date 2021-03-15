import { Document, model, Schema } from "mongoose";
import { string } from "yup";
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
      type: Number,
      required: false
   },
   gender: {
      type: String,
      enum: [Gender[Gender.Female], Gender[Gender.Male]],
      required: true,
      default:  Gender[Gender.Male]
   },
   country: {
      type: String,
      required: true
   },
   age: {
      type: Number,
      required: false
   },

   role: {
      type: String,
      enum: [Role[Role.User], Role[Role.Admin]],
      required: true,
      default: Role[Role.User]
   },
   createdAt: {
      type: Date,
      required: false
   }
})

interface UserSchemaEntityModel extends User, Document { };

export default model<UserSchemaEntityModel>("User", userSchema);