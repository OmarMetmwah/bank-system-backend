"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cutomer_routes_1 = __importDefault(require("./api/cutomer.routes"));
var transactions_routes_1 = __importDefault(require("./api/transactions.routes"));
var routes = (0, express_1.Router)();
routes.use('/customers', cutomer_routes_1.default);
routes.use('/transactions', transactions_routes_1.default);
exports.default = routes;
