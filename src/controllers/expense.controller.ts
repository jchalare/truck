import { Request, Response } from "express";
import { getAllExpensesService, getExpenseByIdService, createNewExpenseService, updateExpenseService } from '../services/expense.service';


export const getAllExpenses = async (req: Request, res: Response): Promise<Response> => {
     const expensesData = await getAllExpensesService();
    return res.json().send(expensesData);
};

export const getOneExpenseById = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const expenseData = await getExpenseByIdService(id);
    return res.json().send(expenseData);    
};

export const createExpense = async (req: Request, res: Response): Promise<Response> => {
    return res.json().send(await createNewExpenseService(req.body));
};

export const updateExpense = async (req: Request, res: Response): Promise<Response> => {
     return res.json().send(await updateExpenseService(req.body));
  };