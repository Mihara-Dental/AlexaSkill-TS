"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
const launchRequestHandler_1 = __importDefault(require("./handler/launchRequestHandler"));
const helloWorldIntentHandler_1 = __importDefault(require("./handler/helloWorldIntentHandler"));
const helpIntentHandler_1 = __importDefault(require("./handler/helpIntentHandler"));
const cancelAndStopIntentHandler_1 = __importDefault(require("./handler/cancelAndStopIntentHandler"));
const fallbackIntentHandler_1 = __importDefault(require("./handler/fallbackIntentHandler"));
const sessionEndedRequestHandler_1 = __importDefault(require("./handler/sessionEndedRequestHandler"));
const intentReflectorHandler_1 = __importDefault(require("./handler/intentReflectorHandler"));
const erroeHandler_1 = __importDefault(require("./handler/erroeHandler"));
exports.handler = ask_sdk_core_1.SkillBuilders.custom()
    .addRequestHandlers(launchRequestHandler_1.default, helloWorldIntentHandler_1.default, helpIntentHandler_1.default, cancelAndStopIntentHandler_1.default, fallbackIntentHandler_1.default, sessionEndedRequestHandler_1.default, intentReflectorHandler_1.default)
    .addErrorHandlers(erroeHandler_1.default)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
