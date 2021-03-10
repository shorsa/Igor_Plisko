//Vendors
import { Document, model, Schema } from "mongoose";
import { Example } from "../../shared/models";

const exampleSchema = new Schema<Example>({
    test: {
        type: String,
        required: true
    },
});

interface ExampleSchemaEntityModel extends Example, Document { };

export default model<ExampleSchemaEntityModel>("Example", exampleSchema);