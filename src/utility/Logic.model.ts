export interface ProductItem {
  category: string;
  id: string;
  imageUrl: string;
}

export interface Products {
  category: string;
  description: string;
  id: string;
  metalQualityType: string;
  metalType: string;
  personFor: string;
  referenceName: string;
  weight: number;
  images: string[];
}
