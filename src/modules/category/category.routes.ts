import { Router } from 'express';
import { validate } from '../../middlewares/validation.middleware';
import {
    createCategoryHandler,
    deleteCategoryHandler,
    getAllCategoriesHandler,
    getCategoryHandler,
    updateCategoryHandler
} from './category.controller';
import { categorySchema, categoryUpdateSchema } from './category.schema';

const router = Router();

router.post('/', validate(categorySchema), createCategoryHandler);
router.get('/', getAllCategoriesHandler);
router.get('/:id', getCategoryHandler);
router.put('/:id', validate(categoryUpdateSchema), updateCategoryHandler);
router.delete('/:id', deleteCategoryHandler);

export default router;