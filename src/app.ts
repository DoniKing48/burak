//Backend server

import express, { urlencoded } from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

// 1-Entrance
const app = express();                                   //serverni MW orqali qurish
app.use(express.static(path.join(__dirname, "public"))); //public folderni tashqariga olib chiqish
app.use(express.urlencoded({extended: true}));           //MW for traditional API
app.use(express.json());                                 //MW for rest API
app.use(morgan(MORGAN_FORMAT))                           //performance control, qancha vaqt ketayotganini nazorat qilish uchun

//Patterns: Design & Architechtural
//API: Traditional, Rest, GraphQL
//Methods: get & post
//Structure: header & body

// 2-Sessions

// 3-Views
app.set("views", path.join(__dirname, "views")); //BSSR uchun EJS frameworkini intergartsiya qilish
app.set("view engine", "ejs");                   //view engine EJS, view is being used for view generation

// 4-Routers
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router);           // Single Page App: React, rest API

export default app;