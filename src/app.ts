import express, { urlencoded } from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";

// 1-Entrance
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); //Middleware for rest api

// 2-Sessions

// 3-Views
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 4-Routers
app.use("/admin", routerAdmin); // BSSR: ejs
app.use("/", router);           // SPA: React, rest API

export default app;