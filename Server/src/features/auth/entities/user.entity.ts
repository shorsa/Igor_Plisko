import { Document, model, Schema } from "mongoose";
import { string } from "yup";
import { Role } from "../enums";
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
   name: {
      type: String,
      required: true
   },
   surname: {
      type: String,
      required: true
   },
   gender: {
      type: String,
      required: true
   },
   country: {
      type: String,
      required: true
   },
   age: {
      type: Number,
      required: false
   },
   phoneNumber: {
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
      type: Number,
      required: false
   }
})

interface UserSchemaEntityModel extends User, Document { };

export default model<UserSchemaEntityModel>("User", userSchema);