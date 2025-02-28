import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const restaurant1 = await prisma.restaurant.create({
    data: {
      name: 'Restaurant 1',
    },
  });

  const restaurant2 = await prisma.restaurant.create({
    data: {
      name: 'Restaurant 2',
    },
  });

  const restaurant3 = await prisma.restaurant.create({
    data: {
      name: 'Restaurant 3',
    },
  });

  const restaurant4 = await prisma.restaurant.create({
    data: {
      name: 'Restaurant 4',
    },
  });

  const foodPack1 = await prisma.foodPack.create({
    data: {
      name: 'Food Pack 1',
      price: 100,
      restaurantId: restaurant1.id,
    },
  });

  const foodPack2 = await prisma.foodPack.create({
    data: {
      name: 'Food Pack 2',
      price: 200,
      restaurantId: restaurant2.id,
    },
  });

  const foodPack3 = await prisma.foodPack.create({
    data: {
      name: 'Food Pack 3',
      price: 300,
      restaurantId: restaurant3.id,
    },
  });

  const foodPack4 = await prisma.foodPack.create({
    data: {
      name: 'Food Pack 4',
      price: 400,
      restaurantId: restaurant4.id,
    },
  });

  const employee1 = await prisma.employee.create({
    data: {
      name: 'Employee 1',
      email: 'employee1@example.com',
    },
  });

  const employee2 = await prisma.employee.create({
    data: {
      name: 'Employee 2',
      email: 'employee2@example.com',
    },
  });

  const employee3 = await prisma.employee.create({
    data: {
      name: 'Employee 3',
      email: 'employee3@example.com',
    },
  });

  const employee4 = await prisma.employee.create({
    data: {
      name: 'Employee 4',
      email: 'employee4@example.com',
    },
  });

  console.log({
    restaurant1,
    restaurant2,
    restaurant3,
    restaurant4,
    foodPack1,
    foodPack2,
    foodPack3,
    foodPack4,
    employee1,
    employee2,
    employee3,
    employee4,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
