import { Request, Response } from 'express';
import { InventoryInput, InventoryUpdateInput } from './inventory.schema';
import {
    createInventory,
    deleteInventory,
    getInventoryByProductId,
    updateInventory
} from './inventory.service';

export const createInventoryHandler = async (
  req: Request<{}, {}, InventoryInput>,
  res: Response
) => {
  try {
    const inventory = await createInventory(req.body);
    res.status(201).json(inventory);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getInventoryHandler = async (
  req: Request<{ Id: string }>,
  res: Response
) => {
  try {
    const inventory = await getInventoryByProductId(parseInt(req.params.Id));
    if (!inventory) {
      res.status(404).json({ message: 'Inventory not found' });
      return;
    }
    res.status(200).json(inventory);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateInventoryHandler = async (
  req: Request<{ Id: string }, {}, InventoryUpdateInput>,
  res: Response
) => {
  try {
    const inventory = await updateInventory(
      parseInt(req.params.Id),
      req.body
    );
    res.status(200).json(inventory);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteInventoryHandler = async (
  req: Request<{ Id: string }>,
  res: Response
) => {
  try {
    await deleteInventory(parseInt(req.params.Id));
    res.status(204).end();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};