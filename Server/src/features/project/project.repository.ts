import ProjectSchemaEntityModel from "./entity/featureProject.entity";
import {
   ProjectModel, RequestSearchProjectModel,
   ResponseSearchFeatureProjectModel, ResponseSearchProjectsItemModel,
   ResponseSearchProjectsModel
} from "./models";



export async function create(req: ProjectModel): Promise<ProjectModel> {
   try {
      const projectCreated: ProjectModel = await ProjectSchemaEntityModel.create(req);
      return projectCreated
   } catch (error) {
      console.log("Error", error)
      throw (error)
   }

};

export async function findProject(title: string): Promise<number> {
   const foundProject: number = await ProjectSchemaEntityModel.countDocuments({ title: title });
   return foundProject;
}

export async function deleteProjectRepo(id: string): Promise<ProjectModel | null> {
   try {
      const deleteProjectRepository: ProjectModel | null = await ProjectSchemaEntityModel.findByIdAndDelete(id);
      return deleteProjectRepository;
   } catch (error) {
      console.log("Error", error)
      throw (error)
   }

};

export async function getProjectRepo(id: string): Promise<ProjectModel | null> {
   try {
      const getProject: ProjectModel | null = await ProjectSchemaEntityModel.findOne({ _id: id });
      return getProject;

   } catch (error) {
      console.log("Error", error)
      throw (error)
   }
}

export async function updateProjectRepo({ _id, ...rest }: ProjectModel): Promise<ProjectModel | null> {
   try {
      console.log(rest);

      const updateProjectRepository: ProjectModel | null = await ProjectSchemaEntityModel.findOneAndUpdate({ _id }, rest, { new: true });
      return updateProjectRepository;

   } catch (error) {
      console.log("Error", error)
      throw (error)

   }

}

export async function searchProjectRepo(body: RequestSearchProjectModel): Promise<ResponseSearchProjectsModel | null> {
   try {
      let page: number = body.page;
      const pageSize: number = body.pageSize;
      const total: number = await ProjectSchemaEntityModel.countDocuments({})
      const skip: number = pageSize * (page - 1);
      const responseProjects: ResponseSearchProjectsItemModel[] = await ProjectSchemaEntityModel         //?
         .find({ title: { $regex: "^" + body.searchText, $options: "i" }, }, { features: false }, { skip: skip, limit: body.pageSize });         //? $regex: "^" + body.searchText посмотреть дополнительно 

      return { items: responseProjects, total }

   } catch (error) {
      console.log("Error", error)
      throw (error)
   }

}


///----------------------------------------------------------------------------
export async function searchFeatureServiceProjectRepo(searchText: string): Promise<ResponseSearchFeatureProjectModel[]> {
   try {
      const findFeatureByHeader: ResponseSearchFeatureProjectModel[] = await ProjectSchemaEntityModel
         .aggregate(
            [
               { $unwind: "$features" },
               {
                  $match: {
                     "features.title": searchText,
                  }
               },
               { $project: { _id: true, title: true, features: true } }
            ]

         )
      console.log('111111111111', searchText)
      return findFeatureByHeader
   } catch (error) {
      console.log("Error", error)
      throw (error)

   }

}

















