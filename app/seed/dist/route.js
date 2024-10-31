"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.GET = void 0;
var bcrypt_1 = require("bcrypt");
var postgres_1 = require("@vercel/postgres");
var placeholder_data_1 = require("../lib/placeholder-data");
var client = await postgres_1.db.connect();
function seedUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var insertedUsers;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.sql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\""], ["CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\""])))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, client.sql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    CREATE TABLE IF NOT EXISTS users (\n      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,\n      name VARCHAR(255) NOT NULL,\n      email TEXT NOT NULL UNIQUE,\n      password TEXT NOT NULL\n    );\n  "], ["\n    CREATE TABLE IF NOT EXISTS users (\n      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,\n      name VARCHAR(255) NOT NULL,\n      email TEXT NOT NULL UNIQUE,\n      password TEXT NOT NULL\n    );\n  "])))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, Promise.all(placeholder_data_1.users.map(function (user) { return __awaiter(_this, void 0, void 0, function () {
                            var hashedPassword;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, bcrypt_1["default"].hash(user.password, 10)];
                                    case 1:
                                        hashedPassword = _a.sent();
                                        return [2 /*return*/, client.sql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        INSERT INTO users (id, name, email, password)\n        VALUES (", ", ", ", ", ", ", ")\n        ON CONFLICT (id) DO NOTHING;\n      "], ["\n        INSERT INTO users (id, name, email, password)\n        VALUES (", ", ", ", ", ", ", ")\n        ON CONFLICT (id) DO NOTHING;\n      "])), user.id, user.name, user.email, hashedPassword)];
                                }
                            });
                        }); }))];
                case 3:
                    insertedUsers = _a.sent();
                    return [2 /*return*/, insertedUsers];
            }
        });
    });
}
function seedInvoices() {
    return __awaiter(this, void 0, void 0, function () {
        var insertedInvoices;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.sql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\""], ["CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\""])))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, client.sql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    CREATE TABLE IF NOT EXISTS invoices (\n      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,\n      customer_id UUID NOT NULL,\n      amount INT NOT NULL,\n      status VARCHAR(255) NOT NULL,\n      date DATE NOT NULL\n    );\n  "], ["\n    CREATE TABLE IF NOT EXISTS invoices (\n      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,\n      customer_id UUID NOT NULL,\n      amount INT NOT NULL,\n      status VARCHAR(255) NOT NULL,\n      date DATE NOT NULL\n    );\n  "])))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, Promise.all(placeholder_data_1.invoices.map(function (invoice) { return client.sql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        INSERT INTO invoices (customer_id, amount, status, date)\n        VALUES (", ", ", ", ", ", ", ")\n        ON CONFLICT (id) DO NOTHING;\n      "], ["\n        INSERT INTO invoices (customer_id, amount, status, date)\n        VALUES (", ", ", ", ", ", ", ")\n        ON CONFLICT (id) DO NOTHING;\n      "])), invoice.customer_id, invoice.amount, invoice.status, invoice.date); }))];
                case 3:
                    insertedInvoices = _a.sent();
                    return [2 /*return*/, insertedInvoices];
            }
        });
    });
}
function seedCustomers() {
    return __awaiter(this, void 0, void 0, function () {
        var insertedCustomers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.sql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\""], ["CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\""])))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, client.sql(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    CREATE TABLE IF NOT EXISTS customers (\n      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,\n      name VARCHAR(255) NOT NULL,\n      email VARCHAR(255) NOT NULL,\n      image_url VARCHAR(255) NOT NULL\n    );\n  "], ["\n    CREATE TABLE IF NOT EXISTS customers (\n      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,\n      name VARCHAR(255) NOT NULL,\n      email VARCHAR(255) NOT NULL,\n      image_url VARCHAR(255) NOT NULL\n    );\n  "])))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, Promise.all(placeholder_data_1.customers.map(function (customer) { return client.sql(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        INSERT INTO customers (id, name, email, image_url)\n        VALUES (", ", ", ", ", ", ", ")\n        ON CONFLICT (id) DO NOTHING;\n      "], ["\n        INSERT INTO customers (id, name, email, image_url)\n        VALUES (", ", ", ", ", ", ", ")\n        ON CONFLICT (id) DO NOTHING;\n      "])), customer.id, customer.name, customer.email, customer.image_url); }))];
                case 3:
                    insertedCustomers = _a.sent();
                    return [2 /*return*/, insertedCustomers];
            }
        });
    });
}
function seedRevenue() {
    return __awaiter(this, void 0, void 0, function () {
        var insertedRevenue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.sql(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    CREATE TABLE IF NOT EXISTS revenue (\n      month VARCHAR(4) NOT NULL UNIQUE,\n      revenue INT NOT NULL\n    );\n  "], ["\n    CREATE TABLE IF NOT EXISTS revenue (\n      month VARCHAR(4) NOT NULL UNIQUE,\n      revenue INT NOT NULL\n    );\n  "])))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, Promise.all(placeholder_data_1.revenue.map(function (rev) { return client.sql(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n        INSERT INTO revenue (month, revenue)\n        VALUES (", ", ", ")\n        ON CONFLICT (month) DO NOTHING;\n      "], ["\n        INSERT INTO revenue (month, revenue)\n        VALUES (", ", ", ")\n        ON CONFLICT (month) DO NOTHING;\n      "])), rev.month, rev.revenue); }))];
                case 2:
                    insertedRevenue = _a.sent();
                    return [2 /*return*/, insertedRevenue];
            }
        });
    });
}
function GET() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 9]);
                    return [4 /*yield*/, client.sql(templateObject_12 || (templateObject_12 = __makeTemplateObject(["BEGIN"], ["BEGIN"])))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, seedUsers()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, seedCustomers()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, seedInvoices()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, seedRevenue()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, client.sql(templateObject_13 || (templateObject_13 = __makeTemplateObject(["COMMIT"], ["COMMIT"])))];
                case 6:
                    _a.sent();
                    return [2 /*return*/, Response.json({ message: 'Database seeded successfully' })];
                case 7:
                    error_1 = _a.sent();
                    return [4 /*yield*/, client.sql(templateObject_14 || (templateObject_14 = __makeTemplateObject(["ROLLBACK"], ["ROLLBACK"])))];
                case 8:
                    _a.sent();
                    return [2 /*return*/, Response.json({ error: error_1 }, { status: 500 })];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.GET = GET;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
