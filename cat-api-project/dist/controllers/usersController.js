"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserController = exports.loginUserController = void 0;
const usersService_1 = require("../services/usersService");
const loginUserController = async (req, res) => {
    const { username, password } = req.query;
    const user = await (0, usersService_1.getUser)(username, password);
    if (user) {
        res.json(user);
    }
    else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
exports.loginUserController = loginUserController;
const registerUserController = async (req, res) => {
    const { username, password } = req.body;
    const user = await (0, usersService_1.registerUser)(username, password);
    res.status(201).json(user);
};
exports.registerUserController = registerUserController;
