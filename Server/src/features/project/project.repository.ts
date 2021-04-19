import httpStatus from "http-status";
import { ErrorResponse } from "../shared/helper/appError.helper";
import { BaseResponseModel } from "../shared/models";
import ProjectSchemaEntityModel from "./entity/featureProject.entity";
import {
   ProjectModel, RequestCreateProjectModel, RequestSearchProjectModel,
   ResponseSearchFeatureProjectModel, ResponseSearchProjectsItemModel,
   ResponseSearchProjectsModel
} from "./models";



export async function create(req: ProjectModel): Promise<ProjectModel> {
   try {
      const projectCreated: ProjectModel = await ProjectSchemaEntityModel.create(req);
      return projectCreated;
   } catch (error) {
      throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify(error));
   }
};

// export async function create(req: RequestCreateProjectModel): Promise<ResponseCreteProjectModel | null> {                          //! RequestCreateProjectModel): Promise<ResponseCreteProjectModel> 
//    try {
//       const projectCreated: ResponseCreteProjectModel | null = await ProjectSchemaEntityModel.create(req);
//       return { ok: true };
//    } catch (error) {
//       throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify(error));
//    }
// };

export async function findProjectByTitle(title: string): Promise<number> {
   try {
      const foundProject: number = await ProjectSchemaEntityModel.countDocuments({ title: title });
      return foundProject;
   } catch (error) {
      throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify(error));
   }

}

export async function deleteProjectById(id: string): Promise<BaseResponseModel> {
   try {
      const deleteProjectRepository: ProjectModel | null = await ProjectSchemaEntityModel.findByIdAndDelete(id);
      if (!deleteProjectRepository) {

         return { ok: false };
      }
      return { ok: true };
   } catch (error) {
      throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify(error));
   }

};

export async function getProjectById(id: string): Promise<ProjectModel | null> {
   try {
      const getProject: ProjectModel | null = await ProjectSchemaEntityModel.findOne({ _id: id });
      return getProject;

   } catch (error) {
      throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify(error));
   }
}

export async function updateProjectById({ _id, ...rest }: ProjectModel): Promise<ProjectModel | null> {
   try {
      console.log(rest);

      const updateProjectRepository: ProjectModel | null = await ProjectSchemaEntityModel.findOneAndUpdate({ _id }, rest, { new: true });
      return updateProjectRepository;

   } catch (error) {
      throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify(error));
   }
}

export async function searchProject(body: RequestSearchProjectModel): Promise<ResponseSearchProjectsModel | null> {
   try {
      let page: number = body.page;
      const pageSize: number = body.pageSize;
      const total: number = await ProjectSchemaEntityModel.countDocuments({});
      const skip: number = pageSize * (page - 1);
      const responseProjects: ResponseSearchProjectsItemModel[] = await ProjectSchemaEntityModel
         .find({ title: { $regex: "^" + body.searchText, $options: "i" }, }, { features: false }, { skip: skip, limit: body.pageSize });         //? $regex: "^" + body.searchText посмотреть дополнительно 

      return { ok: true, items: responseProjects, total };

   } catch (error) {
      throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify(error));
   }
}

export async function searchFeatureProject(searchText: string): Promise<ResponseSearchFeatureProjectModel[]> {
   try {
      const findFeatureByHeader: ResponseSearchFeatureProjectModel[] = await ProjectSchemaEntityModel
         .aggregate(
            [
               { $unwind: "$features" },
               {
                  $match: {
                     "features.title": { $regex: "^" + searchText, $options: "i" },
                  }
               },
               { $project: { _id: true, title: true, features: true } }
            ]
         )
      return findFeatureByHeader;
   } catch (error) {
      throw new ErrorResponse(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify(error));
   }
}

















