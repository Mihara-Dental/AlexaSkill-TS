"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ask_sdk_core_1 = require("ask-sdk-core");
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return (0, ask_sdk_core_1.getRequestType)(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
exports.default = SessionEndedRequestHandler;
