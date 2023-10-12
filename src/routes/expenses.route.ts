import { Router } from "express";
import { validaJwt } from '../middlewares/validarJwt';
import { getAllExpenses, createExpense, getOneExpenseById, updateExpense } from "../controllers/expense.controller";


const expenseRoutes = Router();

expenseRoutes.get("/expense", validaJwt, getAllExpenses)
    .get("/expense/:id", validaJwt, getOneExpenseById)
    .post("/expense", validaJwt, createExpense)
    .put("/expense/:id", validaJwt, updateExpense);


export default expenseRoutes;