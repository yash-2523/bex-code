import express, { Application } from "express"
import cors from 'cors';
import routes from './routes';
import { InitDB } from "./config";

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

InitDB()

app.use("/api", routes)

export {app};