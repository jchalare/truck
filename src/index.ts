import "reflect-metadata"
import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import rutasUsuario from "./routes/usuario.rutas";
import rutasEmpresa from './routes/empresa.rutas';
import trailerRoutes from './routes/trailer.route';
import cityRoutes from './routes/city.route';
import rutasConductor from './routes/conductor.rutas';
import vehicleRoutes from './routes/vehicle.route';
import rutasViaje from './routes/viaje.rutas';
import profileRoutes from "./routes/profile.route";
import rutasCompania from "./routes/compania.rutas";
import rutasViajeDetalle from "./routes/viajedetalle.rutas";
import rutasTipoDetalle from "./routes/tipodetalle.rutas";
import rutasGastos from "./routes/otrosgastos.rutas";



import { AppDataSource } from "./db/db";
import { docOptions } from "./swagger";

(async function main() {

  try {

    const app = express();

    await AppDataSource.initialize();
    console.log("Database is connected !");

    //settings  
    app.set('port', process.env.PORT || 4000);

    // Middlewares
    app.use(cors());
    app.use(express.json());
    app.use(morgan('dev'));

    const specs = swaggerJsDoc(docOptions);

    // routes
    app.get('/', (req, res) => {
      return res.json(`APP IS RUNNING ON PORT ${app.get('port')}`)
    });

    app.use(rutasUsuario);
    app.use(rutasEmpresa);
    app.use(trailerRoutes);
    app.use(cityRoutes);
    app.use(rutasConductor);
    app.use(vehicleRoutes);
    app.use(rutasViaje);
    app.use(profileRoutes);
    app.use(rutasCompania);
    app.use(rutasViajeDetalle);
    app.use(rutasTipoDetalle);
    app.use(rutasGastos);

    app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));


    app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));

  } catch (error) {
    console.log('Error', error);
  }


})();