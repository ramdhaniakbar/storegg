import { callApi } from '../config/api';
import { CheckoutTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const getFeaturedGame = async () => {
   const url = `${ROOT_API}/${API_VERSION}/players/landingpage`;

   return callApi({
      url,
      method: 'GET',
      data: '',
   });
};

export const getDetailVoucher = async (id: string) => {
   const url = `${ROOT_API}/${API_VERSION}/players/${id}/detail`;

   return callApi({
      url,
      method: 'GET',
      data: '',
   });
};

export const getGameCategory = async () => {
   const url = `${ROOT_API}/${API_VERSION}/players/category`;

   return callApi({
      url,
      method: 'GET',
      data: '',
   });
};

export const setCheckout = async (data: CheckoutTypes) => {
   const url = `${ROOT_API}/${API_VERSION}/players/checkout`;

   return callApi({
      url,
      method: 'POST',
      data,
      token: true,
   });
};
