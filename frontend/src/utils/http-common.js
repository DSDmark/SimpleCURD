import axios from 'axios'

// const URI = process.env.CLIENT_APIS_URI

export default axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    'Content-type': 'application/json',
  },
})
