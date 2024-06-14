const express = require("express");
const app = express();
const port = 3000;  

app.set("view engine", "pug");
app.use("/", require('./Routes/route.js'));

app.listen(port, () => {
	console.log(`Success! Your application is running on port ${port}.`);
});