import { Router } from "express";
import { validate } from "../../middlewares/validation.middleware";
import { createProductHandler, deleteProductHandler, getAllProductHandler, getProductHandler, updateProductHandler } from "./product.controller";
import { productSchema, productUpdateSchema } from "./product.schema";

const router=Router();

router.post('/',validate(productSchema),createProductHandler);
router.get('/:id',getProductHandler);
router.get('/',getAllProductHandler);
router.put('/:id', validate(productUpdateSchema), updateProductHandler);
router.delete('/:id', deleteProductHandler);


export default router;