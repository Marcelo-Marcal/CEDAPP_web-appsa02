import axios from "axios";

const api = axios.create({
  baseURL: "http://vpn.hnsn.com.br:8283/"

})

export { api }