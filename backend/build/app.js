"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var db_1 = __importDefault(require("./loaders/db"));
var routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
var app = express_1.default();
var port = process.env.PORT || 5000;
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(port, function () {
    console.log("http://localhost:" + port + " : \u2705");
    db_1.default();
    app.use('/api', routes_1.default);
});
//# sourceMappingURL=app.js.map