// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from "./send-request";
const BASE_URL = "/api/cakes";


export function getAllCakes() {
    return sendRequest(`${BASE_URL}`);
  }
  export async function createCake(cake) {
    return sendRequest(`${BASE_URL}`, "POST", cake);
  }
  
  export function getCakeById(cakeId) {
    return sendRequest(`${BASE_URL}/${cakeId}`);
  }
  
  export async function deleteCake(cakeId) {
    return sendRequest(`${BASE_URL}/${cakeId}`, "DELETE");
  }
  
  export async function updateCake(cakeId, cake) {
    console.log(cake);
    return sendRequest(`${BASE_URL}/${cakeId.id}`, "PUT", cake);
  }
  
  // This function is never actually used in SEI CAFE,
  // it's only provided as an example of RESTful routing, etc.
  // For example, you had a <MoviesDetailPage> component
  export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }
