import axios from "axios";

const API_BASE_URL = "https://ifood-clone-u3t1.onrender.com";

export interface Category {
  ID: string;
  Name: string;
  ImageUrl: string;
  Product: Product[];
}

export interface Product {
  ID: string;
  Name: string;
  Description: string;
  ImageUrl: string;
  Price: number;
  DiscountPercentage: number;
  RestaurantID: string;
  CategoryID: string; 
  Restaurant: {
    Name: string;
    ImageUrl: string;
    DeliveryFee: number;
    DeliveryTimeMinutes: number;
  };
  Category: {
    Name: string;
  };
}

export interface Restaurant {
  ID: string;
  Name: string;
  ImageUrl: string;
  DeliveryFee: number;
  DeliveryTimeMinutes: number;
}

export interface CategoriesRestaurant {
  CategoryID: string;
  RestaurantID: string;
  Category: {
    Name: string;
    ImageUrl: string;
  };
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
    return [];
  }
}

export async function fetchCategoryRestaurant(): Promise<
  CategoriesRestaurant[]
> {
  try {
    const response = await axios.get(`${API_BASE_URL}/categoriesRestaurant`);
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return [];
  }
}
