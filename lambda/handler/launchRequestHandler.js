"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ask_sdk_core_1 = require("ask-sdk-core");
const LaunchRequestHandler = {
    canHandle(input) {
        return (0, ask_sdk_core_1.getRequestType)(input.requestEnvelope) === 'LaunchRequest';
    },
    handle(input) {
        const speakOutput = 'Welcome, you can say Hello or Help. Which would you like to try?';
        return input.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
exports.default = LaunchRequestHandler;
