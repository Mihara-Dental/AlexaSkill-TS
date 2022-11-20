"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ask_sdk_core_1 = require("ask-sdk-core");
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return (0, ask_sdk_core_1.getRequestType)(handlerInput.requestEnvelope) === 'IntentRequest'
            && (0, ask_sdk_core_1.getIntentName)(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
exports.default = FallbackIntentHandler;
