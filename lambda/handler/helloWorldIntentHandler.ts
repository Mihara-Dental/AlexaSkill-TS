import {getIntentName, getRequestType, HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";

const HelloWorldIntentHandler: RequestHandler = {
    canHandle(input: HandlerInput): Promise<boolean> | boolean {
        return getRequestType(input.requestEnvelope) === 'IntentRequest'
            && getIntentName(input.requestEnvelope) === 'HelloWorldIntent'
    },
    handle(input: HandlerInput): Promise<Response> | Response {
        const speakOutPut = 'Hello World';

        return input.responseBuilder
            .speak(speakOutPut)
            .getResponse();
    }
};

export default HelloWorldIntentHandler