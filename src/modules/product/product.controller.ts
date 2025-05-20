import { Request, Response } from "express";
import { ProductInput, ProductUpdateInput } from "./product.schema";
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from "./product.service";


export const createProductHandler=async(req:Request<{},{},ProductInput>,res:Response) =>{
    try {
        const product= await createProduct(req.body);
          res.status(201).json({message:"Product created",product})
    } catch (error:any) {
         res.status(400).json({error:error.message});
    }
};

export const getProductHandler=async(req:Request<{id:string}>,res:Response) =>{
    try {
        const product=await getProductById(parseInt(req.params.id));
        if(!product){
             res.status(404).json({message:"Product not found"})
             return;
        }
         res.status(200).json(product);
    } catch (error:any) {
         res.status(400).json({error:error.message});
    }
};

export const getAllProductHandler=async(req:Request,res:Response)=>{
    try {
        const products=await getAllProduct();

        if (products.length === 0) {
          res.status(200).json({ message: 'No products available' });
          }
        else{
           res.status(200).json(products);
          }
    } catch (error: any) {
         res.status(400).json({ error: error.message });
      }  
};

export const updateProductHandler=async(req:Request<{id:string},{},ProductUpdateInput>,res:Response)=>{
    try {
        const product=await updateProduct(parseInt(req.params.id),req.body);
         res.status(200).json({message:"Product updated",product})
    } catch (error:any) {
         res.status(400).json({ error: error.message });
    }
};

export const deleteProductHandler = async (req: Request<{ id: string }>, res: Response) => {
    try {
      await deleteProduct(parseInt(req.params.id));
       res.status(204).json({message:"product deleted"})
    } catch (error: any) {
       res.status(400).json({ error: error.message });
    }
  };