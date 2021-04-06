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
      const getProject: ProjectModel | null = await ProjectSchemaEntityModel.findOne({ _id: id });
      return getProject;

   } catch (error) {
      console.log("Error", error)
      throw (error)
   }
}







export async function paginationProjectRepo(id: string) {                                             //req, res, next
   try {
      const page = 0;
      const pageSize = 10;
      const skip = page + 1 * pageSize
      const paginationProject = await ProjectSchemaEntityModel.find({}, {}, { skip: 0, limit: pageSize })
      console.log(paginationProject);

   } catch (error) {
      console.log("Error", error)
      throw (error)
   }
}

export async function searchProject(body: any) {                                             //req, res, next
   try {
      let page = 1;
      const pageSize = 2;

      const skip = pageSize * (page - 1);
      const responseProjects = await ProjectSchemaEntityModel.find({ title: "Rs" }, {}, { skip: skip, limit: body.pageSize });
      console.log(responseProjects);

   } catch (error) {
      console.log("Error", error)
      throw (error)
   }
}

// const findAllFoo = async (req, resp, next) => {
//    const pageSize = 10;
//    const currentPage = 1;

//    try {
//        const foos = await FooModel.find() // find all documents
//            .skip(pageSize * (currentPage - 1)) // we will not retrieve all records, but will skip first 'n' records
//            .limit(pageSize); // will limit/restrict the number of records to display

//        const numberOfFoos = await FooModel.countDocuments(); // count the number of records for that model

//        resp.setHeader('max-records', numberOfFoos);
//        resp.status(200).json(foos);

//    } catch (err) {
//        resp.status(500).json({
//            message: err
//        });
//    }
// };




// model.find(query, field, { skip: 10, limit: 5 })



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
