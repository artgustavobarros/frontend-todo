import axios from "axios";

export const api = axios.create({
  baseURL: 'https://backend-projeto-nest-todo.onrender.com'
})