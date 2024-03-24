import {
  prismaGetAllProducts,
  prismaGetProductById,
  prismaCreateProduct,
  prismaUpdateProduct,
  prismaDeleteProduct,
} from "../prisma/productCRUD";

const getAllProducts = prismaGetAllProducts;

const getProduct = (parent: any, data: { id: string }) => {
  return prismaGetProductById(data.id);
};

const createProduct = (parent: any, data: { input: any }) => {
  return prismaCreateProduct(data.input);
};

const updateProduct = (parent: any, data: { id: string; input: any }) => {
  return prismaUpdateProduct(data.id, data.input);
};

const deleteProduct = (parent: any, data: { id: string }) => {
  const deletedProduct = prismaDeleteProduct(data.id);
  return deletedProduct !== null;
};
let currentNumberVar = 0;
const currentNumber = () => currentNumberVar;

const resolvers = {
  Query: { getAllProducts, getProduct, currentNumber },
  Mutation: { createProduct, updateProduct, deleteProduct },
};
export default resolvers;


