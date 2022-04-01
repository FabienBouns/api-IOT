const { App } = require("gatos");
require("dotenv").config();

const { DB_USERNAME, DB_PASSWORD, PORT } = process.env;

$$roles.anonymous = "*";

App.middlewares = "./middlewares";
App.routes = "./routes";

App.clear.listen(
  PORT,
  "mongodb+srv://" +
    DB_USERNAME +
    ":" +
    DB_PASSWORD +
    "@cluster0.k5ug7.mongodb.net/sensor?retryWrites=true&w=majority"
);
