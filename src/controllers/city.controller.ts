import { Request, Response } from "express";
import { getAllCitiesService, getOneCityByIdService,createNewCityService,updateCityService } from '../services/city.service';


export const getAllCities = async (req: Request, res: Response): Promise<Response> => {
    const citiesData = await getAllCitiesService();
    return res.send(citiesData);
};

export const getOneCityById = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const cityData = await getOneCityByIdService(id);
    return res.send(cityData);
    
    /*if(cityData){
        return res.json(cityData);
    }else{
        return res.json().send({msg: 'No City found'});
    }*/    
};

export const createCity = async (req: Request, res: Response): Promise<Response> => {
    return res.send(await createNewCityService(req.body));
};


export const updateCity = async (req: Request, res: Response): Promise<Response> => {
     return res.send(await updateCityService(req.body));
    /*const ciudad = await dataSource.getRepository(City).findOneBy({id});

    //return res.json(ciudad);
    if (ciudad) {
        const {nombre} = req.body;

        const ciudadEncontrada = await dataSource.getRepository(City).findBy({nombre: ILike(`${nombre}`)});
        if (ciudadEncontrada.length===0){
            const strNombre = JSON.stringify(nombre).toUpperCase();
            const objNombre = { nombre:JSON.parse(strNombre)}; 
            dataSource.getRepository(City).merge(ciudad, objNombre);
            const results = await dataSource.getRepository(City).save(ciudad);

            return res.json({nombre:ciudad.nombre, id:ciudad.id});    
        }else{
            return res.json({msg: `La ciudad ${nombre} ya existe`}); 
        }
    }
  
    return res.json({msg: 'Not City found'});*/
  };


/*
const dataSource = AppDataSource;

export const getCities = async (req: Request, res: Response): Promise<Response> => {
    const cities = await dataSource.getRepository(City).find();
    return res.json(cities);
};

export const getCity = async (req: Request, res: Response): Promise<Response> => {

    const {id} = req.params;
    const results = await dataSource.getRepository(City).findOneBy({ id });
    
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'No City found'});
    }
    
};

export const createCity = async (req: Request, res: Response): Promise<Response> => {
    const {name} = req.body;    
    const foundCityData = await dataSource.getRepository(City).findBy({name: ILike(`${name}`)});    
    
    if (foundCityData.length === 0) {
        
        const cityName = JSON.stringify(name).toUpperCase();
        const objCity = { nombre:JSON.parse(cityName)}; 
        const nuevoCity =  dataSource.getRepository(City).create(objNombre);
        const respuesta = await dataSource.getRepository(City).save(nuevoCity);
        return res.json(respuesta);

    } else {
        
        return res.json({ msg: `The city ${name} already exist !` }); 
        
    }
};

export const updateCityes = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const ciudad = await dataSource.getRepository(City).findOneBy({id});

    //return res.json(ciudad);
    if (ciudad) {
        const {nombre} = req.body;

        const ciudadEncontrada = await dataSource.getRepository(City).findBy({nombre: ILike(`${nombre}`)});
        if (ciudadEncontrada.length===0){
            const strNombre = JSON.stringify(nombre).toUpperCase();
            const objNombre = { nombre:JSON.parse(strNombre)}; 
            dataSource.getRepository(City).merge(ciudad, objNombre);
            const results = await dataSource.getRepository(City).save(ciudad);

            return res.json({nombre:ciudad.nombre, id:ciudad.id});    
        }else{
            return res.json({msg: `La ciudad ${nombre} ya existe`}); 
        }
    }
  
    return res.json({msg: 'Not City found'});
  };
  */