"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ask_sdk_core_1 = require("ask-sdk-core");
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return (0, ask_sdk_core_1.getRequestType)(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = (0, ask_sdk_core_1.getIntentName)(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
exports.default = IntentReflectorHandler;
