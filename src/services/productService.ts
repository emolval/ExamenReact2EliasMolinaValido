import type { Product } from "../types";

const API_URL = "http://localhost:3000";

export const getProducts = async (): Promise<Product[]> => {
  // TODO: Implementar llamada a la API (GET /products)
  const products = await fetch(API_URL + "/products");
  const productsList = JSON.stringify(products);
  
  return []; // Placeholder
};

export const createOrder = async (order: any): Promise<void> => {
  // TODO: Implementar llamada a la API (POST /orders)
  
};