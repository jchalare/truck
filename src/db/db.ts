import { DataSource } from "typeorm";
import path from "path";

    export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "jachm",
    password: "jachm",
    database: "db_truck",
    entities: [path.join(__dirname, "../entidades/**/**.ts")],
    subscribers: [path.join(__dirname, "../subscribers/**/**.ts")],
    synchronize: true,
    logging: true
      })