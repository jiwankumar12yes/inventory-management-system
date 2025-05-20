import prisma from "../../config/prisma";
import { ProductInput, ProductUpdateInput } from "./product.schema";

export const createProduct=async (product:ProductInput)=>{
    return prisma.product.create({
        data:product
    });
}

export const getProductById=async(id:number)=>{
    return prisma.product.findUnique({
        where:{id},
        include:{inventory:true,category:true}
    });
};

export const getAllProduct=async()=>{
    return prisma.product.findMany({
        include:{inventory:true,category:true}
    });
};

export const updateProduct=async(id:number, product:ProductUpdateInput)=>{
    return prisma.product.update({
        where:{id},
        data:product
    });
};
export const deleteProduct=async(id:number)=>{
    return prisma.product.delete({
        where:{id}
    });
};