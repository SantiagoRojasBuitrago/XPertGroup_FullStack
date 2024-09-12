"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImagesByBreedId = void 0;
const axios_1 = __importDefault(require("axios"));
const API_KEY = 'live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP';
const BASE_URL = 'https://api.thecatapi.com/v1';
const getImagesByBreedId = async (breedId) => {
    const response = await axios_1.default.get(`${BASE_URL}/images/search`, {
        headers: { 'x-api-key': API_KEY },
        params: { breed_id: breedId }
    });
    return response.data;
};
exports.getImagesByBreedId = getImagesByBreedId;
