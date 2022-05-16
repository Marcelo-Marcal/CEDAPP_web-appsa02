import axios from "axios";

const api = axios.create({
  baseURL: "http://vpn.hnsn.com.br:8283/" ||
    "http://138.185.33.188:3333/"
})

export { api }