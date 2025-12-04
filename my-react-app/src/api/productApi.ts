import axios from "axios"
import type { Product } from "../types/Product"

const BASE_URL = "https://dummyjson.com"

export const productApi = {
    getAll: () => axios.get<{products: Product[]}>(`${BASE_URL}/products`),

    getOne: (id: number) =>
        axios.get<Product>(`${BASE_URL}/products/${id}`),

    create: (data: Product) => 
        axios.post<Product>(`${BASE_URL}/products/add`, data),

    update: (id: number, data: Product) =>
        axios.put<Product>(`${BASE_URL}/products/${id}`, data),

    delete: (id: number) =>
        axios.delete(`${BASE_URL}/products/${id}`),
}