"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const router = (0, express_1.Router)();
router.get('/login', usersController_1.loginUserController);
router.post('/register', usersController_1.registerUserController);
exports.default = router;
