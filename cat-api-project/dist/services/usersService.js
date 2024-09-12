"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = exports.getUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const getUser = async (username, password) => {
    return await userModel_1.default.findOne({ username, password });
};
exports.getUser = getUser;
const registerUser = async (username, password) => {
    const user = new userModel_1.default({ username, password });
    return await user.save();
};
exports.registerUser = registerUser;
