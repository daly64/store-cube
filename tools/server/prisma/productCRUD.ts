import { PrismaClient } from "@prisma/client";

//0. instantiate the Prisma client
const prisma = new PrismaClient();

// 1. get all products
export const prismaGetAllProducts = async () => prisma.product.findMany();

// 2. get product by id
export const prismaGetProductById = async (id: string) =>
  prisma.product.findUnique({ where: { id } });

// 3. create a new product
export const prismaCreateProduct = (product: any) =>
  prisma.product.create({ data: product });

// 4. update product by id
export const prismaUpdateProduct = async (id: string, product: any) => {
  return await prisma.product.update({
    where: { id: id },
    data: { ...product, name: product.name, price: product.price },
  });
};

// 5. delete product by id
export const prismaDeleteProduct = async (id: string) => {
  return await prisma.product.delete({ where: { id: id } });
};
