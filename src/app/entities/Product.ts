import type { TDimensions } from './Dimension';
import type { ICategory } from './Category';

export interface IProduct {
  id: number;
  name: string;
  minPrice: number;
  mediumPrice: number;
  maxPrice: number;
  createdAt?: Date;
  displayDate?: string;
  value: number;
  categoryId: number
  productDimensionId: number
}

interface IResponseProductGroup {
  name: string;
  items: IProduct[];
  dimension: TDimensions;
}

export interface IResponseProductsByCategory {
  productGroups: IResponseProductGroup[],
  category: ICategory;
}
