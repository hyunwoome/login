"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config"));
var sign_1 = __importDefault(require("./router/sign"));
var app = (0, express_1.default)();
app.use('/api', sign_1.default);
app.listen(config_1.default.port, function () {
    console.log("http://localhost:" + config_1.default.port + " : \u2705");
});
