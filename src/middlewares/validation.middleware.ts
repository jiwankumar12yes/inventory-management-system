import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validate=(Schema:AnyZodObject)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        try {
            Schema.parse({
                body:req.body,
                query:req.query,
                params:req.params
            });
            next();
        } catch (error) {
             res.status(400).json({message:"validation failed ",error});
        }
    }
}