import { Document, model, Schema } from "mongoose";
import { ProjectEntityModel } from "../models";
// import { ProjectEntityModel } from "";




const featureSchema = new Schema({
   level: {
      type: String,
      required: true
   },
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   isRequired: {
      type: Boolean,
      required: true
   },
   estimateMin: {
      type: Number,
      required: true
   },
   estimateMax: {
      type: Number,
      required: true
   }
})

const projectSchema = new Schema({
   ownerId: {
      type: String,
      required: true
   },
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   creationDate: {
      type: String,
      required: true,
      default: new Date()

   },
   editDate: {
      type: Date,
      required: true
   },
   isOpen: {
      type: Boolean,
      required: true
   },
   estimateMin: {
      type: Number,
      required: true
   },
   estimateMax: {
      type: Number,
      required: true
   },
   features: {
      type: [featureSchema],
      required: true
   }
});

interface ProjectSchemaEntityModel extends ProjectEntityModel, Document { };

export default model<ProjectSchemaEntityModel>("Project", projectSchema);