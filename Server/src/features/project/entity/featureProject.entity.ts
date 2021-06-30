import { Document, model, Schema } from "mongoose";
import { FeatureModel, ProjectEntityModel, ProjectModel } from "../models";


const featureSchema = new Schema<FeatureModel>({
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

const projectSchema = new Schema<ProjectEntityModel>({
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
      type: Date,
      required: true,
      default: new Date()
   },
   editDate: {
      type: Date,
      required: false
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