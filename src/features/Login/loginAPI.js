import axios from "../../app/api";

const TEMP_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNhbmR1biBSYXRoc2FyYSIsImlhdCI6MTUxNjIzOTAyMn0.WiIrdMQs9XMm4ve6tiRRuXDkAhjBEQ6pgW9TAN2zFno';

export async function loginAPI(creds) {
    return await axios(resolve => resolve({name: creds.username, token: TEMP_TOKEN}))
}