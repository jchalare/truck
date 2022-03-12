import { createConnection } from "typeorm";
import path from "path";

export async function conexionBD() {

  try {
    
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "jachm",
      password: "jachm",
      database: "db_truck",
      entities: [path.join(__dirname, "../entidades/**/**.ts")],
      synchronize: true,
    });  
  
    console.log("base de datos conectada !");
  } catch (error) {
    console.log("Error en base de datos",error);
    
  }

}