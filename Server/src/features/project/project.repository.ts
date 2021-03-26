import ProjectSchemaEntityModel from "./entity/featureProject.entity";
// export async function findByEmailCount(request: string): Promise<number> {
//    const projectCount: number = await ProjectSchemaEntityModel.countDocuments({ email: requestEmail });
//    return projectCount;
// }
import { ProjectEntityModel, ProjectModel } from "./models";







export async function create(req: ProjectEntityModel) {
   try {
      const projectCreated = ProjectSchemaEntityModel.create(req);
      return projectCreated
   } catch (error) {
      console.log("Error", error)
      throw (error)
   }
};
// const projectCreated: ProjectModel = await
