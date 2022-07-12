"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var config_1 = __importDefault(require("./config"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var port = config_1.default.port || 3000;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express_1.default.json());
app.use('/', routes_1.default);
var corsOption = {
    optionsSuccessStatus: 200,
    origin: true,
    credentials: true,
    methods: 'POST,GET,PUT,OPTIONS,DELETE'
};
app.use((0, cors_1.default)(corsOption));
//Error handling for strange request from unkown endpoit
app.use(function (_req, res) {
    res.status(404).json({
        message: 'Your are using wrong API. Please, read the API documentaion.',
    });
});
app.listen(port, function () {
    console.log("starting app on: localhost:".concat(port));
});
exports.default = app;
