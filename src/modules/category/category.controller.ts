import { Request, Response } from "express";
import { CategoryInput, CategoryUpdateInput } from "./category.schema";
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "./category.service";

export const createCategoryHandler=async(req:Request<{},{},CategoryInput>,res:Response)=>{
    try {
        const category=await createCategory(req.body);
        res.status(201).json(category);
    } catch (error:any) {
        res.status(400).json({error:error.message});
    }
};


export const getCategoryHandler=async(
    req:Request<{id:string}>,
    res:Response
)=>{
    try {
      const category = await getCategoryById(parseInt(req.params.id));
      if (!category) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }
      res.status(200).json(category);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };


export const getAllCategoriesHandler=async(req:Request,res:Response)=>{
    try {
        const categories=await getAllCategories();
        if(categories.length==0){
            res.status(200).json({message:"Category is Empty"});
            return;
        }
        res.status(200).json(categories);
    } catch (error:any) {
        res.status(400).json({error:error.message});
    }
};


export const updateCategoryHandler = async (
    req: Request<{ id: string }, {}, CategoryUpdateInput>,
    res: Response
  ) => {
    try {
      const category = await updateCategory(parseInt(req.params.id), req.body);
      res.status(200).json(category);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const deleteCategoryHandler = async (
    req: Request<{ id: string }>,
    res: Response
  ) => {
    try {
      const categoryId=parseInt(req.params.id);

      const category = await getCategoryById(categoryId);
      if (!category) {
         res.status(404).json({ message: "Category not found" });
         return;
      }
      await deleteCategory(categoryId);

      res.status(200).json("Category Deleted ");
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };