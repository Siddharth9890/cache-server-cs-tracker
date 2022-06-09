"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const xss = require("xss-clean");
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = require("./db");
const limiter_1 = require("./src/utils/limiter");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.use(limiter_1.limiter);
app.use((0, helmet_1.default)());
app.use(xss());
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000"],
}));
(0, routes_1.default)(app);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.makeConnectionWithDB)();
    console.log("Server running on Port: ", PORT);
}));
process.on("unhandledRejection", (error) => {
    console.log(error);
    console.log("SERVER CLOSING 😱 CALL THE SUPPORT UNHANDLED REJECTION");
    process.exit(1);
});
process.on("uncaughtException", (error) => {
    console.log(error);
    console.log("SERVER CLOSING 😱 CALL THE SUPPORT UNCAUGHT EXCEPTION");
    process.exit(1);
});
