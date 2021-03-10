import mongoose from "mongoose";
import CONFIG from "./config";

export default (async () => {
    try {
        await mongoose.connect(CONFIG.DB_HOST, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("DB connection OK");
    } catch (e) {
        console.log(e);
        console.log("DB connection bad");
        process.exit()
    }
})();