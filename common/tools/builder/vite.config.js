"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_vue_1 = __importDefault(require("@vitejs/plugin-vue"));
const plugin_graphql_1 = __importDefault(require("@rollup/plugin-graphql"));
const vite_plugin_1 = require("@quasar/vite-plugin");
const deIndent_1 = __importDefault(require("./plugin/deIndent"));
const vite_resolve_1 = require("./vite.resolve");
// Define and export vite configs.
// https://vitejs.dev/config
exports.default = {
    resolve: vite_resolve_1.resolve,
    plugins: [
        (0, plugin_graphql_1.default)(),
        (0, deIndent_1.default)(),
        (0, vite_plugin_1.quasar)({
            sassVariables: false
        }),
        (0, plugin_vue_1.default)({
            reactivityTransform: true
        })
    ]
};
