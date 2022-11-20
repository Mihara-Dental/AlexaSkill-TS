"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ask_sdk_core_1 = require("ask-sdk-core");
const HelloWorldIntentHandler = {
    canHandle(input) {
        return (0, ask_sdk_core_1.getRequestType)(input.requestEnvelope) === 'IntentRequest'
            && (0, ask_sdk_core_1.getIntentName)(input.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(input) {
        const speakOutPut = 'Hello World';
        return input.responseBuilder
            .speak(speakOutPut)
            .getResponse();
    }
};
exports.default = HelloWorldIntentHandler;
