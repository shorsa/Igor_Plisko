//Vendors
import * as bodyParser from 'body-parser';
import cors from "cors";
import express from "express";
import helmet from 'helmet';
import morgan from 'morgan';
import { ApiEndpointsConstants } from './config/api-endpoints.constants';
import "./config/db";
//Routes

import { authRouter } from './features/auth/auth.routes';
import { projectRouter } from './features/project/project.routes';
//Helpers
class App {
    public express: express.Application;
    constructor() {
        //this
        this.express = express();
        this.setMiddleware();
        this.setRoutes();
        this.catchErrors();
    }

    private setMiddleware(): void {
        this.express.use(cors());
        this.express.use(morgan("dev"));
        this.express.use(bodyParser.json({ limit: '10mb' }));
        this.express.use(bodyParser.urlencoded({ extended: false }));
        //this
        this.express.use(helmet());
    }

    private setRoutes(): void {
        const getUrl = (route: string): string => ApiEndpointsConstants.API + route;


        this.express.use(getUrl(ApiEndpointsConstants.AUTH_FEATURE), authRouter)
        this.express.use(getUrl(ApiEndpointsConstants.PROJECT_FEATURE), projectRouter)
    }

    private catchErrors(): void {
    }
}

export default new App().express;