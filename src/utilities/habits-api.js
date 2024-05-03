import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:3001/api/habits';

export async function getAll() {
    return sendRequest(BASE_URL)
}

export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export async function getHabits(id) {
    return sendRequest(`${BASE_URL}/wellness/${id}`)
}

export async function createHabits(id, habit) {
    return sendRequest(`${BASE_URL}/wellness/${id}`, "POST", habit)
}