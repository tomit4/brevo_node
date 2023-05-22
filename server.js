const express = require("express");
const app = express();
const path = require("path");
const route = express.Router();
const sendinblue = require("./app/sendinblue");
require("dotenv").config();

// configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

route.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// POST
app.post("/smtp/email", (req, res) => {
    try {
        const { msg = "" } = req.body;
        const sendSmtpEmail = {
            to: [
                {
                    email: process.env.MY_EMAIL,
                },
            ],
            templateId: 1,
            params: {
                link: msg,
            },
        };
        sendinblue(sendSmtpEmail);
        res.send("success");
    } catch (err) {
        console.error("ERROR :=>", err);
    }
});

app.listen(process.env.PORT, () => {
    console.log("App running on port :=>", process.env.PORT);
});
