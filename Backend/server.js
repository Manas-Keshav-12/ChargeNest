import express from "express"
import ejs from "ejs"
import path from "path"
import { fileURLToPath } from "url";

const app = express();
const Port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    console.log(req.body);
    res.send("Login Confirmed")
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    console.log(req.body);
    res.send("Registration Confirmed")
});

app.get("/about", (req, res) => {
    res.render("partials/about");
});

app.get("/contact", (req, res) => {
    res.render("partials/contact");
});

app.listen(Port, () => {
    console.log(`The server is listening on ${Port}`)
})

