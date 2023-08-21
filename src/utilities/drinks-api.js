import sendRequest from './send-request';
const BASE_URL = '/api/drinks';

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addItemToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}


export function removeItemFromCart(itemId) {
    return sendRequest(`${BASE_URL}/cart/remove`, 'PUT', { itemId });
  }
