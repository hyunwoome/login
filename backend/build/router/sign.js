"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/login', function (req, res) {
    res.send('login router');
});
exports.default = router;
