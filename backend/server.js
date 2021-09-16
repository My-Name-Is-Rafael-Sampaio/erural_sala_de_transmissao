require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
const Routes = require("./app/routes");
const path = require('path');

app.use([
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    Routes,
]);


const io = (module.exports.io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
}));
const socketManager = require("./app/socketManager");
io.on("connection", socketManager);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
    });
}

server.listen(port, () => {
    console.log(`Servidor sendo executado na porta ${port}.`);
});