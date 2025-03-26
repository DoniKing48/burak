import dotenv from "dotenv"; // enviromental varieblelarni integratsiya qiluvchi
dotenv.config();
import mongoose from "mongoose"; // ext pack, maqsadli object
import app from "./app";

//TCP - Doimiy bog'lanish
mongoose //asynch
.connect(process.env.MONGO_URL as string, {}) //connect methodi orqali database bilan doimiy aloqada bo'lishimiz
.then((data) => {
    console.log("SUCCES connecting MongoDB");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
        console.info(`The server is running succesfully on port: ${PORT}`)
        console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
})
.catch((err) => console.log("ERROR connecting MongoDB", err));