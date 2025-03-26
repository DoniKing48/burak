import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";


// Restaurant
routerAdmin.get/*method*/("/"/*url*/, restaurantController/*object*/.goHome/*method*/);

//API methodi (get) bilan endpoint (url) bajarilsa object (controller) => methodga (goHome) jo'natiladi

routerAdmin
.get("/login", /*CALL*/ restaurantController.getLogin /*CALL*/)   /*get-page ga borish*/
.post("/login", restaurantController.processLogin);               /*post-page da biror bir amal bajarib yuborish*/

routerAdmin
.get("/signup", restaurantController.getSignup)
.post("/signup", restaurantController.processSignup);

// Product

// Users

export default routerAdmin;