import sendRequest from "./send-request";
const BASE_URL = '/api/items'

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function getByIdInEditFormat(id) {
  return sendRequest(`${BASE_URL}/${id}/edit-format`)
}