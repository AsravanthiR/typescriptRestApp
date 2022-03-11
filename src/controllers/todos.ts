//import { Request,Response,NextFunction } from "express";
import { RequestHandler } from "express-serve-static-core";
import { Todo } from "../models/todo";

const TODOS:Todo[] =[];
export const createTodo: RequestHandler = (req, res, next) => {
    const text =(req.body as {text:string}).text;
    const newTodo = new Todo(Math.random().toString(),text);
    TODOS.push(newTodo);
    res.status(201).json({message:'Create todo', createTodo:newTodo});

};