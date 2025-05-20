import { Router } from 'express';
import { validate } from '../../middlewares/validation.middleware';
import {
    createInventoryHandler,
    deleteInventoryHandler,
    getInventoryHandler,
    updateInventoryHandler
} from './inventory.controller';
import { inventorySchema, inventoryUpdateSchema } from './inventory.schema';

const router = Router();

router.post('/', validate(inventorySchema), createInventoryHandler);
router.get('/:Id', getInventoryHandler);
router.put('/:Id', validate(inventoryUpdateSchema), updateInventoryHandler);
router.delete('/:Id', deleteInventoryHandler);

export default router;