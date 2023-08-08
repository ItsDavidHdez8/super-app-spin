import axios from "axios";


export const apiDomain = "http://localhost:3001"

const apiDB = axios.create({
  baseURL:apiDomain
})

export default apiDB;