"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var data = require('./data.json');
var app = express_1.default();
var port = 3001;
app.get('/', function (req, res) {
    res.send('Express + Typescript Server!');
});
app.get('/api/json', function (req, res) {
    res.json(data);
});
app.get('/api/html', function (req, res) {
    res.send('<table></table>');
});
app.listen(port, function () {
    return console.log("server is listening on " + port);
});
//# sourceMappingURL=index.js.map