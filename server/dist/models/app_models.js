"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.BookSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
//# sourceMappingURL=app_models.js.map