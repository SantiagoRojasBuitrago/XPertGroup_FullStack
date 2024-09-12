"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catsController_1 = require("../controllers/catsController");
const router = (0, express_1.Router)();
router.get('/breeds', catsController_1.getBreedsController);
router.get('/breeds/:breed_id', catsController_1.getBreedByIdController);
router.get('/breeds/search', catsController_1.searchBreedsController);
exports.default = router;
