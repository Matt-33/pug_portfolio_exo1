const render = require("./render");
const fs = require("fs");
const path = require("path");
const menuItems = require("./data/menuItems");

const html = render("pages/home.pug", {
	menu: menuItems,
});

fs.writeFileSync(path.join(__dirname, "public/index.html"), html, "utf8");

console.log("Page générée dans public/index.html");
