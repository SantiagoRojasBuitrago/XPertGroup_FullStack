"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imagesController_1 = require("../controllers/imagesController");
const router = (0, express_1.Router)();
router.get('/imagesbybreedid', imagesController_1.getImagesByBreedIdController);
exports.default = router;
