import ProjectSchemaEntityModel from "./entity/featureProject.entity";
import { ProjectModel } from "./models";



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

//!update
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

//-------------------------------------------------------------------------------------------------





export async function searchProjectRepo(body: string) {                                             //req, res, next
   try {
      let page = body.page;
      const pageSize = 2;
      const total = await ProjectSchemaEntityModel.countDocuments({})
      const skip = pageSize * (page - 1);
      const responseProjects = await ProjectSchemaEntityModel
         .find({ title: { $regex: "^" + body.searchText } }, { features: false }, { skip: skip, limit: body.pageSize });
      console.log(responseProjects);
      return responseProjects
   } catch (error) {
      console.log("Error", error)
      throw (error)
   }

}





// ты ишешь фичу с заголовком "Feature" 
//тебе возвращает то что внизу не закоммитированое
[
   {
      "_id": "6062fea4d9fcbc14dc9f7a14",
      "ownerId": "asdfasdasdasdasd",
      "title": "Test",
      "description": "This is a great project! I really like it!",
      "isOpen": true,
      "estimateMin": 1,
      "estimateMax": 1,
      "features": [
         {
            "level": "1",
            "title": "Feature login",
            "description": "1",
            "isRequired": true,
            "estimateMin": 1,
            "estimateMax": 1
         },
         // {
         //    "level": "1",
         //    "title": "Not found",
         //    "description": "1",
         //    "isRequired": true,
         //    "estimateMin": 1,
         //    "estimateMax": 1
         // },
         {
            "level": "1",
            "title": "Feature login",
            "description": "1",
            "isRequired": true,
            "estimateMin": 1,
            "estimateMax": 1
         },
      ]
   },
   {
      "_id": "6062fea4d9fcbc14dc9f7a14",
      "ownerId": "asdfasdasdasdasd",
      "title": "Test",
      "description": "This is a great project! I really like it!",
      "isOpen": true,
      "estimateMin": 1,
      "estimateMax": 1,
      "features": [{
         "level": "1",
         "title": "Feature login",
         "description": "1",
         "isRequired": true,
         "estimateMin": 1,
         "estimateMax": 1
      }]
   }
]

















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
