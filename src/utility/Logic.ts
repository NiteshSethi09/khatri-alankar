import axios from "axios";
import { ProductItem, Products } from "./Logic.model";

export default class Logic {
  private static categories: ProductItem[] = [];
  private static allProducts: Products[] = [];
  private constructor() {}

  static async getCategories(): Promise<ProductItem[]> {
    if (this.categories.length == 0) {
      try {
        const imageData = await axios({
          baseURL: import.meta.env.VITE_API_URL,
          url: "/categories/get",
          method: "get",
        });
        const { data } = imageData.data;
        console.log("Loading data");

        this.categories = data;
      } catch (e) {
        throw new Error("There must be some network issue.");
      }
    }

    return this.categories;
  }

  static async getAllProducts() {
    if (this.allProducts.length == 0) {
      try {
        const productsData = await axios({
          baseURL: import.meta.env.VITE_API_URL,
          url: "/products/getWithFilters",
          method: "post",
          data: {},
        });

        const { data } = productsData.data;
        console.log("Loading products data");
        // console.log(data);

        this.allProducts = data;
      } catch (e) {
        throw new Error("There must be some network issue.");
      }
    }
    return this.allProducts;
  }
}
