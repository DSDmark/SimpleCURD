import axios from 'axios'

export default axios.create({
  baseURL: import.meta.env.VITE_APIS_URI,
  headers: {
    'Content-type': 'application/json',
  },
})
