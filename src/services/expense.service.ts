import { AppDataSource } from '../db/db';
import { Expense } from '../entities/ExpensesEntity';

export const getAllExpensesService = async () => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(Expense).find({
         select: {
            id: true,
           item_detalle: true,
           expense_value:true,
           expense_date: true,
           notes: true
         },
        relations: {
            id_vehicle: true,
            id_detailType: true,
            id_user:true
        }
    });   
}


export const getExpenseByIdService = async ( id ) => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(Expense).find({
         select: {
            id: true,
           item_detalle: true,
           expense_value:true,
           expense_date: true,
           notes: true
         },
        relations: {
            id_vehicle: true,
            id_detailType: true,
            id_user:true
        },
        where:{
            id
        }
    });
}

export const createNewExpenseService = async( expenseData ) => {

    //const {name,nit} = expenseData;
    const dataSource = AppDataSource;

     const newExpense = Expense.create(expenseData);
        return  await Expense.insert(newExpense);

    /*const foundExpenseByName = await dataSource.getRepository(Expense).findOneBy({ nit });
    
    if(foundExpenseByName){
        return { msg:`Expense: ${name} with nit: ${nit} already exist!`, 
                code:400
               };
    } else {
        const newExpense = Expense.create({ name: name.toUpperCase() });
        return  await Expense.insert(newExpense);
    } */
}


export const updateExpenseService = async( expenseData ) => {

   const {id,item_detalle } = expenseData;

   //const foundExpenseData = await getExpenseByIdService(id);

   /* if(foundExpenseData.length === 0){    
        return { msg:`City does not exist !`, code:404 };   
    }*/
         
    try {

       const updatedExpense = Expense.merge(expenseData);
        return await Expense.update({ id }, updatedExpense);

    } catch (error) {

            const { code, detail } = error;
             
            return { msg:detail, code};
       } 
    
}