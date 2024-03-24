import gql from "graphql-tag";

const typeDefs = gql`
  type Product {
    id: ID
    name: String!
    price: Float
    quantity: Int
    image: String
  }
  input ProductInput {
    name: String!
    price: Float
    quantity: Int
    image: String
  }
  type Query {
    getAllProducts: [Product]
    getProduct(id: ID!): Product
  }

  type Mutation {
    createProduct(input: ProductInput!): Product
    updateProduct(id: ID!, input: ProductInput!): Product
    deleteProduct(id: ID!): Boolean
  }
`;

export default typeDefs;
