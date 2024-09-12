"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImagesByBreedIdController = void 0;
const imagesService_1 = require("../services/imagesService");
const getImagesByBreedIdController = async (req, res) => {
    const { breed_id } = req.query;
    const images = await (0, imagesService_1.getImagesByBreedId)(breed_id);
    res.json(images);
};
exports.getImagesByBreedIdController = getImagesByBreedIdController;
