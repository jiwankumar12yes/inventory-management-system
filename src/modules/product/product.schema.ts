import { z } from 'zod';

export const productSchema=z.object({
    body:z.object({
        name:z.string().min(3).max(255),
        description:z.string().max(1000).optional(),
        price:z.number().positive(),
        sku:z.string().min(2).max(50),
        barcode:z.string().max(50).optional(),
        categoryId:z.number().positive()
    })
});

export const productUpdateSchema=z.object({
    body:productSchema.shape.body.partial()
});

export type ProductInput = z.infer<typeof productSchema>['body'];
export type ProductUpdateInput = z.infer<typeof productUpdateSchema>['body'];