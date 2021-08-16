"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var startServer = function () {
    var app = express_1.default();
    var port = 5000;
    app.get('/', function (req, res) {
        res.status(200).send('ok!');
    });
    app.listen(port, function () { return console.log("http://localhost:" + port + " \u2705"); });
};
startServer();
//# sourceMappingURL=app.js.map