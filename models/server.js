const http = require("http");
const path = require("path");

const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

class Server {

    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.port = process.env.PORT;
        this.io = socketio(this.server, { /* config */ });
    }

    configSockets() {
        // I dont't know what to do with sockets yet, dont't pressure me >:(
    }

    setMiddlewares() {
        this.app.use(cors());
        this.app.use(express.static( path.resolve( __dirname, "../public" ) ));
    }

    start() {

        this.configSockets();
        this.setMiddlewares();

        this.app.listen(this.port, () => console.log(`Server running on port ${this.port}`))

    }

}

module.exports = Server;