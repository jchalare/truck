import { DataSource } from "typeorm";
import path from "path";
import { envVariables } from "../utils/envVariables";

    export const AppDataSource = new DataSource({
    type: "postgres",
    host: envVariables.HOST,
    port: envVariables.DB_PORT,
    username: envVariables.DB_USERNAME,
    password: envVariables.DB_PASSWORD,
    database: envVariables.DB_NAME,
    entities: [path.join(__dirname, "../entidades/**/**.ts")],
    subscribers: [path.join(__dirname, "../subscribers/**/**.ts")],
    synchronize: true,
    logging: true
      })