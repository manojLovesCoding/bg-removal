import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'



//App config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

//Intialize Middlewares
app.use(express.json())
app.use(cors())
app.use('/api/user', userRouter)

//API Routes
app.get('/', (req, res) => res.send("API WORKING"))

app.listen(PORT, () => console.log("SERVER RUNNING ON PORT " + PORT))