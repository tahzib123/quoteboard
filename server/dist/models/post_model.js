"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.PostSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.PostSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true }
});
exports.Post = mongoose_1.default.model("Post", exports.PostSchema);
//# sourceMappingURL=post_model.js.map