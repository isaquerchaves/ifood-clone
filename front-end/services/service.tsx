import axios from "axios";

const API_BASE_URL = 'http://localhost:3002';

export interface Category {
  ID: string;
  Name: string;
  ImageUrl: string;
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
