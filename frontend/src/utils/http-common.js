import axios from 'axios'

export default axios.create({
  baseURL: import.meta.env.VITE_APIS_URI || "http://localhost:4000",
  headers: {
    'Content-type': 'application/json',
  },
})
