import { z } from 'zod';

const bodySchema=z.object({
    // body:z.object({
        name:z.string().min(3).max(255),
        description:z.string().max(1000).optional()
    // })
});



export const categorySchema=z.object({
    body:bodySchema
});

export const categoryUpdateSchema=z.object({
    body:bodySchema.partial(),
    params:z.object({
        id:z.string()
    })
});

export type CategoryInput=z.infer<typeof bodySchema>;
export type CategoryUpdateInput=z.infer<typeof bodySchema>;