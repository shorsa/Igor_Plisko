import * as dotenv from "dotenv";

dotenv.config();

export default {
    APP: process.env.APP || "dev",
    PORT: process.env.PORT || "3000",

    DB_DIALECT: process.env.DB_DIALECT || "mongo",
    DB_HOST: process.env.DB_HOST || "mongodb://localhost:27017/bd",

    DB_NAME: process.env.DB_NAME || "Example",
    DB_PASSWORD: process.env.DB_PASSWORD || "Example123",
    DB_PORT: process.env.DB_PORT || "27017",
    DB_USER: process.env.DB_USER || "example",

    JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "jwt_key",
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1hr",
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10
}