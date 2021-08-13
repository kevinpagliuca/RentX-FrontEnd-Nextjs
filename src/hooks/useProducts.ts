import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../services/api";



type Product = {
  src: string;
  name: string;
  brand: string;
  type: string;
  value: number;
};


export async function getAllProducts(): Promise<Product[]> {
  const { data } = await api.get("products");

  return data;
}

export function useProducts(options?: UseQueryOptions) {
  const{ data:productsData, ...rest} = useQuery("products", () => getAllProducts(), {
    staleTime: 1000 * 60 * 10, // 10 minutos
    ...options,
  });
  const data = productsData as Product[]

  return { data , ...rest}
}
