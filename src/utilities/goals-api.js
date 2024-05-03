import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:3001/api/goals';

export async function getAll() {
    return sendRequest(BASE_URL)
}

export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export async function getGoals(id) {
    return sendRequest(`${BASE_URL}/wellness/${id}`)
}

export async function createGoals(id, goal) {
    return sendRequest(`${BASE_URL}/wellness/${id}`, "POST", goal)
}