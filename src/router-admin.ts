import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";


// Restaurant
routerAdmin.get/*method*/("/"/*url*/, restaurantController/*object*/.goHome/*method*/);

//API methodi (get) bilan endpoint (url) bajarilsa object (controller) => methodga (goHome) jo'natiladi

routerAdmin
.get("/login", /*CALL*/ restaurantController.getLogin /*CALL*/)   /*get-page ga borish*/
.post("/login", restaurantController.processLogin);               /*post-page da biror bir amal bajarib yuborish*/

routerAdmin
.get("/signup", restaurantController.getSignup)
.post("/signup", restaurantController.processSignup);
routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

// Product
routerAdmin.get(
    "/product/all",
    restaurantController.verifyRestaurant,
    productController.getAllProducts
);
routerAdmin.post(
    "/product/create",
    restaurantController.verifyRestaurant,
    productController.createNewProduct
);
routerAdmin.post(
    "/product/:id",
    restaurantController.verifyRestaurant,
    productController.updateChosenProduct
);
// Users

export default routerAdmin;