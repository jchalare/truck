import "reflect-metadata"
import express  from "express";
import morgan from "morgan";
import cors from "cors";

import rutasUsuario from "./routes/usuario.rutas";
import rutasEmpresa from './routes/empresa.rutas';
import rutasTrailer from './routes/trailer.rutas';
import rutasCiudad from './routes/ciudad.rutas';
import rutasConductor from './routes/conductor.rutas';
import rutasVehiculo from './routes/vehiculo.rutas';
import rutasViaje from './routes/viaje.rutas';
import rutasPerfil from "./routes/perfil.rutas";
import rutasCompania from "./routes/compania.rutas";
import rutasViajeDetalle from "./routes/viajedetalle.rutas";
import rutasTipoDetalle from "./routes/tipodetalle.rutas";




import { AppDataSource } from "./db/db";

async function main() {

  try {

  const app = express();

  await AppDataSource.initialize();
  console.log("base de datos conectada !");

  //settings  
  app.set('port',process.env.PORT||4000);
  
  // Middlewares
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));  
  
  // routes
  app.get('/',(req,res)=>{
    return res.json(`LA APP ESTA EN EL PUERTO ${app.get('port')}`)
  });

  app.use(rutasUsuario);
  app.use(rutasEmpresa);
  app.use(rutasTrailer);
  app.use(rutasCiudad);
  app.use(rutasConductor);
  app.use(rutasVehiculo);
  app.use(rutasViaje);
  app.use(rutasPerfil); 
  app.use(rutasCompania);
  app.use(rutasViajeDetalle);
  app.use(rutasTipoDetalle);
  
  app.listen(app.get('port'));
  console.log('Server on port', app.get('port'));
    
  } catch (error) {
    console.log('Error',error);
  }
 
  
}

main();