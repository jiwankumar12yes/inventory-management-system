import { z } from 'zod';

const bodySchema=z.object({
    productId:z.number().positive(),
    quantity:z.number().int().nonnegative(),
    lowStock: z.number().int().nonnegative().default(5)
});

export const inventorySchema=z.object({
    body:bodySchema
});

export const inventoryUpdateSchema=z.object({
    body:bodySchema.partial(),
    params:z.object({
        productId:z.string()
    })
});

export type InventoryInput=z.infer<typeof bodySchema>;
export type InventoryUpdateInput=z.infer<typeof bodySchema>;