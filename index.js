const express = require("express");
const cors = require("cors");
const db = require("./src/db");
const config = require("./src/shared/config");
const handleError = require("./src/shared/errors/handle");
//
const UserRoute = require("./src/modules/users/_api");
const PortfoliosRoute = require("./src/modules/portfolio/_api");
const BannersRoute = require("./src/modules/banners/_api");
const ServicesRoute = require("./src/modules/services/_api");
const CategoriesRoute = require("./src/modules/categories/_api");
const AboutRoute = require("./src/modules/about/_api");

const ContactsRoute = require("./src/modules/contacts/_api");
const Uploader = require("./src/modules/upload");

const app = express();

app.use(cors());
app.options("*", cors());

app.use(express.json());

app.use("/public", express.static("public"));

app.use(UserRoute);
app.use(PortfoliosRoute);
app.use(BannersRoute);
app.use(ServicesRoute);
app.use(ContactsRoute);
app.use(CategoriesRoute);
app.use(AboutRoute);
app.use(Uploader);

app.use(handleError);

db();
app.listen(config.port, () => {
  console.log(`Server ${config.port}-portda ishlayapti.`);
});
