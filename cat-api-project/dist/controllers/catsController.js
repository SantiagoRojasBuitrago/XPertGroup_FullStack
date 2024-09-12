"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBreedsController = exports.getBreedByIdController = exports.getBreedsController = void 0;
const catsService_1 = require("../services/catsService");
const getBreedsController = async (req, res) => {
    const breeds = await (0, catsService_1.getBreeds)();
    res.json(breeds);
};
exports.getBreedsController = getBreedsController;
const getBreedByIdController = async (req, res) => {
    const { breed_id } = req.params;
    const breed = await (0, catsService_1.getBreedById)(breed_id);
    res.json(breed);
};
exports.getBreedByIdController = getBreedByIdController;
const searchBreedsController = async (req, res) => {
    const { q } = req.query;
    const breeds = await (0, catsService_1.searchBreeds)(q);
    res.json(breeds);
};
exports.searchBreedsController = searchBreedsController;
