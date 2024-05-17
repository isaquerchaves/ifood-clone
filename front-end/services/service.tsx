import axios from "axios";
import { promises } from "dns";

const API_BASE_URL = 'http://localhost:3002';

export interface Category {
  ID: string;
  Name: string;
  ImageUrl: string;
}

export interface Product {
  ID: string;
  Name: string;
  Description: string;
  ImageUrl: string;
  Price: number;
  DiscountPercentage: number;
  RestaurantId: string;
  CategoryId: string;
  Restaurant: {
    Name: string;
  };
}

export interface Restaurant {
  ID: string;
  Name: string;
  ImageUrl: string;
  DeliveryFee: number;
  DeliveryTimeMinutes: number 
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

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function fetchRestaurants(): Promise<Restaurant[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/restaurants`);
    return response.data.restaurants;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return []
  }
}