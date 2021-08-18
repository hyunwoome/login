"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== 'production')
    dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var startServer = function () {
    var app = express_1.default();
    var port = process.env.PORT;
    app.get('/', function (req, res) {
        res.status(200).send('ok!');
    });
    app.listen(port, function () { return console.log("http://localhost:" + port + " \u2705"); });
};
startServer();
//# sourceMappingURL=app.js.map