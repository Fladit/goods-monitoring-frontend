import { serverAxios } from '../../../axios/serverAxios';
import type { IResponseProductsByCategory } from '../../../../app/entities/Product';
import { AxiosError } from 'axios';
import type { ValueOf } from '../../../../app/entities/utils/ValueOf';

export const CATEGORY_FOR_REQUEST = {
  MILK: 'milk',
  VEGETABLES: 'vegetables',
  BREAD: 'bread',
} as const;

export const getProductByCategory = async (category: ValueOf<typeof CATEGORY_FOR_REQUEST>) => {
  try {
    const response = await serverAxios.get<IResponseProductsByCategory>(`/products/${category}`);
    return { productsInfo: response.data };
  } catch (e: AxiosError) {
    console.log(e.response.data, category);
  }
};
