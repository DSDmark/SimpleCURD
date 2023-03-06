import axios from 'axios'

const URI = process.env.CLIENT_APIS_URI

export default axios.create({
  baseURL: URI,
  headers: {
    'Content-type': 'application/json',
  },
})
