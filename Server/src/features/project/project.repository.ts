import ProjectSchemaEntityModel from "./entity/featureProject.entity";
import { ProjectEntityModel, ProjectModel, RequestCreateProjectEntityModel, ResponseCreteProjectModel } from "./models";




export async function create(req: any) {             //: RequestCreateProjectEntityModel): Promise<ProjectModel>
   try {
      const projectCreated = await ProjectSchemaEntityModel.create(req);  //: ProjectModel 
      return projectCreated

   } catch (error) {
      console.log("Error", error)
      throw (error)
   }

};

export async function findProject(title: string) {
   const foundProject: number = await ProjectSchemaEntityModel.countDocuments({ title: title });
   return foundProject;    // : ProjectModel | nul
}


export async function deleteProjectRepo(id: string) {
   try {
      const deleteProjectRepository = await ProjectSchemaEntityModel.deleteOne({ _id: id });
      return deleteProjectRepository;
   } catch (error) {
      console.log("Error", error)
      throw (error)
   }

};


export async function getProjectRepo(id: string) {
   try {
      const getProject: ProjectModel | null = await ProjectSchemaEntityModel.findOne({ id: id });
      return getProject;

   } catch (error) {
      console.log("Error", error)
      throw (error)
   }
}




//? Model.deleteMany()
//? Model.deleteOne()
//? Model.find()
//? Model.findById()
//? Model.findByIdAndDelete()
//? Model.findByIdAndRemove()
//? Model.findByIdAndUpdate()
//? Model.findOne()
//?Model.findOneAndDelete()
//? Model.findOneAndRemove()
//? Model.findOneAndReplace()
//? Model.findOneAndUpdate()
//? Model.replaceOne()
// ?Model.updateMany()
// ?Model.updateOne()
