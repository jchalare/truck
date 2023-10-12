import { DataSource } from "typeorm";
import path from "path";
import { envVariables } from "../utils/envVariables";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: 'localhost',  //envVariables.HOST,
  port: 5432,    //envVariables.DB_PORT,
  username: 'jachm',//envVariables.DB_USERNAME,
  password: 'jachm',//envVariables.DB_PASSWORD,
  database: 'db_truck',  //envVariables.DB_NAME,
  entities: [path.join(__dirname, "../entities/**/**.ts")],
  subscribers: [path.join(__dirname, "../subscribers/**/**.ts")],
  synchronize: true,
  logging: true
}) 