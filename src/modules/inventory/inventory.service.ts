import prisma from '../../config/prisma';
import { InventoryInput, InventoryUpdateInput } from './inventory.schema';

const getInventoryStatus = (quantity: number, lowStock: number=5): string => {
  if (quantity === 0) return 'OUT_OF_STOCK';
  if (quantity <= lowStock) return 'LOW_STOCK';
  return 'IN_STOCK';
};

export const createInventory = async (inventory: InventoryInput) => {
  return prisma.inventory.create({
    data: {
      ...inventory,
      status: getInventoryStatus(inventory.quantity, inventory.lowStock)
    }
  });
};

export const getInventoryByProductId = async (productId: number) => {
  return prisma.inventory.findUnique({
    where: { productId }
  });
};

export const updateInventory = async (productId: number, inventory: InventoryUpdateInput) => {
  const existing = await prisma.inventory.findUnique({
    where: { productId }
  });

  const newQuantity = inventory.quantity ?? existing?.quantity ?? 0;
  const newLowStock = inventory.lowStock ?? existing?.lowStock ?? 5;

  return prisma.inventory.update({
    where: { productId },
    data: {
      ...inventory,
      status: getInventoryStatus(newQuantity, newLowStock)
    }
  });
};

export const deleteInventory = async (productId: number) => {
  return prisma.inventory.delete({
    where: { productId }
  });
};