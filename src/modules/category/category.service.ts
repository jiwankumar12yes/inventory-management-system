import prisma from "../../config/prisma";
import { CategoryInput, CategoryUpdateInput } from "./category.schema";


export const createCategory=async(category:CategoryInput)=>{
    return prisma.category.create({data:category});
};

export const getCategoryById=async(id:number)=>{
    return prisma.category.findUnique({
        where:{id},
        include:{products:true}
    })
}

export const getAllCategories=async()=>{
    return prisma.category.findMany({
        include:{products:true}
    });
};

export const updateCategory=async(id:number,category:CategoryUpdateInput)=>{
    return prisma.category.update({
        where:{id},
        data:category
    });
};

export const deleteCategory=async(id:number)=>{
    return prisma.category.delete({
        where:{id}
    });
};