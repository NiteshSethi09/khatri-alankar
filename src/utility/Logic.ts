import { axiosInstance } from "./Axios";
import { ProductItem } from "./Logic.model";

export default class Logic {
  private static categories: ProductItem[] = [];
  private constructor() {}

  static async getCategories(): Promise<ProductItem[]> {
    if (this.categories.length == 0) {
      try {
        const imageData = await axiosInstance.get("/categories/get");
        const { data } = imageData.data;

        this.categories = data;
      } catch (e) {
        throw new Error("There must be some network issue.");
      }
    }

    return this.categories;
  }
}
