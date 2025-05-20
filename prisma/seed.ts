import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting seed process...');
  // Create categories
  const electronics = await prisma.category.create({
    data: {
      name: 'Electronics',
      description: 'Electronic devices and components'
    }
  });

  const clothing = await prisma.category.create({
    data: {
      name: 'Clothing',
      description: 'Apparel and accessories'
    }
  });

  // Create products
  const laptop = await prisma.product.create({
    data: {
      name: 'Laptop',
      description: 'High performance laptop',
      price: 999.99,
      sku: 'LP1001',
      barcode: '123456789012',
      categoryId: electronics.id
    }
  });

  const tshirt = await prisma.product.create({
    data: {
      name: 'T-Shirt',
      description: 'Cotton t-shirt',
      price: 19.99,
      sku: 'TS2001',
      barcode: '987654321098',
      categoryId: clothing.id
    }
  });

  // Create inventory
  await prisma.inventory.create({
    data: {
      productId: laptop.id,
      quantity: 10,
      lowStock: 3
    }
  });

  await prisma.inventory.create({
    data: {
      productId: tshirt.id,
      quantity: 50,
      lowStock: 10
    }
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });