import mongoose from 'mongoose'

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`

mongoose.set('strictQuery', false)

if (!URI) {
  console.error('MONGO_URI is undefined')
  process.exit(1)
}

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  err => {
    if (err) throw err
    console.log('mongodb connected.')
  },
)
