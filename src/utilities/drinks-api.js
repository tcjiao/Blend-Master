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

export function createDrink(data) {
    // Changing data on the server, so make it a POST request
    return sendRequest(`${BASE_URL}/cart/createDrink`, 'POST', data);
}

export function getAllForUser() {
  return sendRequest(`${BASE_URL}`);
}

export function deleteDrink(drinkId) {
  return sendRequest(`${BASE_URL}/${drinkId}`, 'DELETE');
}

export function updateDrink(drinkId, data) {
  return sendRequest(`${BASE_URL}/${drinkId}`, 'PUT', data);
}

export function getDrink(drinkId) {
    return sendRequest(`${BASE_URL}/${drinkId}`, 'GET');
}
