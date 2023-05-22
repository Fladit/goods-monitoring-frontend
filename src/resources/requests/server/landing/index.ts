import { serverAxios } from '../../../axios/serverAxios';
import type { IResponseProductsByCategory } from '../../../../app/entities/Product';
import type { AxiosError } from 'axios';
import type { ValueOf } from '../../../../app/utils/ValueOf';

export const CATEGORY_FOR_REQUEST = {
  MILK: 'milk',
  VEGETABLES: 'vegetables',
  BREAD: 'bread',
} as const;

export const getProductByCategory = async (category: ValueOf<typeof CATEGORY_FOR_REQUEST>) => {
  try {
    const response = await serverAxios.get<IResponseProductsByCategory>(`/products/${category}`);
    return { productsInfo: response.data };
  } catch (e: unknown) {
    const error = e as AxiosError;

    // @ts-ignore
    console.log(error.response.data, category);
  }
};
