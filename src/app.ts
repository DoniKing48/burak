import express, { urlencoded } from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

// 1-Entrance
const app = express();
app.use(express.static(path.join(__dirname, "public"))); //public folderni tashqariga olib chiqish
app.use(express.urlencoded({extended: true})); //MW for traditional API
app.use(express.json()); //Middleware for rest api
app.use(morgan(MORGAN_FORMAT))

// 2-Sessions

// 3-Views
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 4-Routers
app.use("/admin", routerAdmin); // BSSR: ejs
app.use("/", router);           // Single Page App: React, rest API

export default app;