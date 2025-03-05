"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http")); // Check the README.md file for instructions to the exercise
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const directory = "images";
const filePath = path_1.default.join(__dirname, directory);
const server = http_1.default.createServer((req, res) => {
    const { url, method } = req;
    if (url === "/view-image" && method === "GET") {
        fs_1.default.readFile(`${filePath}/veryhappydog.jpg`, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error reading file!");
                return;
            }
            res.writeHead(200, { "Content-Type": "image/jpeg" });
            res.end(data);
        });
        return;
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
