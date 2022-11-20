"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ask_sdk_core_1 = require("ask-sdk-core");
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return (0, ask_sdk_core_1.getRequestType)(handlerInput.requestEnvelope) === 'IntentRequest'
            && ((0, ask_sdk_core_1.getIntentName)(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || (0, ask_sdk_core_1.getIntentName)(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
exports.default = CancelAndStopIntentHandler;
