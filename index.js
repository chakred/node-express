import express from "express";
import routes from "./api/routes.js";

const PORT = 5000;
const app = express();

// IMPORTANT to see post body in json
app.use(express.json());
app.use('/', routes.router);

// routes.index(app);

// routes.posts(app);

app.listen(PORT, () => console.log(`Server starts to work with ${PORT}`));