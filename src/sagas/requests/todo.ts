import axios from "axios";

// Получаем тоду с сервера

export function requestGetTodo() {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos/1"
  });
}