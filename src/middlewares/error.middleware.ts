import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";

export const errorHandler=(
    err:Error,
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    logger.error(err.stack);
    res.status(500).json({error:'Internal server Error'})
};

export const notFoundHandler=(req:Request,res:Response)=>{
    res.status(404).json({error:'Page Not Found'});
}
